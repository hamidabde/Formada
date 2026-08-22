export interface IndustrialBrand {
  name: string;
  category: 'Automates API/PLC' | 'Variateurs & Moteurs' | 'IHM & SCADA' | 'Électrotechnique';
  description: string;
  badgeColor: string;
}

export const INDUSTRIAL_TECHNOLOGIES: IndustrialBrand[] = [
  {
    name: 'Siemens',
    category: 'Automates API/PLC',
    description: 'SIMATIC S7-1200 / S7-1500 / S7-300 / S7-400 / LOGO! / TIA Portal V14-V19 / Sinamics G120 & S120',
    badgeColor: 'bg-teal-900/10 text-teal-700 border-teal-200'
  },
  {
    name: 'Schneider Electric',
    category: 'Automates API/PLC',
    description: 'Modicon M221 / M241 / M258 / Premium / EcoStruxure Machine Expert / Altivar 320, 630, 930',
    badgeColor: 'bg-emerald-900/10 text-emerald-700 border-emerald-200'
  },
  {
    name: 'Rockwell / Allen-Bradley',
    category: 'Automates API/PLC',
    description: 'ControlLogix / CompactLogix / Micro800 / Studio 5000 / PowerFlex 525 & 755',
    badgeColor: 'bg-red-900/10 text-red-700 border-red-200'
  },
  {
    name: 'ABB',
    category: 'Variateurs & Moteurs',
    description: 'Variateurs de vitesse ACS380, ACS580, ACS880 / Automates AC500 / Automation Builder',
    badgeColor: 'bg-red-900/10 text-red-700 border-red-200'
  },
  {
    name: 'Danfoss',
    category: 'Variateurs & Moteurs',
    description: 'Variateurs VLT AutomationDrive FC302, AquaDrive FC202, Micro Drive FC51 / MCT 10',
    badgeColor: 'bg-blue-900/10 text-blue-700 border-blue-200'
  },
  {
    name: 'Omron',
    category: 'Automates API/PLC',
    description: 'Automates Sysmac CJ2, CP1E, NX1P2 / CX-One / Sysmac Studio / Variateurs RX2',
    badgeColor: 'bg-indigo-900/10 text-indigo-700 border-indigo-200'
  },
  {
    name: 'Mitsubishi Electric',
    category: 'Automates API/PLC',
    description: 'Automates séries MELSEC iQ-F / FX5U / Q Series / GX Works3 / Variateurs FR-A800',
    badgeColor: 'bg-rose-900/10 text-rose-700 border-rose-200'
  }
];
