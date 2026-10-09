import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import HomePage from '@/routes/home';
import Story from '@/routes/story';
import StoryHub from '@/routes/story-hub';
import UniverseDetail from '@/routes/universe-detail';
import { Navigate } from 'react-router';

function LegacyStoryRedirect() { const slug = window.location.pathname.slice(1); return <Navigate to={`/the-story/${slug}`} replace />; }

function App() {
  return (
    <BrowserRouter>
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/the-story" element={<StoryHub />} />
        <Route path="/the-story/:slug" element={<Story />} />
        <Route path="/universe/:slug" element={<UniverseDetail />} />
        <Route path="/:slug" element={<LegacyStoryRedirect />} />
      </Routes>
      <SiteFooter />
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><App /></React.StrictMode>
);
