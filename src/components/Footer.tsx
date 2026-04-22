

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="container grid md:grid-cols-12" style={{ gap: '3rem' }}>
        {/* Brand & Description */}
        <div className="md:col-span-4">
          <div className="footer-logo">
            The Digital Curator.
          </div>
          <p className="body-sm" style={{ opacity: 0.8, maxWidth: '300px' }}>
            Periodismo de profundidad, diseñado para líderes. Una perspectiva diferente sobre las noticias que moldean el mundo.
          </p>
        </div>

        {/* Links Group 1 */}
        <div className="md:col-span-2">
          <h4 className="footer-heading">Secciones</h4>
          <ul className="footer-links">
            <li><a href="#">Política</a></li>
            <li><a href="#">Economía</a></li>
            <li><a href="#">Tecnología</a></li>
            <li><a href="#">Sociedad</a></li>
            <li><a href="#">Opinión</a></li>
          </ul>
        </div>

        {/* Links Group 2 */}
        <div className="md:col-span-2">
          <h4 className="footer-heading">Corporativo</h4>
          <ul className="footer-links">
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Anúnciate</a></li>
            <li><a href="#">Trabaja aquí</a></li>
          </ul>
        </div>

        {/* Newsletter Minimalist Form */}
        <div className="md:col-span-4">
          <h4 className="footer-heading">Mantente Informado</h4>
          <form className="flex flex-col" style={{ gap: '1rem' }}>
            <div>
              <label 
                htmlFor="footer-email" 
                className="text-meta" 
                style={{ color: 'var(--color-on-primary)', opacity: 0.8, marginBottom: '0.5rem', display: 'block' }}
              >
                CORREO ELECTRÓNICO
              </label>
              <input 
                type="email" 
                id="footer-email" 
                placeholder="tu@correo.com"
                className="footer-input"
              />
            </div>
            <button type="button" className="footer-btn">
              Suscribirse
            </button>
          </form>
        </div>
      </div>
      
      <div className="container footer-bottom">
        <span>© 2026 The Digital Curator. Todos los derechos reservados.</span>
        <div className="flex" style={{ gap: '1.5rem' }}>
          <a href="#">Privacidad</a>
          <a href="#">Términos</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
