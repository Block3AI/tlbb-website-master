export const asset = (name: string) => `https://assets.zyrosite.com/AwvMgREwyehrB910/${name}`;
export const heroImage = asset('basepointcitycryptosphere-YrDlyEKJDKIZNq6J.jpg');

// Update launch details here. The homepage reads from this single object.
export const token = {
  name: 'The Last Block Benders',
  ticker: '$TLBB',
  supply: '1,000,000,000',
  network: 'Robinhood Chain',
  status: 'COMING SOON',
  contract: '',
  buyUrl: '',
  explorerUrl: '',
  openSeaUrl: 'https://opensea.io/thelastblockbenders',
};

export const chapters = [
 { slug: 'prologue', title: 'Prologue' },
 { slug: 'chapter-1-basepoint', title: 'Chapter 1: Basepoint' },
 { slug: 'chapter-2-vaults', title: 'Chapter 2: Vaults' },
 { slug: 'chapter-3-foundations', title: 'Chapter 3: Foundations' },
 { slug: 'chapter-4-sanctuary', title: 'Chapter 4: Sanctuary' },
 { slug: 'chapter-5-abyss', title: 'Chapter 5: Abyss' },
 { slug: 'chapter-6-balance', title: 'Chapter 6: Balance' },
 { slug: 'epilogue', title: 'Epilogue' },
];

export const socials = [
  { name: 'X / Twitter', url: 'https://x.com/tlbbproject' },
  { name: 'Telegram', url: 'https://t.me/+viRscMN0HfgzODFh' },
  { name: 'NFTs on OpenSea', url: token.openSeaUrl },
];

export const faqs = [
  { q: 'What is $TLBB?', a: '$TLBB is a new memecoin from The Last Block Benders universe — a crypto-native world of Benders, artwork, stories and NFTs.' },
  { q: 'Where can I see the NFTs?', a: 'The Last Block Benders Origins collection is available on OpenSea. Use the official OpenSea link published on this website.' },
  { q: 'Has $TLBB launched?', a: 'Check the launch terminal on this website. Only trust the contract and trading links published here and through the official TLBB social accounts.' },
  { q: 'Is $TLBB an investment?', a: '$TLBB is a memecoin created for entertainment and community participation. It does not represent equity, guaranteed utility or a promise of financial returns. Crypto assets can lose all value.' },
];
