import { Link } from 'react-router';
import { chapters, heroImage } from '@/data/project';
const summaries: Record<string,string> = {
 'prologue':'The Cryptosphere awakens as the Source Block sends a signal and the first signs of the Shadow Web emerge.',
 'chapter-1-basepoint':'A coordinated attack hits Basepoint City, forcing Q-Block into a conflict far larger than an ordinary breach.',
 'chapter-2-vaults':'The team descends into the Cryptosphere’s ancient records as corruption threatens the foundations of shared trust.',
 'chapter-3-foundations':'The deeper structure of the Cryptosphere reveals what is truly at stake—and how far the Shadow Web has spread.',
 'chapter-4-sanctuary':'Inside the hidden Sanctuary, six specialists face individual trials and awaken as the Last Block Benders.',
 'chapter-5-abyss':'The Benders enter the corrupted domain of the Shadow Web and confront the force working to control the Cryptosphere.',
 'chapter-6-balance':'The struggle for the Source Block reaches its turning point as the team fights to restore balance across the realm.',
 'epilogue':'The immediate crisis passes, but new possibilities—and new threats—begin to surface across the Cryptosphere.'
};
export function Reader({ title, content, slug }: { title: string; content: string[]; slug: string }) {
 const index=chapters.findIndex(c=>c.slug===slug);
 return <main className="reader"><div className="reader-banner" style={{backgroundImage:`linear-gradient(0deg,rgba(12,17,33,.92),rgba(12,17,33,.35)),url(${heroImage})`}}><Link to="/the-story">THE LAST BLOCK BENDERS / BOOK I: AWAKENING</Link><span className="reader-kicker">{index===0?'PROLOGUE':index===chapters.length-1?'EPILOGUE':`CHAPTER ${index}`}</span><h1>{title.replace(/^Chapter \d+:\s*/, '')}</h1><p className="reader-summary">{summaries[slug]}</p></div><div className="reader-layout"><aside><h2>BOOK I</h2><Link to="/the-story">Story Index</Link>{chapters.map(c=><Link aria-current={c.slug===slug?'page':undefined} key={c.slug} to={`/the-story/${c.slug}`}>{c.title}</Link>)}</aside><article className="prose-source">{content.map((html,i)=><div key={i} dangerouslySetInnerHTML={{__html:html.replace(/href="\/(prologue|epilogue|chapter-[^"]+)"/g,'href="/the-story/$1"').replace(/<h1>/g,'<h2>').replace(/<\/h1>/g,'</h2>')}}/>)}{index>=0&&<nav className="reader-bottom-links" aria-label="Chapter navigation"><Link to="/the-story">Story Index</Link>{index<chapters.length-1&&<Link to={`/the-story/${chapters[index+1].slug}`} rel="next">Next: {chapters[index+1].title} <span aria-hidden="true">→</span></Link>}</nav>}</article></div></main>;
}
