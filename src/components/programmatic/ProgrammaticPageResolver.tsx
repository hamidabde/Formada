import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ProgrammaticType } from '../../types/programmatic';
import { getProgrammaticPage, getProgrammaticPageBySlug } from '../../data/programmatic';
import { updateDocumentMetadata } from '../../utils/seo';
import { FormationTemplateView } from './FormationTemplateView';
import { ServiceTemplateView } from './ServiceTemplateView';
import { GuideTemplateView } from './GuideTemplateView';
import { AlertCircle, ArrowLeft } from 'lucide-react';

interface Props {
  enforcedType?: ProgrammaticType;
  onOpenQuoteModal: (type?: any, subject?: string) => void;
}

export const ProgrammaticPageResolver: React.FC<Props> = ({ enforcedType, onOpenQuoteModal }) => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/" replace />;
  }

  // Look up page
  const page = enforcedType 
    ? getProgrammaticPage(enforcedType, slug)
    : getProgrammaticPageBySlug(slug);

  useEffect(() => {
    if (page) {
      // 1. Update Title and Meta tags
      updateDocumentMetadata(page.title, page.description, window.location.pathname);

      // 2. Inject structured Schema.org JSON-LD data
      let jsonLdScript = document.getElementById('jsonld-programmatic-seo') as HTMLScriptElement | null;
      if (!jsonLdScript) {
        jsonLdScript = document.createElement('script');
        jsonLdScript.id = 'jsonld-programmatic-seo';
        jsonLdScript.type = 'application/ld+json';
        document.head.appendChild(jsonLdScript);
      }

      let schemaData: any = null;

      if (page.type === 'formation') {
        schemaData = {
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: page.h1,
          description: page.description,
          provider: {
            '@type': 'Organization',
            name: 'INDUSTRIELTECH Maroc',
            sameAs: 'https://industrieltech.com'
          },
          courseMode: 'Blended',
          educationalCredentialAwarded: 'Attestation de formation technique professionnelle',
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'Onsite',
            location: 'Casablanca, Maroc'
          }
        };
      } else if (page.type === 'service') {
        schemaData = {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: page.h1,
          description: page.description,
          provider: {
            '@type': 'LocalBusiness',
            name: 'INDUSTRIELTECH Maroc',
            telephone: '+212 723033508',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'MA',
              addressLocality: 'Casablanca'
            }
          },
          areaServed: {
            '@type': 'Country',
            name: 'Maroc'
          }
        };
      } else if (page.type === 'guide') {
        schemaData = {
          '@context': 'https://schema.org',
          '@type': 'TechArticle',
          headline: page.h1,
          description: page.description,
          author: {
            '@type': 'Organization',
            name: 'INDUSTRIELTECH'
          },
          publisher: {
            '@type': 'Organization',
            name: 'INDUSTRIELTECH Maroc',
            logo: {
              '@type': 'ImageObject',
              url: 'https://industrieltech.com/icon-512.png'
            }
          },
          datePublished: page.updatedAt,
          dateModified: page.updatedAt
        };
      }

      if (schemaData) {
        jsonLdScript.textContent = JSON.stringify(schemaData);
      }
    }

    return () => {
      // Clean up injected script when leaving page
      const script = document.getElementById('jsonld-programmatic-seo');
      if (script) {
        script.remove();
      }
    };
  }, [page]);

  if (!page) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <AlertCircle className="w-16 h-16 text-slate-400 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-slate-800 mb-2">Page non trouvée</h1>
        <p className="text-slate-600 mb-6 text-sm">
          Le sujet demandé n'existe pas ou a été déplacé.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a365d] text-white font-bold text-sm rounded-xl hover:bg-slate-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour à l'accueil</span>
        </Link>
      </div>
    );
  }

  // Render appropriate template
  switch (page.type) {
    case 'formation':
      return <FormationTemplateView page={page} onOpenQuoteModal={onOpenQuoteModal} />;
    case 'service':
      return <ServiceTemplateView page={page} onOpenQuoteModal={onOpenQuoteModal} />;
    case 'guide':
      return <GuideTemplateView page={page} onOpenQuoteModal={onOpenQuoteModal} />;
    default:
      return <Navigate to="/" replace />;
  }
};
