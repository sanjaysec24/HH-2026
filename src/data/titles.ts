export const GOA_LOCATIONS = [
  'Anjuna',
  'Vagator',
  'Palolem',
  'Morjim',
  'Arambol',
  'Panjim',
  'Candolim',
  'Baga',
  'Assagao',
  'Mandrem',
];

export const GOA_TITLE_PREFIXES = [
  'Chief Coconut',
  'Sunset',
  'High-Velocity',
  'Beachside',
  'Tropical',
  'Feni-Powered',
  'Palm Tree',
  'Ocean Wave',
  'Scooter-Riding',
  'Shack-Based',
  'Cashew',
  '100x',
];

export const ROLE_SUFFIXES: Record<string, string[]> = {
  'Full-Stack Craftsman': ['Code Surfer', 'Pixel Architect', 'Stack Alchemist', 'Ship Master'],
  'AI Architect': ['Whisperer', 'Prompt Engineer', 'Agent Commander', 'Neural Shaman'],
  'UI/UX Designer': ['Visual Artisan', 'Palette Sculptor', 'Vector Maestro', 'Interface Guru'],
  'Indie Hacker': ['Solopreneur', 'Bootstrapper', 'Revenue Nomad', 'Product Crafter'],
  'Web3 / Protocol Dev': ['Chain Pioneer', 'Smart Contract Surfer', 'Decentralized Nomad', 'State Machine Wizard'],
  'Systems / DevOps': ['Infrastructure Monk', 'Container Commander', 'Pipeline Pilot', 'Uptime Legend'],
  'Founder / Builder': ['Visionary Nomad', 'Ecosystem Catalyst', 'Venture Surfer', 'Product Captain'],
};

export function generateBuilderTitle(role: string, name: string): string {
  const location = GOA_LOCATIONS[Math.abs(hashString(name)) % GOA_LOCATIONS.length];
  const prefixes = GOA_TITLE_PREFIXES;
  const prefix = prefixes[Math.abs(hashString(name + 'p')) % prefixes.length];

  const suffixes = ROLE_SUFFIXES[role] || ['Builder', 'Craftsman', 'Pioneer', 'Hacker'];
  const suffix = suffixes[Math.abs(hashString(name + 's')) % suffixes.length];

  return `${location} ${prefix} ${suffix}`;
}

export const TITLE_OPTIONS_PRESETS = [
  'Anjuna AI Whisperer',
  'Chief Coconut Architect',
  'Vagator Full-Stack Surfer',
  'High-Velocity Prompt Alchemist',
  'Palolem Protocol Pioneer',
  'Sunset Code Maestro',
  'Assagao Visual Artisan',
  'Morjim Solopreneur Nomad',
  'Arambol Neural Shaman',
  'Panjim Product Captain',
  'Cashew Stack Alchemist',
];

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}
