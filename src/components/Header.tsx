
import { Menu, Search, Bell } from 'lucide-react';

const Header = () => {
  return (
    <header className="glass-nav">
      <div className="container header-container flex items-center justify-between">
        {/* Mobile Menu Icon */}
        <button 
          className="md:hidden" 
          aria-label="Abrir menú"
          title="Menú"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-on-surface)' }}
        >
          <Menu strokeWidth={1.5} size={24} />
        </button>

        {/* Logo */}
        <div className="footer-logo" style={{ color: 'var(--color-primary)', marginBottom: 0 }}>
          The Digital Curator.
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex" style={{ gap: '2rem' }}>
          {['Inicio', 'Política', 'Economía', 'Tecnología', 'Opinión'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className={`nav-link ${item === 'Inicio' ? 'nav-link-active' : ''}`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center" style={{ gap: '1rem' }}>
          <button 
            aria-label="Buscar"
            title="Buscar"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-on-surface)' }}
          >
            <Search strokeWidth={1.5} size={20} />
          </button>
          <button 
            aria-label="Notificaciones"
            title="Notificaciones"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-on-surface)' }}
          >
            <Bell strokeWidth={1.5} size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
