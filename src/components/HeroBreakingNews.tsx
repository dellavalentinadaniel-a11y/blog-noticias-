

const HeroBreakingNews = () => {
  return (
    <section className="flex flex-col md:grid md:grid-cols-12" style={{ gap: '2rem', alignItems: 'center' }}>
      {/* Content Side (40%) */}
      <div className="md:col-span-5" style={{ paddingRight: '2rem' }}>
        <span className="chip" style={{ marginBottom: '1rem' }}>Última Hora</span>
        <h1 className="display-title" style={{ marginBottom: '1rem' }}>
          La Inteligencia Artificial revoluciona la detección de fraudes
        </h1>
        <p style={{ fontSize: '1.125rem', opacity: 0.8, marginBottom: '2rem' }}>
          Las nuevas normativas exigen a las instituciones financieras adaptar sus sistemas en tiempo récord. Expertos advierten sobre los desafíos éticos.
        </p>
        <div className="flex items-center" style={{ gap: '1rem' }}>
          <button className="btn-primary">Leer Historia</button>
          <span className="text-meta">Hace 2 horas • Por Equipo de Redacción</span>
        </div>
      </div>

      {/* Image Side (60%) Asymmetrical */}
      <div className="md:col-span-7 hover-lift" style={{ position: 'relative' }}>
        <div 
          style={{ 
            width: '100%', 
            height: '400px', 
            backgroundColor: 'var(--color-surface-container-highest)', 
            borderRadius: '0.5rem',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop" 
            alt="AI Technology" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          {/* Subtle gradient overlay */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '30%',
            background: 'linear-gradient(to top, rgba(0, 21, 42, 0.4), transparent)'
          }} />
        </div>
      </div>
    </section>
  );
};

export default HeroBreakingNews;
