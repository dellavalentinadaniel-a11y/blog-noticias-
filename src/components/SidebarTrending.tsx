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
      <div className="flex items-center" style={{ gap: '0.75rem', marginBottom: '1.5rem' }}>
        <TrendingUp size={20} style={{ color: 'var(--color-primary)' }} />
        <h3 className="headline-sm" style={{ margin: 0 }}>Temas en Tendencia</h3>
      </div>

      <div className="flex flex-col" style={{ gap: '1.5rem' }}>
        {TRENDING.map((topic, index) => (
          <div key={topic.id} className="trending-item flex" style={{ gap: '1rem' }}>
            <span 
              className="display-title" 
              style={{ fontSize: '2rem', opacity: 0.1, color: 'var(--color-on-surface)', minWidth: '2.5rem' }}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col">
              <span className="text-meta" style={{ color: 'var(--color-primary)', fontWeight: 600, marginBottom: '0.25rem' }}>
                {topic.category}
              </span>
              <h4 className="headline-sm" style={{ fontSize: '1rem', lineHeight: 1.4, margin: 0 }}>
                {topic.title}
              </h4>
              <span className="text-meta" style={{ marginTop: '0.5rem' }}>{topic.views} visualizaciones</span>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Placeholder */}
      <div 
        className="newsletter-card"
        style={{ 
          marginTop: '3rem', 
          padding: '2rem', 
          backgroundColor: 'var(--color-surface-container-low)', 
          borderRadius: '1rem',
          border: '1px solid var(--color-outline-variant)'
        }}
      >
        <h4 className="headline-sm" style={{ marginBottom: '0.5rem' }}>La Dosis Diaria</h4>
        <p className="body-sm" style={{ opacity: 0.8, marginBottom: '1.5rem' }}>
          Recibe las noticias más importantes directamente en tu correo.
        </p>
        <button className="btn-primary" style={{ width: '100%' }}>Suscribirse</button>
      </div>
    </div>
  );
};

export default SidebarTrending;
