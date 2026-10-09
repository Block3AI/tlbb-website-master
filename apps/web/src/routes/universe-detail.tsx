import { Link, Navigate, useParams } from 'react-router';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { universeEntry, universeEntries } from '@/data/universe';
import { heroImage } from '@/data/project';
export default function UniverseDetail(){
 const {slug=''}=useParams(); const entry=universeEntry(slug); if(!entry)return <Navigate to="/the-story" replace/>;
 return <main className="lore-page">
  <section className="lore-hero" style={{backgroundImage:`linear-gradient(90deg,rgba(6,10,22,.96),rgba(6,10,22,.48)),url(${heroImage})`}}><div><span className="section-label">{entry.kind==='bender'?'THE LAST BLOCK BENDERS':'LEGENDARY LOCATIONS'} / THE CRYPTOSPHERE</span><h1>{entry.name}</h1><h2>{entry.title}</h2><p>{entry.summary}</p></div></section>
  <section className="lore-body"><aside><Link to="/the-story"><ArrowLeft size={15}/> STORY INDEX</Link><span>{entry.kind==='bender'?'CHARACTER FILE':'LOCATION FILE'}</span>{entry.highlights.map(x=><b key={x}>{x}</b>)}</aside><article>{entry.quote&&<blockquote>“{entry.quote}”</blockquote>}<p className="lore-lead">{entry.intro}</p>{entry.details.map(p=><p key={p}>{p}</p>)}<h3>EXPLORE THE CONNECTIONS</h3><div className="related-links">{entry.related?.map(s=>{const r=universeEntry(s);return r?<Link key={s} to={`/universe/${s}`}>{r.name}<ArrowRight size={16}/></Link>:null})}</div></article></section>
  <section className="lore-index"><span className="section-label">EXPLORE THE CRYPTOSPHERE</span><div>{universeEntries.filter(x=>x.slug!==slug).map(x=><Link to={`/universe/${x.slug}`} key={x.slug}><small>{x.kind==='bender'?'BENDER':'LOCATION'}</small><strong>{x.name}</strong></Link>)}</div></section>
 </main>
}
