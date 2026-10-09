import { Copy, ArrowUpRight, Radio, ShieldCheck, Zap } from 'lucide-react';
import { token } from '@/data/project';

export function Tokenomics() {
  const copyContract = () => token.contract && navigator.clipboard?.writeText(token.contract);
  return <section className="token-section launch-terminal" id="tokenomics">
    <div className="terminal-intro">
      <span className="section-label">05 / $TLBB MEMECOIN</span>
      <h2>{token.ticker}<br/><span>IS ENTERING<br/>THE CHAIN.</span></h2>
      <p>Official launch information lives here. Check the contract. Use the official link. Ignore clones.</p>
      <div className="terminal-flags"><span><Radio size={15}/> {token.status}</span><span><Zap size={15}/> {token.network}</span><span><ShieldCheck size={15}/> VERIFY FIRST</span></div>
      {token.buyUrl ? <a className="button primary terminal-buy" href={token.buyUrl} target="_blank" rel="noreferrer">BUY {token.ticker} <ArrowUpRight size={18}/></a> : <span className="launch-pill">LAUNCH LINK DROPS HERE</span>}
    </div>
    <div className="token-sheet terminal-sheet">
      <div className="terminal-top"><i/><i/><i/><span>TLBB_LAUNCH_TERMINAL.exe</span></div>
      <div className="sheet-heading"><span>OFFICIAL TOKEN DATA</span><em>LIVE FEED</em></div>
      <div className="token-row"><span>ASSET</span><strong>{token.ticker}</strong></div>
      <div className="token-row"><span>SUPPLY</span><strong>{token.supply}</strong></div>
      <div className="token-row"><span>CHAIN</span><strong>{token.network}</strong></div>
      <div className="token-row"><span>LAUNCH STATUS</span><strong className="status-value">● {token.status}</strong></div>
      <div className="contract-box">
        <span>OFFICIAL CONTRACT ADDRESS</span>
        <code>{token.contract || 'NOT PUBLISHED YET'}</code>
        {token.contract ? <button onClick={copyContract} type="button" aria-label="Copy contract"><Copy size={16}/> COPY CONTRACT</button> : <small>Any contract claiming to be $TLBB before it appears here is not official.</small>}
      </div>
      {token.explorerUrl && <a className="text-link" href={token.explorerUrl} target="_blank" rel="noreferrer">OPEN BLOCK EXPLORER <ArrowUpRight size={17}/></a>}
    </div>
    <div className="utility-row"><span>MEMECOIN LAUNCH</span><span>OFFICIAL LINKS ONLY</span><span>PART OF THE CRYPTOSPHERE</span></div>
  </section>;
}
