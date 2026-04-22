

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-on-primary)', padding: '4rem 0 2rem' }}>
      <div className="container grid md:grid-cols-12" style={{ gap: '3rem' }}>
        {/* Brand & Description */}
        <div className="md:col-span-4">
          <div style={{ fontWeight: 700, fontSize: '1.5rem', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            The Digital Curator.
          </div>
          <p style={{ opacity: 0.8, fontSize: '0.875rem', maxWidth: '300px' }}>
            Periodismo de profundidad, diseñado para líderes. Una perspectiva diferente sobre las noticias que moldean el mundo.
          </p>
        </div>

        {/* Links Group 1 */}
        <div className="md:col-span-2">
          <h4 style={{ fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.875rem' }}>
            Secciones
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', opacity: 0.8, fontSize: '0.875rem' }}>
            <li><a href="#">Política</a></li>
            <li><a href="#">Economía</a></li>
            <li><a href="#">Tecnología</a></li>
            <li><a href="#">Sociedad</a></li>
            <li><a href="#">Opinión</a></li>
          </ul>
        </div>

        {/* Links Group 2 */}
        <div className="md:col-span-2">
          <h4 style={{ fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.875rem' }}>
            Corporativo
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', opacity: 0.8, fontSize: '0.875rem' }}>
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Anúnciate</a></li>
            <li><a href="#">Trabaja aquí</a></li>
          </ul>
        </div>

        {/* Newsletter Minimalist Form */}
        <div className="md:col-span-4">
          <h4 style={{ fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.875rem' }}>
            Mantente Informado
          </h4>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ position: 'relative' }}>
              <label 
                htmlFor="email" 
                className="text-meta" 
                style={{ color: 'var(--color-on-primary)', opacity: 0.8, marginBottom: '0.5rem', display: 'block' }}
              >
                CORREO ELECTRÓNICO
              </label>
              <input 
                type="email" 
                id="email" 
                placeholder="tu@correo.com"
                style={{
                  width: '100%',
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'white',
                  padding: '0.75rem',
                  borderRadius: '0.25rem',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
            </div>
            <button 
              type="button" 
              style={{
                backgroundColor: 'transparent',
                border: '1px solid var(--color-on-primary)',
                color: 'var(--color-on-primary)',
                padding: '0.75rem',
                borderRadius: '0.25rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Suscribirse
            </button>
          </form>
        </div>
      </div>
      
      <div className="container" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', opacity: 0.6, fontSize: '0.875rem' }}>
        <span>© 2026 The Digital Curator. Todos los derechos reservados.</span>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#">Privacidad</a>
          <a href="#">Términos</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
