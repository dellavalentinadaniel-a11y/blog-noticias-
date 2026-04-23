

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="container grid md:grid-cols-12 gap-3xl">
        {/* Brand & Description */}
        <div className="md:col-span-4">
          <Link to="/" className="footer-logo" style={{ textDecoration: 'none', color: 'inherit' }}>
            The Digital Curator.
          </Link>
          <p className="body-sm opacity-80 max-w-300">
            Periodismo de profundidad, diseñado para líderes. Una perspectiva diferente sobre las noticias que moldean el mundo.
          </p>
        </div>

        {/* Links Group 1 */}
        <div className="md:col-span-2">
          <h4 className="footer-heading">Secciones</h4>
          <ul className="footer-links">
            <li><Link to="/category/politics">Política</Link></li>
            <li><Link to="/category/business">Economía</Link></li>
            <li><Link to="/category/tecnologia">Tecnología</Link></li>
            <li><Link to="/category/sociedad">Sociedad</Link></li>
            <li><Link to="/category/opinion">Opinión</Link></li>
          </ul>
        </div>

        {/* Links Group 2 */}
        <div className="md:col-span-2">
          <h4 className="footer-heading">Corporativo</h4>
          <ul className="footer-links">
            <li><Link to="/about">Sobre nosotros</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
            <li><Link to="/advertise">Anúnciate</Link></li>
            <li><Link to="/careers">Trabaja aquí</Link></li>
          </ul>
        </div>

        {/* Newsletter Minimalist Form */}
        <div className="md:col-span-4">
          <h4 className="footer-heading">Mantente Informado</h4>
          <form className="flex flex-col gap-lg">
            <div>
              <label 
                htmlFor="footer-email" 
                className="text-meta footer-label"
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
        <div className="flex gap-xl">
          <Link to="/privacy">Privacidad</Link>
          <Link to="/terms">Términos</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
