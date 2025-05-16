import PageWrapper from '@/components/PageWrapper';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <PageWrapper>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen">
          <div className="absolute inset-0">
            <Image
              src="/images/1.jpg"
              alt="Diamond Beauty Salon"
              fill
              sizes="100vw"
              quality={80}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAIAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+G6vbvh12r1Gvbvh1/hmvOqH3ED//2Q=="
              className="object-cover hero-image"
              priority
            />
            <div className="absolute inset-0 hero-overlay" />
          </div>
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-cream mb-6">
                Experience Luxury Beauty at Its Finest
              </h1>
              <p className="text-xl text-cream mb-8">
                Transform your look with our expert beauty services and premium treatments
              </p>
              <Link
                href="/book"
                className="btn-primary"
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
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Our Premium Services
              </h2>
              <p className="text-lg text-navy/70">
                Discover our range of luxury beauty treatments
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Hair Styling',
                  description: 'Professional haircuts, coloring, and styling services',
                  image: '/images/hair services.jpeg',
                },
                {
                  title: 'Makeup',
                  description: 'Expert makeup application for any occasion',
                  image: '/images/5.jpeg',
                },
                {
                  title: 'Spa Treatments',
                  description: 'Relaxing facials and body treatments',
                  image: '/images/massage services.jpeg',
                },
              ].map((service, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                  <div className="aspect-w-16 aspect-h-9">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      quality={75}
                      loading="lazy"
                      className="object-cover hero-image group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-semibold text-cream mb-2">{service.title}</h3>
                    <p className="text-cream/90">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="btn-secondary"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}
