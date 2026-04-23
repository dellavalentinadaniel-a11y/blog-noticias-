

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer className="footer-main">
      <div className="container grid md:grid-cols-12 gap-3xl">
        {/* Brand & Description */}
        <div className="md:col-span-4">
          <div className="footer-logo cursor-pointer" onClick={() => onNavigate('home')}>
            The Digital Curator.
          </div>
          <p className="body-sm opacity-80 max-w-300">
            Periodismo de profundidad, diseñado para líderes. Una perspectiva diferente sobre las noticias que moldean el mundo.
          </p>
        </div>

        {/* Links Group 1 */}
        <div className="md:col-span-2">
          <h4 className="footer-heading">Secciones</h4>
          <ul className="footer-links">
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Política</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Economía</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Tecnología</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Sociedad</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Opinión</a></li>
          </ul>
        </div>

        {/* Links Group 2 */}
        <div className="md:col-span-2">
          <h4 className="footer-heading">Corporativo</h4>
          <ul className="footer-links">
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Sobre nosotros</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Contacto</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Anúnciate</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Trabaja aquí</a></li>
          </ul>
        </div>

        {/* Newsletter Minimalist Form */}
        <div className="md:col-span-4">
          <h4 className="footer-heading">Mantente Informado</h4>
          <form className="flex flex-col gap-lg" onSubmit={(e) => e.preventDefault()}>
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
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Privacidad</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Términos</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('cookies'); }}>Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
