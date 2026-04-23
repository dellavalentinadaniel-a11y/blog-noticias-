import { Link } from 'react-router-dom';

const ARTICLES = [
  {
    id: 1,
    category: 'Economía',
    title: 'Los mercados globales reaccionan a las nuevas tasas de interés',
    excerpt: 'Análisis de la volatilidad financiera tras los anuncios de los bancos centrales.',
    author: 'Carlos Mendoza',
    date: 'Hace 4 horas',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 2,
    category: 'Tecnología',
    title: 'El auge de la computación cuántica y su impacto en la seguridad',
    excerpt: '¿Estamos preparados para el momento en que la criptografía actual quede obsoleta?',
    author: 'Ana Silva',
    date: 'Hace 5 horas',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 3,
    category: 'Política',
    title: 'Cumbre climática: Acuerdos históricos y promesas por cumplir',
    excerpt: 'Líderes mundiales firman un pacto para reducir emisiones, pero la implementación sigue en duda.',
    author: 'Elena Rivas',
    date: 'Hace 7 horas',
    image: 'https://images.unsplash.com/photo-1526404809228-448e65860dcb?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 4,
    category: 'Sociedad',
    title: 'Nuevos modelos de trabajo híbrido redefinen las ciudades',
    excerpt: 'El impacto del trabajo remoto en la planificación urbana y el estilo de vida.',
    author: 'Javier Ramos',
    date: 'Hace 8 horas',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop'
  }
];

const ArticleGrid = () => {
  return (
    <div className="flex flex-col gap-3xl">
      {ARTICLES.map((article) => (
        <Link 
          key={article.id} 
          to={`/article/${article.id}`}
          className="article-item article-card-hover flex flex-col md:grid md:grid-cols-12 gap-xl"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div className="md:col-span-5">
            <div className="article-image-container">
              <img 
                src={article.image} 
                alt={article.title} 
                className="article-image"
              />
            </div>
          </div>
          <div className="md:col-span-7 flex flex-col justify-center">
            <span className="text-meta text-tertiary mb-sm">
              {article.category}
            </span>
            <h3 className="headline-md mb-md">{article.title}</h3>
            <p className="body-md opacity-80 mb-lg">{article.excerpt}</p>
            <div className="flex items-center gap-md">
              <span className="text-meta">{article.author}</span>
              <span className="circle-dot" />
              <span className="text-meta">{article.date}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ArticleGrid;
