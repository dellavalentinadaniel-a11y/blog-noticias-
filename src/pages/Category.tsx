import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import ArticleGrid from '../components/ArticleGrid.tsx';
import SidebarTrending from '../components/SidebarTrending.tsx';
import { useParams } from 'react-router-dom';

function Category() {
  const { categoryName } = useParams();
  
  // Transform category name for display (e.g., "business" -> "Negocios")
  const displayTitle = categoryName ? categoryName.charAt(0).toUpperCase() + categoryName.slice(1) : 'Noticias';
  
  const categoryTitles: Record<string, string> = {
    'business': 'Negocios y Finanzas',
    'politics': 'Política Nacional',
    'world': 'Actualidad Mundial',
    'tecnologia': 'Innovación y Tech'
  };

  return (
    <div className="page-category">
      <Header />
      
      <main className="container pb-3xl mt-xl">
        <header className="mb-3xl">
          <div className="flex items-center gap-md text-primary font-semibold mb-sm">
            <span className="text-meta">Sección</span>
          </div>
          <h1 className="display-title">{categoryTitles[categoryName || ''] || displayTitle}</h1>
          <div className="mt-md" style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-primary)' }}></div>
        </header>

        <div className="grid md:grid-cols-12">
          {/* Main Article List */}
          <div className="md:col-span-8">
            <ArticleGrid />
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-4">
            <h3 className="headline-sm mb-xl">Lo más leído en {displayTitle}</h3>
            <SidebarTrending />
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Category;
