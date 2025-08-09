'use client'

import { useState } from 'react'
import { ExternalLink, Github, Filter } from 'lucide-react'

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('Tümü')

  const filters = ['Tümü', 'E-ticaret', 'Kurumsal', 'Web App', 'Landing Page']

  const projects = [
    {
      id: 1,
      title: 'E-ticaret Platformu',
      category: 'E-ticaret',
      description: 'Modern tasarım ve güvenli ödeme sistemi ile kapsamlı e-ticaret çözümü.',
      image: '/api/placeholder/400/300',
      technologies: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Kurumsal Web Sitesi',
      category: 'Kurumsal',
      description: 'Profesyonel kurumsal kimlik ve kullanıcı dostu arayüz tasarımı.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'CSS3'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 3,
      title: 'Rezervasyon Sistemi',
      category: 'Web App',
      description: 'Real-time rezervasyon takibi ve yönetim dashboard uygulaması.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Express', 'Socket.io', 'Material-UI'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Startup Landing Page',
      category: 'Landing Page',
      description: 'Dikkat çeken animasyonlar ve yüksek dönüşüm oranıyla tasarlanmış.',
      image: '/api/placeholder/400/300',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind', 'TypeScript'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'CRM Dashboard',
      category: 'Web App',
      description: 'Müşteri ilişkileri yönetimi için kapsamlı dashboard sistemi.',
      image: '/api/placeholder/400/300',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 6,
      title: 'Moda E-ticaret',
      category: 'E-ticaret',
      description: 'Görsel odaklı moda e-ticaret platformu ve stok yönetimi.',
      image: '/api/placeholder/400/300',
      technologies: ['Shopify', 'React', 'GraphQL', 'Styled Components'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ]

  const filteredProjects = activeFilter === 'Tümü' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="section-padding bg-dark-50 pt-24">
      <div className="container-custom">
        {/* Başlık */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-800 mb-6">
            Son{' '}
            <span className="text-gradient">Projelerimiz</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Farklı sektörlerden müşterilerimiz için geliştirdiğimiz 
            başarılı projelerden örnekler.
          </p>
        </div>

        {/* Filtreler */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-primary-400 text-white shadow-lg'
                  : 'bg-white text-dark-600 hover:bg-primary-50 hover:text-primary-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Proje Kartları */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group card hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Proje Görseli */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  <span className="text-6xl">🚀</span>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary-400 rounded-full flex items-center justify-center text-white hover:bg-primary-500 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center text-white hover:bg-secondary-600 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                {/* Kategori Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-dark-800 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      ⭐ Öne Çıkan
                    </span>
                  </div>
                )}
              </div>

              {/* Proje Bilgileri */}
              <div>
                <h3 className="text-2xl font-bold text-dark-800 mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-dark-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Teknolojiler */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Proje Linkleri */}
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Canlı Görüntüle</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-dark-600 hover:text-dark-800 font-medium transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Kod</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Alt CTA */}
        <div className="text-center mt-16">
          <div className="inline-block card bg-gradient-to-r from-primary-400 to-secondary-500 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Daha Fazla Proje Görmek İster misiniz?
            </h3>
            <p className="mb-6 opacity-90">
              GitHub profilimizde daha fazla açık kaynak proje bulabilirsiniz.
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center space-x-2"
            >
              <Github className="w-5 h-5" />
              <span>GitHub'da İncele</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
