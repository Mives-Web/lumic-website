'use client'

import { useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Ahmet Yılmaz',
      position: 'CEO',
      company: 'TechStart Şirketi',
      image: '👨‍💼',
      rating: 5,
      text: 'LUMIC ekibi ile çalışmak harika bir deneyimdi. E-ticaret sitemizi kısa sürede teslim ettiler ve sonuçlar beklentilerimizi aştı. Satışlarımız %200 arttı!',
      project: 'E-ticaret Platformu'
    },
    {
      id: 2,
      name: 'Zeynep Kaya',
      position: 'Pazarlama Müdürü', 
      company: 'Fashion Plus',
      image: '👩‍💼',
      rating: 5,
      text: 'Kurumsal web sitemizi yenilediklerinde, hem tasarım hem de performans açısından müthiş bir gelişme yaşadık. Müşteri geri dönüşleri çok olumlu.',
      project: 'Kurumsal Web Sitesi'
    },
    {
      id: 3,
      name: 'Mehmet Demir',
      position: 'Kurucu',
      company: 'RestoApp',
      image: '👨‍🍳',
      rating: 5,
      text: 'Rezervasyon sistemimizi geliştirirken her detayı düşündüler. Kullanıcı dostu arayüz ve güvenilir alt yapı sayesinde işimiz çok kolaylaştı.',
      project: 'Rezervasyon Sistemi'
    },
    {
      id: 4,
      name: 'Ayşe Öztürk',
      position: 'Genel Müdür',
      company: 'EduTech Solutions',
      image: '👩‍🏫',
      rating: 5,
      text: 'Eğitim platformumuzu geliştirirken öğrenci deneyimini ön planda tuttular. Sonuç olarak kullanıcı memnuniyetimiz %95\'e çıktı.',
      project: 'Eğitim Platformu'
    },
    {
      id: 5,
      name: 'Can Arslan',
      position: 'CTO',
      company: 'DataFlow Systems',
      image: '👨‍💻',
      rating: 5,
      text: 'API entegrasyonları ve performans optimizasyonu konularında gerçekten uzmanlar. Sistemimizin hızı %300 arttı.',
      project: 'Sistem Optimizasyonu'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentSlide]

  return (
    <section id="testimonials" className="section-padding bg-white pt-24">
      <div className="container-custom">
        {/* Başlık */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-800 mb-6">
            Müşteri{' '}
            <span className="text-gradient">Referansları</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Birlikte çalıştığımız müşterilerimizin deneyimleri ve 
            projelerimiz hakkındaki düşünceleri.
          </p>
        </div>

        {/* Ana Testimonial Slider */}
        <div className="relative max-w-5xl mx-auto">
          <div className="card bg-gradient-to-br from-primary-50 to-secondary-50 relative overflow-hidden">
            {/* Büyük Quote İkonu */}
            <Quote className="absolute top-8 left-8 w-20 h-20 text-primary-400/20" />
            
            <div className="relative z-10 grid lg:grid-cols-3 gap-8 items-center">
              {/* Sol Taraf - Müşteri Bilgileri */}
              <div className="text-center lg:text-left">
                <div className="w-32 h-32 mx-auto lg:mx-0 mb-6 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full flex items-center justify-center text-6xl">
                  {currentTestimonial.image}
                </div>
                <h3 className="text-2xl font-bold text-dark-800 mb-2">
                  {currentTestimonial.name}
                </h3>
                <p className="text-primary-600 font-semibold mb-1">
                  {currentTestimonial.position}
                </p>
                <p className="text-dark-600 mb-4">
                  {currentTestimonial.company}
                </p>
                <div className="flex justify-center lg:justify-start space-x-1 mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary-500 text-secondary-500" />
                  ))}
                </div>
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  {currentTestimonial.project}
                </span>
              </div>

              {/* Sağ Taraf - Yorum */}
              <div className="lg:col-span-2">
                <blockquote className="text-xl md:text-2xl text-dark-700 leading-relaxed italic">
                  "{currentTestimonial.text}"
                </blockquote>
              </div>
            </div>

            {/* Navigation Butonları */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-dark-600 hover:text-primary-600 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4">
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-dark-600 hover:text-primary-600 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-primary-400 w-8'
                    : 'bg-gray-300 hover:bg-primary-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Diğer Referanslar Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {testimonials.filter((_, index) => index !== currentSlide).slice(0, 3).map((testimonial) => (
            <div
              key={testimonial.id}
              className="card hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => setCurrentSlide(testimonials.findIndex(t => t.id === testimonial.id))}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold text-dark-800">{testimonial.name}</h4>
                  <p className="text-sm text-dark-600">{testimonial.company}</p>
                  <div className="flex space-x-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-secondary-500 text-secondary-500" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-dark-600 text-sm leading-relaxed">
                "{testimonial.text.substring(0, 120)}..."
              </p>
            </div>
          ))}
        </div>

        {/* Alt İstatistikler */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-400 mb-2">98%</div>
            <div className="text-dark-600">Müşteri Memnuniyeti</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary-500 mb-2">30+</div>
            <div className="text-dark-600">Mutlu Müşteri</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-400 mb-2">50+</div>
            <div className="text-dark-600">Tamamlanan Proje</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary-500 mb-2">24/7</div>
            <div className="text-dark-600">Destek Hizmeti</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
