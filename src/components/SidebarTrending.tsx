

const trendingTopics = [
  { id: 1, tag: 'Elecciones 2026', views: '245k lecturas' },
  { id: 2, tag: 'Cambio Climático', views: '180k lecturas' },
  { id: 3, tag: 'Ciberseguridad', views: '120k lecturas' },
  { id: 4, tag: 'Mercados Emergentes', views: '95k lecturas' },
  { id: 5, tag: 'Cultura Digital', views: '88k lecturas' },
];

const SidebarTrending = () => {
  return (
    <div 
      className="bg-surface-low" 
      style={{ 
        padding: '2rem', 
        borderRadius: '0.5rem',
        position: 'sticky',
        top: '100px'
      }}
    >
      <h3 className="headline-md" style={{ marginBottom: '2rem' }}>Tendencias</h3>
      
      <div className="flex flex-col" style={{ gap: '1.5rem' }}>
        {trendingTopics.map((topic, index) => (
          <div key={topic.id} className="flex" style={{ gap: '1rem', alignItems: 'flex-start' }}>
            <span style={{ 
              fontSize: '2rem', 
              fontWeight: 700, 
              color: 'var(--color-outline-variant)',
              lineHeight: 1
            }}>
              0{index + 1}
            </span>
            <div>
              <h4 style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.25rem', cursor: 'pointer' }} className="hover-lift">
                {topic.tag}
              </h4>
              <span className="text-meta">{topic.views}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(195, 198, 206, 0.3)' }}>
        <h4 style={{ fontWeight: 600, marginBottom: '1rem' }}>Boletín Exclusivo</h4>
        <p style={{ opacity: 0.8, marginBottom: '1rem', fontSize: '0.875rem' }}>
          Análisis profundo entregado directamente en su bandeja de entrada cada mañana.
        </p>
        <button className="btn-primary" style={{ width: '100%' }}>Suscribirse Gratis</button>
      </div>
    </div>
  );
};

export default SidebarTrending;
