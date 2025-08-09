'use client'

import { ShoppingCart, Globe, Smartphone, BarChart3, ArrowRight } from 'lucide-react'

const ServicesSection = () => {
  const services = [
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: 'E-ticaret Geliştirme',
      description: 'Shopify, WooCommerce ve özel e-ticaret çözümleri ile satış odaklı platformlar.',
      features: ['Güvenli ödeme sistemleri', 'Mobil uyumlu tasarım', 'Stok yönetimi', 'SEO optimizasyonu'],
      gradient: 'from-blue-500 to-purple-600',
      hoverColor: 'hover:shadow-blue-500/25'
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Kurumsal Web Sitesi',
      description: 'Markanızı yansıtan, profesyonel ve etkileyici kurumsal web siteleri.',
      features: ['Responsive tasarım', 'CMS entegrasyonu', 'Hızlı yükleme', 'Güvenlik önlemleri'],
      gradient: 'from-green-500 to-teal-600',
      hoverColor: 'hover:shadow-green-500/25'
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Web Uygulamaları',
      description: 'Dashboard, rezervasyon, CRM gibi özel ihtiyaçlarınıza yönelik uygulamalar.',
      features: ['Özel dashboard', 'Kullanıcı yönetimi', 'API entegrasyonu', 'Real-time updates'],
      gradient: 'from-orange-500 to-red-600',
      hoverColor: 'hover:shadow-orange-500/25'
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: 'Performans Optimizasyonu',
      description: 'Mevcut web sitenizin hızını ve performansını artıran çözümler.',
      features: ['Hız optimizasyonu', 'SEO iyileştirme', 'Kod refaktörü', 'Monitoring'],
      gradient: 'from-purple-500 to-pink-600',
      hoverColor: 'hover:shadow-purple-500/25'
    }
  ]

  const handleServiceClick = (serviceName: string) => {
    // İletişim formuna yönlendir ve hizmet bilgisini geç
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      // Formu doldurma işlemi buraya eklenebilir
    }
  }

  return (
    <section id="services" className="section-padding bg-white pt-24">
      <div className="container-custom">
        {/* Başlık */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-800 mb-6">
            Sunduğumuz{' '}
            <span className="text-gradient">Hizmetler</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            İşletmenizin dijital ihtiyaçlarına özel, modern teknolojilerle 
            geliştirilmiş profesyonel web çözümleri sunuyoruz.
          </p>
        </div>

        {/* Hizmet Kartları */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group card relative overflow-hidden transition-all duration-500 ${service.hoverColor} hover:scale-105 cursor-pointer`}
              onClick={() => handleServiceClick(service.title)}
            >
              {/* Arka Plan Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* İçerik */}
              <div className="relative z-10">
                {/* İkon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-6`}>
                  {service.icon}
                </div>

                {/* Başlık ve Açıklama */}
                <h3 className="text-2xl font-bold text-dark-800 mb-4 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-dark-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Özellikler */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-dark-600">
                      <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Butonu */}
                <div className="flex items-center justify-between">
                  <span className="text-primary-600 font-semibold group-hover:text-primary-700 transition-colors">
                    Detayları Görüntüle
                  </span>
                  <ArrowRight className="w-5 h-5 text-primary-600 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>

              {/* Hover Efekti */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Alt CTA Bölümü */}
        <div className="mt-16 text-center">
          <div className="card bg-gradient-to-r from-primary-400 to-secondary-500 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Projenizi Hayata Geçirelim
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Hangi hizmete ihtiyacınız olursa olsun, size özel çözümler geliştiriyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleServiceClick('Genel Danışmanlık')}
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Ücretsiz Danışmanlık
              </button>
              <button 
                onClick={() => handleServiceClick('Proje Teklifi')}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-300"
              >
                Proje Teklifi Al
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
