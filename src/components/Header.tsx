import { Menu, Search, Bell } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Política', path: '/category/politics' },
    { name: 'Economía', path: '/category/business' },
    { name: 'Mundo', path: '/category/world' },
    { name: 'Tecnología', path: '/category/tecnologia' },
  ];

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
        <Link to="/" className="headline-md text-primary mb-0" style={{ letterSpacing: '-0.03em', fontWeight: 800 }}>
          The Digital Curator.
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-2xl items-center">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className={`nav-link ${location.pathname === item.path ? 'nav-link-active' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-sm md:gap-md">
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
