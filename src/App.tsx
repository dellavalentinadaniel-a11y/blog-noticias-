
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import ArticleDetail from './pages/ArticleDetail.tsx';
import Category from './pages/Category.tsx';
import CookiePolicy from './components/CookiePolicy.tsx';
import CookieBanner from './components/CookieBanner.tsx';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/cookies" element={<CookiePolicy />} />
        </Routes>
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;
