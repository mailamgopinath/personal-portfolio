import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Loader from './components/Loader.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Loader show={loading} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}
