
import { useState, useEffect } from 'react';

interface CookieBannerProps {
  onNavigate: (page: string) => void;
}

const CookieBanner = ({ onNavigate }: CookieBannerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('cookies-accepted');
    if (!hasAccepted) {
      // Delay visibility for a smoother entrance
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
        <span className="cookie-link" onClick={() => onNavigate('cookies')}>
          Política de Cookies
        </span>.
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
