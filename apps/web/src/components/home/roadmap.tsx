import { ArrowUpRight } from 'lucide-react';
import { token } from '@/data/project';

export function Roadmap() {
 return <section className="how-buy" id="how-to-buy">
   <span className="section-label">05 / HOW TO BUY</span>
   <div className="section-heading"><h2>ENTER THE<br/>CRYPTOSPHERE.</h2><p>Only use the official launch link and contract published on this site.</p></div>
   <div className="buy-grid">
     <article><span>01</span><h3>GET ETH</h3><p>Have ETH available in a wallet that supports the launch network.</p></article>
     <article><span>02</span><h3>CONNECT</h3><p>Open the official launch page from the link published here.</p></article>
     <article><span>03</span><h3>VERIFY</h3><p>Confirm the official {token.ticker} contract before swapping.</p></article>
     <article><span>04</span><h3>TRADE</h3><p>Choose your amount, trade responsibly and enter the Cryptosphere.</p></article>
   </div>
   {token.buyUrl ? <a className="button primary" href={token.buyUrl} target="_blank" rel="noreferrer">BUY {token.ticker} <ArrowUpRight size={18}/></a> : <a className="button outline dark-outline" href="#tokenomics">LAUNCH DETAILS COMING SOON</a>}
 </section>;
}
