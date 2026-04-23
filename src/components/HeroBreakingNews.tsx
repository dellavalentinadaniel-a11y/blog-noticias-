

import { Link } from 'react-router-dom';

const HeroBreakingNews = () => {
  return (
    <>
      {/* Content Side (40%) */}
      <div className="md:col-span-5 hero-content">
        <span className="chip mb-lg">Última Hora</span>
        <h1 className="display-title mb-lg">
          La Inteligencia Artificial revoluciona la detección de fraudes
        </h1>
        <p className="text-lg opacity-80 mb-2xl">
          Las nuevas normativas exigen a las instituciones financieras adaptar sus sistemas en tiempo récord. Expertos advierten sobre los desafíos éticos.
        </p>
        <div className="flex items-center gap-lg">
          <Link to="/article/hero" className="btn-primary" style={{ textDecoration: 'none' }}>Leer Historia</Link>
          <span className="text-meta">Hace 2 horas • Por Equipo de Redacción</span>
        </div>
      </div>

      {/* Image Side (60%) Asymmetrical */}
      <Link to="/article/hero" className="md:col-span-7 hover-lift relative" style={{ display: 'block' }}>
        <div className="hero-image-container">
          <img 
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop" 
            alt="AI Technology" 
            className="hero-image"
          />
          {/* Subtle gradient overlay */}
          <div className="hero-overlay" />
        </div>
      </Link>
    </>
  );
};

export default HeroBreakingNews;
