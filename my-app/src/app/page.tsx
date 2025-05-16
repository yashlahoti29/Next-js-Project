import Navigation from '@/components/Navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Diamond Beauty Salon"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Experience Luxury Beauty at Its Finest
            </h1>
            <p className="text-xl text-white mb-8">
              Transform your look with our expert beauty services and premium treatments
            </p>
            <Link
              href="/book"
              className="inline-block rounded-full bg-pink-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-pink-500 transition-colors"
            >
              Book Your Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-lg text-gray-600">
              Discover our range of luxury beauty treatments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Hair Styling',
                description: 'Professional haircuts, coloring, and styling services',
                image: '/images/hair.jpg',
              },
              {
                title: 'Makeup',
                description: 'Expert makeup application for any occasion',
                image: '/images/makeup.jpg',
              },
              {
                title: 'Spa Treatments',
                description: 'Relaxing facials and body treatments',
                image: '/images/spa.jpg',
              },
            ].map((service, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                <div className="aspect-w-16 aspect-h-9">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-white/90">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block rounded-full border-2 border-pink-600 px-8 py-3 text-lg font-semibold text-pink-600 hover:bg-pink-600 hover:text-white transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
