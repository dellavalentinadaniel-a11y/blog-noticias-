
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('cookies-accepted');
    if (!hasAccepted) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookies-accepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible && localStorage.getItem('cookies-accepted')) return null;

  return (
    <div className={`cookie-banner ${isVisible ? 'visible' : ''}`}>
      <p>
        Utilizamos cookies propias y de terceros para mejorar su experiencia y nuestros servicios, 
        analizando la navegación en nuestro sitio web. Puede consultar nuestra{' '}
        <Link to="/cookies" className="cookie-link" onClick={() => setIsVisible(false)}>
          Política de Cookies
        </Link>.
      </p>
      <div className="cookie-banner-actions">
        <button className="btn-primary" onClick={handleAccept}>
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
