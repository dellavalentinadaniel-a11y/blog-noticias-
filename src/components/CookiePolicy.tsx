
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from './Header.tsx';
import Footer from './Footer.tsx';

const CookiePolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="page-cookies">
      <Header />
      <main className="container policy-page">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={20} />
          Volver
        </button>

        <div className="policy-content">
          <h1>Política de Cookies</h1>
          <p>Última actualización: 22 de abril de 2026</p>

          <section>
            <h2>1. ¿Qué son las cookies?</h2>
            <p>
              Una cookie es un pequeño archivo que se descarga en su ordenador al acceder a determinadas páginas web. 
              Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los 
              hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y 
              de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.
            </p>
          </section>

          <section>
            <h2>2. Tipos de cookies que utilizamos</h2>
            <ul>
              <li>
                <strong>Cookies Técnicas:</strong> Son aquellas que permiten al usuario la navegación a través de 
                una página web y la utilización de las diferentes opciones o servicios que en ella existan.
              </li>
              <li>
                <strong>Cookies de Personalización:</strong> Permiten al usuario acceder al servicio con algunas 
                características de carácter general predefinidas.
              </li>
              <li>
                <strong>Cookies de Análisis:</strong> Permiten el seguimiento y análisis del comportamiento de 
                los usuarios de los sitios web a los que están vinculadas.
              </li>
            </ul>
          </section>

          <section>
            <h2>3. Gestión de cookies</h2>
            <p>
              Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración 
              de las opciones del navegador instalado en su ordenador. Sin embargo, si selecciona esta configuración, 
              es posible que no pueda acceder a ciertas partes de nuestro sitio web o que alguno de nuestros servicios 
              no funcione correctamente.
            </p>
          </section>

          <section>
            <h2>4. Consentimiento</h2>
            <p>
              Al navegar y continuar en nuestro sitio web nos indica que está consintiendo el uso de las cookies 
              antes enunciadas, y en las condiciones contenidas en la presente Política de Cookies.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
