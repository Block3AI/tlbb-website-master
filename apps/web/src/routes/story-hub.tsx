import { Link } from 'react-router';
import { ArrowRight, BookOpen, Shield, Sparkles } from 'lucide-react';
import { asset, chapters, heroImage, token } from '@/data/project';
import { storyImages } from '@/data/story-images';
import { benders, locations } from '@/data/universe';

const chapterNotes = [
  'The Cryptosphere awakens and the Source Block sends its call.',
  'Basepoint City fractures as the Shadow Web makes its first move.',
  'The Benders descend into the ancient ledgers beneath the network.',
  'The foundations of the Cryptosphere reveal what the conflict is really about.',
  'The team reaches Sanctuary as alliances, powers and purpose sharpen.',
  'The Benders enter the Abyss and confront the force behind the corruption.',
  'The fight for the Source Block reaches its turning point.',
  'The first awakening ends, but the Cryptosphere is only beginning to change.',
];

export default function StoryHub() {
  return <main className="story-hub">
    <section className="story-hero" style={{backgroundImage:`linear-gradient(90deg,rgba(7,11,25,.94),rgba(7,11,25,.42)),linear-gradient(0deg,rgba(7,11,25,.8),transparent),url(${heroImage})`}}>
      <div className="story-hero-copy"><span className="eyebrow"><Sparkles size={14}/> THE LAST BLOCK BENDERS / BOOK I</span><h1>AWAKENING</h1><p>Enter the Cryptosphere — a blockchain saga of code, corruption, decentralization and the guardians called to restore balance.</p><Link className="button primary" to="/the-story/prologue">BEGIN THE STORY <ArrowRight size={17}/></Link></div>
      <div className="story-bookmark"><BookOpen size={18}/><span>08 PARTS<br/>BOOK ONE</span></div>
    </section>
    <section className="story-intro"><div><span className="section-label">THE CRYPTOSPHERE</span><h2>WHEN THE NETWORK BREAKS,<br/>THE BENDERS RISE.</h2></div><div><p>At the center of the Cryptosphere lies the Source Block, a mysterious force that keeps its systems in balance. When the Shadow Web begins corrupting the realm from within, six unlikely defenders are pulled into a conflict larger than any protocol, city or chain.</p><p className="small">The story expands the world behind {token.ticker}, its characters, locations and original artwork. Read it in order or jump directly to any chapter below.</p></div></section>
    <section className="story-directory"><div><span className="section-label">THE LAST BLOCK BENDERS</span><h2>KNOW THE<br/>GUARDIANS.</h2><div className="directory-links">{benders.map(b=><Link key={b.slug} to={`/universe/${b.slug}`}><strong>{b.name}</strong><span>{b.title}</span><ArrowRight size={16}/></Link>)}</div></div><div><span className="section-label">LEGENDARY LOCATIONS</span><h2>KNOW THE<br/>WORLD.</h2><div className="directory-links">{locations.map(l=><Link key={l.slug} to={`/universe/${l.slug}`}><strong>{l.name}</strong><span>{l.title}</span><ArrowRight size={16}/></Link>)}</div></div></section>
    <section className="story-chapters"><img className="story-index-cover" {...storyImages['the-story'].find(image => image.src.includes('book1awakening'))!} loading="lazy" decoding="async" /><div className="section-heading"><div><span className="section-label">BOOK I / AWAKENING</span><h2>CHAPTER INDEX</h2></div><span className="story-index-mark">01—08</span></div><div className="story-chapter-grid">{chapters.map((chapter,i)=><Link className="story-chapter-card" key={chapter.slug} to={`/the-story/${chapter.slug}`}><span className="story-chapter-no">{String(i+1).padStart(2,'0')}</span><div><span>{i===0?'PROLOGUE':i===chapters.length-1?'EPILOGUE':`CHAPTER ${i}`}</span><h3>{chapter.title.replace(/^Chapter \d+: /,'')}</h3><p>{chapterNotes[i]}</p></div><ArrowRight className="story-card-arrow"/></Link>)}</div></section>
    <section className="story-world"><div className="story-world-image"><img src={asset('basepointcitycryptosphere-YrDlyEKJDKIZNq6J.jpg')} alt="Basepoint City in the Cryptosphere"/></div><div><span className="section-label">THE WORLD</span><Shield size={28}/><h2>CODE IS POWER.<br/>BALANCE IS EVERYTHING.</h2><p>Follow Solara, Etharion, Byte, Nodus, Lumina and Fortis across Basepoint City, the Vaults, Sanctuary and the Abyss as the Shadow Web closes in.</p><a className="text-link" href={token.openSeaUrl} target="_blank" rel="noreferrer">EXPLORE TLBB ORIGINS ON OPENSEA <ArrowRight size={15}/></a></div></section>
  </main>;
}
