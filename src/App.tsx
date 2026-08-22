import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { CompanyInfo, Course, RequestType } from './types';
import { getStoredCompanyInfo } from './data/company';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CompanySettingsModal } from './components/CompanySettingsModal';
import { QuoteModal } from './components/QuoteModal';
import { CourseModal } from './components/CourseModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { PAGE_SEO_DATA, TOPIC_SEO_DATA, updateDocumentMetadata } from './utils/seo';

import { HomeView } from './views/HomeView';

// Code splitting: Lazy load secondary views to reduce initial bundle size and speed up FCP/LCP
const CoursesView = lazy(() => import('./views/CoursesView').then(m => ({ default: m.CoursesView })));
const ServicesView = lazy(() => import('./views/ServicesView').then(m => ({ default: m.ServicesView })));
const ProjectsView = lazy(() => import('./views/ProjectsView').then(m => ({ default: m.ProjectsView })));
const AboutView = lazy(() => import('./views/AboutView').then(m => ({ default: m.AboutView })));
const ContactView = lazy(() => import('./views/ContactView').then(m => ({ default: m.ContactView })));

/**
 * Lightweight Loading Skeleton for Suspense Route Transitions
 */
function RouteSuspenseFallback() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 animate-pulse space-y-8" aria-busy="true">
      <div className="h-40 bg-slate-200 rounded-3xl w-full" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-72 bg-slate-200 rounded-2xl" />
        <div className="h-72 bg-slate-200 rounded-2xl" />
        <div className="h-72 bg-slate-200 rounded-2xl" />
      </div>
    </div>
  );
}

/**
 * Scroll to top automatically when route pathname changes
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

/**
 * Manages SEO Titles, Meta Descriptions, Canonical URLs & migration of legacy hash URLs
 */
function SeoAndHashMigration({ activeCourse }: { activeCourse: Course | null }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Detect and migrate any legacy hash-based URLs (e.g. #/projects, #courses) to clean routes
    if (window.location.hash) {
      const cleanHash = window.location.hash.replace('#/', '').replace('#', '');
      const hashMap: Record<string, string> = {
        courses: '/formations',
        formations: '/formations',
        services: '/services',
        projects: '/realisations',
        realisations: '/realisations',
        about: '/a-propos',
        'a-propos': '/a-propos',
        contact: '/contact',
        home: '/',
      };

      if (hashMap[cleanHash]) {
        navigate(hashMap[cleanHash], { replace: true });
      }
    }
  }, [navigate]);

  useEffect(() => {
    // 2. Manage Dynamic SEO Title and Meta Description per Page & Active Modal
    if (activeCourse && TOPIC_SEO_DATA[activeCourse.id]) {
      const topicSeo = TOPIC_SEO_DATA[activeCourse.id];
      updateDocumentMetadata(topicSeo.title, topicSeo.description, location.pathname);
    } else {
      const currentSeo = PAGE_SEO_DATA[location.pathname] || PAGE_SEO_DATA['/'];
      updateDocumentMetadata(currentSeo.title, currentSeo.description, location.pathname);
    }
  }, [location.pathname, activeCourse]);

  return null;
}

function MainLayout() {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>(getStoredCompanyInfo());

  // Modals state
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quotePrefilledType, setQuotePrefilledType] = useState<RequestType>('Demande de devis');
  const [quotePrefilledSubject, setQuotePrefilledSubject] = useState<string>('');

  const [courseModalData, setCourseModalData] = useState<Course | null>(null);

  const handleOpenQuoteModal = (type: RequestType = 'Demande de devis', subject: string = '') => {
    setQuotePrefilledType(type);
    setQuotePrefilledSubject(subject);
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <ScrollToTop />
      <SeoAndHashMigration activeCourse={courseModalData} />

      {/* Navigation Header */}
      <Header
        companyInfo={companyInfo}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenQuoteModal={() => handleOpenQuoteModal('Demande de devis')}
      />

      {/* Main Content Area with Clean Routes */}
      <main className="flex-grow">
        <Suspense fallback={<RouteSuspenseFallback />}>
          <Routes>
            {/* Main Clean Routes */}
            <Route
              path="/"
              element={
                <HomeView
                  companyInfo={companyInfo}
                  onOpenQuoteModal={handleOpenQuoteModal}
                />
              }
            />
            <Route
              path="/formations"
              element={
                <CoursesView
                  onSelectCourse={(course) => setCourseModalData(course)}
                  onRequestCourse={(title) => handleOpenQuoteModal('Formation', title)}
                />
              }
            />
            <Route
              path="/services"
              element={
                <ServicesView
                  onRequestService={(title) => handleOpenQuoteModal('Diagnostic ou dépannage', title)}
                />
              }
            />
            <Route
              path="/realisations"
              element={
                <ProjectsView
                  onOpenQuoteModal={handleOpenQuoteModal}
                />
              }
            />
            <Route
              path="/a-propos"
              element={
                <AboutView
                  companyInfo={companyInfo}
                  onOpenSettings={() => setIsSettingsOpen(true)}
                  onOpenQuoteModal={() => handleOpenQuoteModal('Demande de devis')}
                />
              }
            />
            <Route
              path="/contact"
              element={
                <ContactView
                  companyInfo={companyInfo}
                  initialType={quotePrefilledType}
                  initialSubject={quotePrefilledSubject}
                />
              }
            />

            {/* Legacy route redirects to French clean routes */}
            <Route path="/projects" element={<Navigate to="/realisations" replace />} />
            <Route path="/courses" element={<Navigate to="/formations" replace />} />
            <Route path="/about" element={<Navigate to="/a-propos" replace />} />

            {/* 404 Wildcard redirect to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>

      {/* Footer */}
      <Footer
        companyInfo={companyInfo}
        onOpenQuoteModal={() => handleOpenQuoteModal('Demande de devis')}
      />

      {/* Company Settings Modal */}
      <CompanySettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        companyInfo={companyInfo}
        onUpdate={(newInfo) => setCompanyInfo(newInfo)}
      />

      {/* Interactive Quote / Technical Request Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        prefilledType={quotePrefilledType}
        prefilledSubject={quotePrefilledSubject}
      />

      {/* Course Detail Modal */}
      <CourseModal
        course={courseModalData}
        onClose={() => setCourseModalData(null)}
        onRequestCourse={(title) => handleOpenQuoteModal('Formation', title)}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppWidget
        companyInfo={companyInfo}
        onOpenQuoteModal={handleOpenQuoteModal}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}
