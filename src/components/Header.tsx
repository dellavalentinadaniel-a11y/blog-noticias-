
import { Menu, Search, Bell } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Header = ({ onNavigate, currentPage }: HeaderProps) => {
  return (
    <header className="glass-nav">
      <div className="container header-container flex items-center justify-between">
        {/* Mobile Menu Icon */}
        <button 
          className="md:hidden icon-btn" 
          aria-label="Abrir menú"
          title="Menú"
        >
          <Menu strokeWidth={1.5} size={24} />
        </button>

        {/* Logo */}
        <div 
          className="footer-logo text-primary mb-0 cursor-pointer" 
          onClick={() => onNavigate('home')}
        >
          The Digital Curator.
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-2xl">
          {['Inicio', 'Política', 'Economía', 'Tecnología', 'Opinión'].map((item) => (
            <a 
              key={item} 
              href="#" 
              onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
              className={`nav-link ${item === 'Inicio' && currentPage === 'home' ? 'nav-link-active' : ''}`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-lg">
          <button 
            aria-label="Buscar"
            title="Buscar"
            className="icon-btn"
          >
            <Search strokeWidth={1.5} size={20} />
          </button>
          <button 
            aria-label="Notificaciones"
            title="Notificaciones"
            className="icon-btn"
          >
            <Bell strokeWidth={1.5} size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
