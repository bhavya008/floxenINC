import Home from '@/pages/Home';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BlogDetail from './components/floxen/BlogDetail';
import WorkDetail from './components/floxen/WorkDetail';
import ScrollToTop from './components/ScrollToTop';

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">404</p>
        <h1 className="mt-4 text-3xl font-semibold text-slate-900">Page not found</h1>
        <p className="mt-2 text-slate-600">This static site does not include that page.</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/work/:slug" element={<WorkDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
