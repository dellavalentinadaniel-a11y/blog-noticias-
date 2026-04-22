
import { Menu, Search, Bell } from 'lucide-react';

const Header = () => {
  return (
    <header className="glass-nav" style={{ padding: '1rem 0' }}>
      <div className="container flex items-center justify-between">
        {/* Mobile Menu Icon */}
        <button className="md:hidden" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-on-surface)' }}>
          <Menu strokeWidth={1.5} size={24} />
        </button>

        {/* Logo */}
        <div style={{ fontWeight: 700, fontSize: '1.5rem', letterSpacing: '-0.02em', color: 'var(--color-primary)' }}>
          The Digital Curator.
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex" style={{ gap: '2rem', display: 'none' }}>
          <style>{`@media (min-width: 768px) { nav { display: flex !important; } }`}</style>
          {['Inicio', 'Política', 'Economía', 'Tecnología', 'Opinión'].map((item) => (
            <a 
              key={item} 
              href="#" 
              style={{ 
                fontWeight: 600, 
                color: 'var(--color-on-surface)',
                opacity: 0.8,
                transition: 'opacity 0.2s',
                textDecoration: item === 'Inicio' ? 'underline solid var(--color-outline-variant) 2px' : 'none',
                textUnderlineOffset: '6px'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center" style={{ gap: '1rem' }}>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-on-surface)' }}>
            <Search strokeWidth={1.5} size={20} />
          </button>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-on-surface)' }}>
            <Bell strokeWidth={1.5} size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
