import { chapters } from '@/data/project';
import { storyImages } from '@/data/story-images';

const sources = import.meta.glob('../data/source/*.html', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
function decode(value: string) { return value.replaceAll('&quot;', '"').replaceAll('&#39;', "'").replaceAll('&lt;', '<').replaceAll('&gt;', '>').replaceAll('&amp;', '&'); }
function unwrap(value: unknown): any {
  if (Array.isArray(value)) return value.length === 2 && typeof value[0] === 'number' ? unwrap(value[1]) : value.map(unwrap);
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, entry]) => [key, unwrap(entry)]));
  return value;
}
export function sourceContent(slug: string) {
  const html = sources[`../data/source/${slug}.html`];
  if (!html) return null;
  let site: any;
  for (const match of html.matchAll(/props="([^"]*)"/g)) { try { const parsed = unwrap(JSON.parse(decode(match[1]))); if (parsed.pageData) { site = parsed.pageData; break; } } catch { /* Other source islands are not page data. */ } }
  const page = Object.values(site?.pages || {}).find((entry: any) => entry.slug === slug) as any;
  if (!page) return null;
  const content: string[] = [];
  for (const id of page.blocks) {
    const block = site.blocks[id];
    const elements = (block?.components || []).map((key: string) => site.elements[key]).filter(Boolean).sort((a: any, b: any) => (a.desktop?.top || 0) - (b.desktop?.top || 0));
    for (const element of elements) {
      if (element.type === 'GridImage') {
        const image = storyImages[slug]?.find(image => image.src.endsWith('/' + element.settings?.path));
        if (image) {
          const alt = image.alt.replaceAll('&', '&amp;').replaceAll('"', '&quot;');
          const cover = image.src.includes('book1awakening');
          content.push(`<figure class="story-illustration${cover ? ' story-cover' : ''}"><img src="${image.src}" alt="${alt}" width="${image.width}" height="${image.height}" loading="lazy" decoding="async" /></figure>`);
        }
        continue;
      }
      if (!element.content || element.type !== 'GridTextBox') continue;
      const clean = element.content.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<([a-z0-9]+)([^>]*)>/gi, (_: string, tag: string, attrs: string) => { const href = attrs.match(/href="([^"]*)"/); if (tag === 'a' && href) { let url = href[1]; if (url.startsWith('/') && !['/the-story', '/prologue', '/epilogue', '/chapter-1-basepoint', '/chapter-2-vaults', '/chapter-3-foundations', '/chapter-4-sanctuary', '/chapter-5-abyss', '/chapter-6-balance'].includes(url)) url = `https://thelastblockbenders.com${url}`; return `<a href="${url}">`; } return `<${tag}>`; }).replace(/[\p{Extended_Pictographic}\uFE0F]/gu, '');
      const plain = clean.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      // Imported chapter footers duplicate the reader's sidebar and previous/next navigation.
      const isChapter = chapters.some(chapter => chapter.slug === slug);
      const isLegacyChapterNavigation = /^(?:Continue the Journey|Continue Reading|The Saga Continues|The Journey Continues|Table of Contents)\s*:/i.test(plain)
        || /^Book\s+1:\s*["“]Awakening["”]$/i.test(plain);
      if (isChapter && isLegacyChapterNavigation) continue;

      const legacyBoilerplate = [
        'The Last Block Benders Project',
        'Enter the Cryptosphere – A Blockchain Saga of Good vs Evil',
        'Powered by AI Assistants, Agents & Chatbots',
        'Collect Limited Edition NFTs on OpenSea',
        'Origins NFT Collection on Opensea',
        'Learn About the TLBB Universe'
      ];
      if (!legacyBoilerplate.some(text => plain.includes(text))) content.push(clean);
    }
  }
  return { title: page.name as string, content };
}
