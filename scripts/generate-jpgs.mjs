import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outDir = './public/images';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function escapeXml(unsafe) {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const images = [
  {
    filename: 'hero-automatisme-industrie.jpg',
    category: 'INGÉNIERIE & FORMATION',
    title: 'Automatisme Industriel & Armoires Électriques',
    subtitle: 'Systèmes API Siemens, Schneider, Variateurs de Vitesse & Supervision',
    accentColor: '#f97316',
    secondaryColor: '#38bdf8',
    badge: 'CENTRE TECHNIQUE MAROC',
    iconType: 'cabinet',
    specs: ['Siemens S7-1500 / TIA Portal', 'Schneider Electric Modicon', 'Variateurs VFD Sinamics & Altivar', 'Réseaux PROFINET & Modbus TCP']
  },
  {
    filename: 'formation-pratique-banc.jpg',
    category: 'TRAVAUX PRATIQUES (70%)',
    title: 'Bancs d’Essais Pédagogiques Industriels',
    subtitle: 'Mise en situation réelle sur automates, pupitres IHM et variateurs',
    accentColor: '#f97316',
    secondaryColor: '#10b981',
    badge: 'PLATEFORME TECHNIQUE',
    iconType: 'bench',
    specs: ['Automates programmables réels', 'Pupitres tactiles IHM raccordés', 'Cartes E/S TOR & Analogiques', 'Simulateurs de procédés usine']
  },
  {
    filename: 'reparation-carte-electronique.jpg',
    category: 'SERVICES & LABORATOIRE',
    title: 'Diagnostic & Réparation de Cartes Électroniques',
    subtitle: 'Dépannage au composant, variateurs, alimentations & commandes CNC',
    accentColor: '#0ea5e9',
    secondaryColor: '#f59e0b',
    badge: 'LABO ÉLECTRONIQUE',
    iconType: 'circuit',
    specs: ['Diagnostic au banc & oscilloscope', 'Dessoudage/Soudage CMS & BGA', 'Contrôle thermique infrarouge', 'Tests en charge dynamique']
  },
  {
    filename: 'industrial-automation.jpg',
    category: 'FORMATION AUTOMATISME',
    title: 'Automatisme Industriel & API / PLC',
    subtitle: 'Programmation TIA Portal, Grafcet, Ladder & Diagnostic en ligne',
    accentColor: '#f97316',
    secondaryColor: '#60a5fa',
    badge: 'SIEMENS • SCHNEIDER',
    iconType: 'plc',
    specs: ['CPU Siemens S7-1200 / S7-1500', 'Schneider Modicon M221/M241', 'Grafcet séquentiel & Ladder', 'Tables d’animation & forçage']
  },
  {
    filename: 'hmi-training.jpg',
    category: 'FORMATION SUPERVISION',
    title: 'Interfaces Homme-Machine (IHM / HMI)',
    subtitle: 'Conception de pupitres tactiles, synoptiques temps réel & alarmes',
    accentColor: '#38bdf8',
    secondaryColor: '#fb923c',
    badge: 'WINCC • MAGELIS',
    iconType: 'hmi',
    specs: ['WinCC Unified / Comfort', 'Vijeo Designer & EcoStruxure', 'Synoptiques dynamiques & courbes', 'Gestion des alarmes & recettes']
  },
  {
    filename: 'scada-training.jpg',
    category: 'FORMATION SUPERVISION',
    title: 'Supervision Industrielle SCADA',
    subtitle: 'Télémétrie d’usine, bases de données, alarmes et synoptiques multi-postes',
    accentColor: '#818cf8',
    secondaryColor: '#34d399',
    badge: 'SCADA CONTROL ROOM',
    iconType: 'scada',
    specs: ['WinCC SCADA / Wonderware InTouch', 'Archivage SQL & Historisation', 'Télésurveillance & Télégestion', 'Cybersécurité industrielle']
  },
  {
    filename: 'industrial-networks.jpg',
    category: 'FORMATION RÉSEAUX',
    title: 'Réseaux & Bus de Terrain Industriels',
    subtitle: 'Architectures PROFINET, Ethernet/IP, Modbus TCP & commutateurs usine',
    accentColor: '#10b981',
    secondaryColor: '#38bdf8',
    badge: 'PROFINET • MODBUS',
    iconType: 'network',
    specs: ['PROFINET IO & Profibus-DP', 'Modbus TCP / RTU RS485', 'Switches industriels manageables', 'Analyseurs de trames & Wireshark']
  },
  {
    filename: 'automated-system-diagnostics.jpg',
    category: 'FORMATION DIAGNOSTIC',
    title: 'Diagnostic & Recherche Méthodique de Pannes',
    subtitle: 'Localisation de défauts électriques, capteurs, actionneurs & cycles automates',
    accentColor: '#eab308',
    secondaryColor: '#ef4444',
    badge: 'DÉPANNAGE USINE',
    iconType: 'diagnostic',
    specs: ['Méthode de diagnostic systématique', 'Contrôle à l’oscilloscope & multimètre', 'Recherche de pannes séquentielles', 'Remise en service rapide']
  },
  {
    filename: 'variable-speed-drives.jpg',
    category: 'FORMATION VARIATION DE VITESSE',
    title: 'Variateurs de Vitesse Industriels (VFD)',
    subtitle: 'Paramétrage, régulation PID, démarrage progressif & contrôle moteur',
    accentColor: '#f97316',
    secondaryColor: '#38bdf8',
    badge: 'SINAMICS • ALTIVAR',
    iconType: 'vfd',
    specs: ['Siemens Sinamics G120 / S120', 'Schneider Altivar ATV600 / 900', 'Régulation Vectorielle & U/f', 'Communication réseau & bus']
  },
  {
    filename: 'photovoltaic-systems.jpg',
    category: 'FORMATION ÉNERGIE RENOUVELABLE',
    title: 'Énergie Solaire Photovoltaïque Industrielle',
    subtitle: 'Étude, dimensionnement, onduleurs réseau, injection & pompage solaire',
    accentColor: '#f59e0b',
    secondaryColor: '#10b981',
    badge: 'SOLAIRE PHOTOVOLTAÏQUE',
    iconType: 'solar',
    specs: ['Onduleurs triphasés & MPPT', 'Dimensionnement PVsyst & Helioscope', 'Coffrets DC/AC & Protections', 'Pompage solaire & autoconsommation']
  },
  {
    filename: 'industrial-electricity.jpg',
    category: 'FORMATION ÉLECTRICITÉ',
    title: 'Électricité Industrielle & Armoires de Distribution',
    subtitle: 'Schémas électriques, contacteurs, disjoncteurs moteurs & norme NF C 15-100',
    accentColor: '#3b82f6',
    secondaryColor: '#f97316',
    badge: 'BASSE TENSION NF C 15-100',
    iconType: 'electricity',
    specs: ['Lecture de schémas unifilaires', 'Sélection d’appareillage de coupure', 'Câblage selon normes NF C 15-100', 'Équilibrage de charges triphasées']
  },
  {
    filename: 'energy-efficiency-iso50001.jpg',
    category: 'FORMATION AUDIT & ÉNERGIE',
    title: 'Efficacité Énergétique & ISO 50001',
    subtitle: 'Audit énergétique usine, analyseurs de réseau, réduction des consommations',
    accentColor: '#10b981',
    secondaryColor: '#6366f1',
    badge: 'AUDIT & MANAGEMENT ISO',
    iconType: 'energy',
    specs: ['Analyseurs d’énergie triphasés', 'Bilan de puissance & Cos Phi', 'Optimisation moteurs & air comprimé', 'Plan de comptage & ISO 50001']
  },
  {
    filename: 'industrial-maintenance.jpg',
    category: 'FORMATION MAINTENANCE',
    title: 'Maintenance Industrielle & GMAO',
    subtitle: 'Maintenance préventive, corrective, alignement laser & analyse vibratoire',
    accentColor: '#64748b',
    secondaryColor: '#f97316',
    badge: 'MAINTENANCE USINE',
    iconType: 'maintenance',
    specs: ['Alignement laser d’arbres', 'Analyse vibratoire de roulements', 'Gestion de stocks & GMAO', 'Indicateurs MTBF & MTTR']
  },
  {
    filename: 'industrial-electronics.jpg',
    category: 'FORMATION ÉLECTRONIQUE',
    title: 'Électronique de Puissance & Cartes Industrielles',
    subtitle: 'Composants semi-conducteurs, IGBT, redresseurs, hacheurs & dépannage labo',
    accentColor: '#0ea5e9',
    secondaryColor: '#ec4899',
    badge: 'ÉLECTRONIQUE DE PUISSANCE',
    iconType: 'circuit',
    specs: ['Modules de puissance IGBT & Mosfet', 'Alimentations à découpage SMPS', 'Oscilloscope numérique & sondes', 'Remplacement composants CMS']
  },
  {
    filename: 'electrical-safety.jpg',
    category: 'FORMATION SÉCURITÉ',
    title: 'Habilitation Électrique (NF C 18-510)',
    subtitle: 'Titres B1V, B2V, BR, BC, H0V, prévention des risques & consignation',
    accentColor: '#ef4444',
    secondaryColor: '#f59e0b',
    badge: 'CERTIFICATION NF C 18-510',
    iconType: 'safety',
    specs: ['Consignation électrique 5 étapes', 'Vérificateur d’absence de tension (VAT)', 'Équipements de protection (EPI)', 'Évaluation théorique & pratique']
  },
  {
    filename: 'qhse.jpg',
    category: 'FORMATION QHSE',
    title: 'Management QHSE & Sécurité Industrielle',
    subtitle: 'Prévention des accidents, consignation LOTO, normes ISO 45001 & 14001',
    accentColor: '#14b8a6',
    secondaryColor: '#f97316',
    badge: 'SÉCURITÉ & ENVIRONNEMENT',
    iconType: 'qhse',
    specs: ['Procédures LOTO (Lockout/Tagout)', 'Analyse des risques au poste', 'Normes ISO 45001 / ISO 14001', 'Plans de prévention & audits']
  },
  {
    filename: 'fallback-industrie.jpg',
    category: 'CENTRE TECHNIQUE INDUSTRIEL',
    title: 'Expertise & Formations Industrielles au Maroc',
    subtitle: 'Automatisme, Électricité, Variateurs, Supervision & Maintenance',
    accentColor: '#f97316',
    secondaryColor: '#38bdf8',
    badge: 'MAROC • 100% PRATIQUE',
    iconType: 'cabinet',
    specs: ['70% Travaux Pratiques', 'Bancs d’essais réels', 'Formateurs experts terrain', 'Interventions on-site & intra']
  }
];

function renderSvg(item) {
  const w = 1200;
  const h = 675;

  const escapedCategory = escapeXml(item.category);
  const escapedBadge = escapeXml(item.badge);
  const escapedTitle = escapeXml(item.title.length > 45 ? item.title.substring(0, 42) + '...' : item.title);
  const escapedSubtitle = escapeXml(item.subtitle);

  return `
  <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0b1329" />
        <stop offset="45%" stop-color="#112240" />
        <stop offset="100%" stop-color="#0a1020" />
      </linearGradient>
      
      <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1e293b" stop-opacity="0.9" />
        <stop offset="100%" stop-color="#0f172a" stop-opacity="0.95" />
      </linearGradient>

      <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="${item.accentColor}" />
        <stop offset="100%" stop-color="${item.secondaryColor}" />
      </linearGradient>

      <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${item.accentColor}" stop-opacity="0.25" />
        <stop offset="100%" stop-color="transparent" />
      </linearGradient>

      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" stroke-width="0.8" opacity="0.6" />
        <circle cx="40" cy="0" r="1.5" fill="#334155" opacity="0.4" />
      </pattern>
    </defs>

    <!-- Deep Background -->
    <rect width="${w}" height="${h}" fill="url(#bgGrad)" />
    <rect width="${w}" height="${h}" fill="url(#grid)" />

    <!-- Ambient Glow Circle -->
    <circle cx="950" cy="300" r="280" fill="url(#glowGrad)" />
    <circle cx="200" cy="550" r="220" fill="url(#glowGrad)" />

    <!-- Top Metallic Border Accent Line -->
    <rect x="0" y="0" width="${w}" height="6" fill="url(#accentGrad)" />

    <!-- Header Category & Badge -->
    <g transform="translate(60, 60)">
      <rect x="0" y="0" width="220" height="34" rx="6" fill="${item.accentColor}" />
      <text x="110" y="22" fill="#ffffff" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" letter-spacing="1.5">
        ${escapedCategory}
      </text>

      <rect x="235" y="0" width="200" height="34" rx="6" fill="#0f172a" stroke="#334155" stroke-width="1.2" />
      <text x="335" y="21" fill="#38bdf8" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" letter-spacing="1">
        ${escapedBadge}
      </text>
    </g>

    <!-- Main Title -->
    <text x="60" y="160" fill="#ffffff" font-family="sans-serif" font-size="34" font-weight="bold" letter-spacing="-0.5">
      ${escapedTitle}
    </text>

    <!-- Subtitle -->
    <text x="60" y="202" fill="#94a3b8" font-family="sans-serif" font-size="18">
      ${escapedSubtitle}
    </text>

    <!-- Left Content Box: Key Specifications (4 Pills) -->
    <g transform="translate(60, 245)">
      ${item.specs.map((spec, i) => {
        const x = (i % 2) * 270;
        const y = Math.floor(i / 2) * 80;
        const escapedSpec = escapeXml(spec);
        return `
          <g transform="translate(${x}, ${y})">
            <rect width="250" height="66" rx="10" fill="url(#cardGrad)" stroke="#334155" stroke-width="1.2" />
            <circle cx="24" cy="33" r="8" fill="${item.accentColor}" fill-opacity="0.2" stroke="${item.accentColor}" stroke-width="1.5" />
            <path d="M 21 33 L 23 35 L 28 30" fill="none" stroke="${item.accentColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <text x="42" y="38" fill="#e2e8f0" font-family="sans-serif" font-size="12" font-weight="bold">
              ${escapedSpec}
            </text>
          </g>
        `;
      }).join('')}
    </g>

    <!-- Right Side: Graphic Technical Illustration Block -->
    <g transform="translate(650, 110)">
      <!-- Main Hardware Frame Mockup -->
      <rect x="0" y="0" width="490" height="480" rx="16" fill="#0f172a" stroke="#334155" stroke-width="2" />
      <rect x="15" y="15" width="460" height="450" rx="12" fill="#1e293b" fill-opacity="0.5" stroke="#475569" stroke-width="1" stroke-dasharray="4 4" />

      <!-- Top LED Indicators -->
      <circle cx="45" cy="45" r="5" fill="#22c55e" />
      <circle cx="65" cy="45" r="5" fill="#eab308" />
      <circle cx="85" cy="45" r="5" fill="#3b82f6" />
      <text x="110" y="49" fill="#64748b" font-family="monospace" font-size="11" font-weight="bold">SYSTEM READY 24V DC</text>

      <!-- DIN Rail -->
      <rect x="35" y="80" width="420" height="12" rx="2" fill="#475569" stroke="#64748b" />
      
      <!-- Module 1: Power Supply -->
      <rect x="50" y="105" width="70" height="180" rx="6" fill="#0f172a" stroke="${item.accentColor}" stroke-width="1.5" />
      <text x="85" y="130" fill="#f8fafc" font-family="monospace" font-size="10" font-weight="bold" text-anchor="middle">PS 24V</text>
      <circle cx="85" cy="155" r="4" fill="#22c55e" />
      <line x1="60" y1="240" x2="110" y2="240" stroke="#334155" stroke-width="2" />
      <line x1="60" y1="255" x2="110" y2="255" stroke="#334155" stroke-width="2" />

      <!-- Module 2: CPU Controller -->
      <rect x="130" y="105" width="110" height="220" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
      <text x="185" y="130" fill="#38bdf8" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">PLC CPU</text>
      <rect x="145" y="145" width="80" height="40" rx="4" fill="#0f172a" stroke="#334155" />
      <text x="185" y="165" fill="#10b981" font-family="monospace" font-size="9" text-anchor="middle">RUN: OK</text>
      <text x="185" y="178" fill="#38bdf8" font-family="monospace" font-size="8" text-anchor="middle">IP: 192.168.0.1</text>
      <circle cx="150" cy="205" r="3" fill="#22c55e" />
      <circle cx="165" cy="205" r="3" fill="#22c55e" />
      <circle cx="180" cy="205" r="3" fill="#eab308" />
      <circle cx="195" cy="205" r="3" fill="#64748b" />
      <text x="185" y="300" fill="#94a3b8" font-family="monospace" font-size="9" text-anchor="middle">PROFINET IO</text>

      <!-- Module 3: Digital I/O -->
      <rect x="250" y="105" width="80" height="190" rx="6" fill="#0f172a" stroke="#64748b" stroke-width="1.2" />
      <text x="290" y="130" fill="#f8fafc" font-family="monospace" font-size="10" font-weight="bold" text-anchor="middle">DI/DO 16</text>
      ${[0, 1, 2, 3, 4, 5, 6, 7].map(k => `
        <circle cx="${265 + (k % 2) * 30}" cy="${155 + Math.floor(k / 2) * 16}" r="3" fill="${k < 5 ? '#22c55e' : '#334155'}" />
      `).join('')}

      <!-- Module 4: Drive / Inverter / Scope Block -->
      <rect x="340" y="105" width="105" height="230" rx="6" fill="#0f172a" stroke="${item.secondaryColor}" stroke-width="1.5" />
      <text x="392" y="130" fill="${item.secondaryColor}" font-family="monospace" font-size="10" font-weight="bold" text-anchor="middle">CONTROL</text>
      
      <rect x="352" y="145" width="80" height="60" rx="4" fill="#020617" stroke="#1e293b" />
      <path d="M 355 175 Q 365 155 375 175 T 395 175 T 415 175 T 430 175" fill="none" stroke="#22c55e" stroke-width="1.5" />
      <text x="392" y="225" fill="#94a3b8" font-family="monospace" font-size="9" text-anchor="middle">50.00 Hz</text>
      <text x="392" y="240" fill="#f59e0b" font-family="monospace" font-size="9" text-anchor="middle">1450 RPM</text>

      <!-- Terminal Strip Bottom Wiring -->
      <rect x="35" y="370" width="420" height="55" rx="6" fill="#020617" stroke="#334155" />
      ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(n => `
        <rect x="${55 + n * 32}" y="380" width="14" height="35" rx="2" fill="#1e293b" stroke="#475569" />
        <circle cx="${62 + n * 32}" cy="390" r="2.5" fill="#f97316" />
        <line x1="${62 + n * 32}" y1="395" x2="${62 + n * 32}" y2="410" stroke="#94a3b8" stroke-width="1" />
      `).join('')}
    </g>

    <!-- Bottom Footer Bar -->
    <g transform="translate(60, 600)">
      <rect x="0" y="0" width="1080" height="40" rx="8" fill="#0f172a" stroke="#1e293b" />
      <text x="25" y="25" fill="#64748b" font-family="sans-serif" font-size="12" font-weight="bold">
        MAROC INDUSTRIE - FORMATION PROFESSIONNELLE &amp; SERVICES TECHNIQUES
      </text>
      <text x="1055" y="25" fill="#38bdf8" font-family="monospace" font-size="12" font-weight="bold" text-anchor="end">
        70% PRATIQUE - ATTESTATION DE COMPETENCES
      </text>
    </g>
  </svg>
  `;
}

async function run() {
  console.log('Generating compressed JPG images...');
  for (const img of images) {
    const svg = renderSvg(img);
    const destPath = path.join(outDir, img.filename);
    await sharp(Buffer.from(svg))
      .jpeg({
        quality: 82,
        mozjpeg: true,
        progressive: true,
        chromaSubsampling: '4:2:0'
      })
      .toFile(destPath);

    const stats = fs.statSync(destPath);
    console.log(`Generated ${img.filename} (${(stats.size / 1024).toFixed(1)} KB)`);
  }
  console.log('All compressed JPG images generated successfully!');
}

run().catch(console.error);
