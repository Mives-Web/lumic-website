'use client'

import { Code, Zap, Users, Award, Lightbulb, Target } from 'lucide-react'
import Image from 'next/image'

const AboutSection = () => {
  const skills = [
    { name: 'React.js', icon: '⚛️', color: 'text-blue-500' },
    { name: 'Next.js', icon: '🔺', color: 'text-gray-800' },
    { name: 'Node.js', icon: '🟢', color: 'text-green-500' },
    { name: 'TypeScript', icon: '🔷', color: 'text-blue-600' },
    { name: 'Tailwind CSS', icon: '🎨', color: 'text-cyan-500' },
    { name: 'MongoDB', icon: '🍃', color: 'text-green-600' },
  ]

  const values = [
    {
      icon: <Zap className="w-8 h-8 text-primary-400" />,
      title: 'Hızlı Geliştirme',
      description: 'Modern teknolojiler kullanarak hızlı ve verimli çözümler üretiyoruz.'
    },
    {
      icon: <Code className="w-8 h-8 text-secondary-500" />,
      title: 'Temiz Kod',
      description: 'Sürdürülebilir, okunabilir ve ölçeklenebilir kod yazma prensiplerine uyuyoruz.'
    },
    {
      icon: <Users className="w-8 h-8 text-primary-400" />,
      title: 'İşbirliği',
      description: 'Müşterilerimizle şeffaf iletişim kurarak birlikte başarıya ulaşıyoruz.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-dark-50 pt-24">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Sol Taraf - Metin İçeriği */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-800 mb-6">
                Merhaba, Biz{' '}
                <span className="text-gradient">LUMIC</span>
              </h2>
              <p className="text-xl text-dark-600 leading-relaxed mb-6">
                5+ yıllık deneyimimizle modern web teknolojileri kullanarak 
                işletmenizi dijital dünyada öne çıkaracak çözümler geliştiriyoruz.
              </p>
              <p className="text-lg text-dark-600 leading-relaxed">
                Amacımız, sadece görsel olarak etkileyici değil, aynı zamanda 
                performanslı, kullanıcı dostu ve SEO optimizasyonlu web siteleri 
                ve uygulamalar sunmaktır. Her proje bizim için yeni bir maceradır.
              </p>
            </div>

            {/* Değerlerimiz */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark-800 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-dark-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ Taraf - Yetenekler ve Görsel */}
          <div className="space-y-8">
            {/* Profil Kartı */}
            <div className="card text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full p-4 shadow-lg flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="LUMIC Logo"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-dark-800 mb-2">LUMIC Team</h3>
              <p className="text-dark-600 mb-4">Full-Stack Developers</p>
              <div className="flex justify-center space-x-4">
                <Award className="w-6 h-6 text-secondary-500" />
                <Lightbulb className="w-6 h-6 text-primary-400" />
                <Target className="w-6 h-6 text-secondary-500" />
              </div>
            </div>

            {/* Teknoloji Yetenekleri */}
            <div className="card">
              <h3 className="text-2xl font-bold text-dark-800 mb-6 text-center">
                Teknoloji Yetkinliklerimiz
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-dark-50 rounded-lg hover:bg-primary-50 transition-colors duration-300"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className={`font-semibold ${skill.color}`}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Misyon & Vizyon */}
            <div className="card bg-gradient-to-br from-primary-400 to-secondary-500 text-white">
              <h3 className="text-2xl font-bold mb-4">Misyonumuz</h3>
              <p className="leading-relaxed">
                Her işletmenin dijital dönüşümünde güvenilir bir partner olmak, 
                modern teknolojilerle geleceğe hazır çözümler sunmak.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
