import { Navigate, useParams } from 'react-router';
import { sourceContent } from '@/lib/source-content';
import { Reader } from '@/components/story/reader';

export default function Story() {
  const { slug = '' } = useParams();
  const page = sourceContent(slug);
  if (!page) return <Navigate to="/the-story" replace />;
  return <Reader {...page} slug={slug} />;
}
