import { TrendingUp } from 'lucide-react';

const TRENDING = [
  { id: 1, category: 'Política', title: 'Elecciones 2026', views: '245k' },
  { id: 2, category: 'Medio Ambiente', title: 'Cambio Climático', views: '180k' },
  { id: 3, category: 'Tecnología', title: 'Ciberseguridad', views: '120k' },
  { id: 4, category: 'Economía', title: 'Mercados Emergentes', views: '95k' },
  { id: 5, category: 'Cultura', title: 'Cultura Digital', views: '88k' },
];

const SidebarTrending = () => {
  return (
    <div className="sidebar-container">
      <div className="flex items-center gap-md mb-xl">
        <TrendingUp size={20} className="text-tertiary" />
        <h3 className="headline-sm mb-0">Temas en Tendencia</h3>
      </div>

      <div className="flex flex-col gap-xl">
        {TRENDING.map((topic, index) => (
          <div key={topic.id} className="trending-item flex gap-lg">
            <span className="trending-number">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col">
              <span className="text-meta text-primary mb-xs">
                {topic.category}
              </span>
              <h4 className="headline-sm text-base mb-0">
                {topic.title}
              </h4>
              <span className="text-meta mt-sm" style={{textTransform: 'none'}}>{topic.views} visualizaciones</span>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Widget */}
      <div className="newsletter-card">
        <h4 className="headline-sm mb-sm">La Dosis Diaria</h4>
        <p className="body-sm opacity-80 mb-xl">
          Recibe las noticias más importantes directamente en tu correo.
        </p>
        <input 
          type="email" 
          placeholder="tu@correo.com" 
          className="newsletter-input" 
          aria-label="Correo electrónico"
        />
        <button className="btn-secondary w-full">Suscribirse</button>
      </div>
    </div>
  );
};

export default SidebarTrending;
