
import Header from './components/Header';
import HeroBreakingNews from './components/HeroBreakingNews';
import ArticleGrid from './components/ArticleGrid';
import SidebarTrending from './components/SidebarTrending';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      
      <main className="container pb-3xl">
        <div className="grid md:grid-cols-12 mb-2xl">
          <HeroBreakingNews />
        </div>

        <div className="grid md:grid-cols-12">
          {/* Main Article Grid */}
          <div className="md:col-span-8">
            <h2 className="headline-lg mb-2xl">Noticias Recientes</h2>
            <ArticleGrid />
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-4">
            <SidebarTrending />
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
