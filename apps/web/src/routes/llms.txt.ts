import { siteOrigin } from '@/lib/site-origin.server';
import { chapters } from '@/data/project';
export function loader({request}:{request:Request}) { const origin=siteOrigin(request);return new Response(`# The Last Block Benders\n\n> A community-driven blockchain storytelling universe.\n\n## Story\n- [The Story](${origin}/the-story)\n${chapters.map(c=>`- [${c.title}](${origin}/${c.slug})`).join('\n')}\n`,{headers:{'Content-Type':'text/plain; charset=utf-8'}}); }
