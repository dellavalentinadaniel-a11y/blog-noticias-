import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import SidebarTrending from '../components/SidebarTrending.tsx';
import { useParams } from 'react-router-dom';

function ArticleDetail() {
  const { id } = useParams();

  return (
    <div className="page-article">
      <Header />
      
      <main className="container pb-3xl mt-xl">
        <div className="grid md:grid-cols-12">
          {/* Main Content */}
          <article className="md:col-span-8">
            <div className="mb-xl">
              <span className="chip mb-md">Mundo</span>
              <h1 className="display-title mb-lg">El Futuro de la Energía Sostenible: Innovaciones que están Cambiando el Panorama Global</h1>
              
              <div className="flex items-center gap-md text-meta mb-xl">
                <span>Por Elena Martínez</span>
                <div className="circle-dot"></div>
                <span>22 de Abril, 2026</span>
                <div className="circle-dot"></div>
                <span>Lectura: 8 min</span>
              </div>

              <div className="hero-image-container mb-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop" 
                  alt="Energía Sostenible" 
                  className="hero-image"
                />
              </div>

              <div className="body-md flex flex-col gap-xl">
                <p className="text-lg font-semibold">
                  A medida que el mundo se enfrenta a los desafíos crecientes del cambio climático, la transición hacia fuentes de energía más limpias y eficientes se ha vuelto no solo necesaria, sino inevitable.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <h2 className="headline-md mt-lg">La Revolución del Almacenamiento</h2>
                <p>
                  Uno de los mayores obstáculos para la energía solar y eólica ha sido la intermitencia. Sin embargo, las nuevas tecnologías de baterías de estado sólido y el almacenamiento térmico están permitiendo que estas fuentes sean viables las 24 horas del día.
                </p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <blockquote className="bg-surface-low p-xl border-radius-md headline-sm font-italic" style={{ borderLeft: '4px solid var(--color-primary)', fontStyle: 'italic' }}>
                  "La tecnología ya no es la barrera; lo es la voluntad política y la infraestructura de mercado."
                </blockquote>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                </p>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="md:col-span-4 sidebar-container">
            <h3 className="headline-sm mb-xl">Más en Tendencia</h3>
            <SidebarTrending />
            
            <div className="newsletter-card mt-3xl">
              <h4 className="headline-sm mb-md">La Edición Semanal</h4>
              <p className="body-sm mb-xl">Análisis profundo y noticias exclusivas directamente en tu correo.</p>
              <input type="email" placeholder="tu@email.com" className="newsletter-input" />
              <button className="btn-secondary w-full">Suscribirme</button>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ArticleDetail;
