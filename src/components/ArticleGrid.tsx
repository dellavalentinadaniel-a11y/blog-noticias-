

const articles = [
  {
    id: 1,
    category: 'Economía',
    title: 'Los mercados globales reaccionan a las nuevas tasas de interés',
    author: 'Carlos Mendoza',
    time: 'Hace 4 horas',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 2,
    category: 'Tecnología',
    title: 'El auge de la computación cuántica y su impacto en la seguridad',
    author: 'Ana Silva',
    time: 'Hace 5 horas',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 3,
    category: 'Política',
    title: 'Cumbre climática: Acuerdos históricos y promesas por cumplir',
    author: 'Elena Rivas',
    time: 'Hace 7 horas',
    image: 'https://images.unsplash.com/photo-1526404809228-448e65860dcb?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 4,
    category: 'Sociedad',
    title: 'Nuevos modelos de trabajo híbrido redefinen las ciudades',
    author: 'Javier Ramos',
    time: 'Hace 8 horas',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop'
  }
];

const ArticleGrid = () => {
  return (
    <div className="flex flex-col" style={{ gap: '3rem' /* 48px vertical whitespace rule */ }}>
      {articles.map((article) => (
        <article key={article.id} className="flex flex-col md:flex-row hover-lift" style={{ gap: '1.5rem', cursor: 'pointer' }}>
          <div style={{ width: '100%', maxWidth: '280px', height: '180px', flexShrink: 0 }}>
            <img 
              src={article.image} 
              alt={article.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.5rem' }}
            />
          </div>
          <div className="flex flex-col justify-between" style={{ padding: '0.5rem 0' }}>
            <div>
              <span className="text-meta" style={{ display: 'block', marginBottom: '0.5rem' }}>
                {article.category}
              </span>
              <h3 className="headline-md" style={{ marginBottom: '1rem' }}>
                {article.title}
              </h3>
            </div>
            <div className="text-meta" style={{ display: 'flex', gap: '0.5rem' }}>
              <span>Por {article.author}</span>
              <span>•</span>
              <span>{article.time}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ArticleGrid;
