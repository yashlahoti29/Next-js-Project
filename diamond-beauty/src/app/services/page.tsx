import Navigation from '@/components/Navigation';
import Image from 'next/image';

const services = [
  {
    category: 'Hair Services',
    items: [
      { name: 'Haircut & Styling', price: '₹375-675', duration: '45-60 min' },
      { name: 'Hair Color', price: '₹650-1,150', duration: '2-3 hours' },
      { name: 'Highlights/Lowlights', price: '₹725-1,350', duration: '2-3 hours' },
      { name: 'Hair Treatment', price: '₹625-1,500', duration: '30-45 min' },
    ],
  },
  {
    category: 'Makeup Services',
    items: [
      { name: 'Everyday Makeup', price: '₹3,375', duration: '45 min' },
      { name: 'Special Occasion', price: '₹5,625', duration: '60 min' },
      { name: 'Groom Makeup', price: '₹11,250', duration: '90 min' },
      { name: 'Makeup Lesson', price: '₹6,375', duration: '60 min' },
    ],
  },
  {
    category: 'Spa Treatments',
    items: [
      { name: 'Facial', price: '₹475-900', duration: '60-90 min' },
      { name: 'Body Massage', price: '₹650-1,150', duration: '60-90 min' },
      { name: 'Body Treatment', price: '₹750-1,200', duration: '60-90 min' },
      { name: 'Hand & Foot Care', price: '₹800-2,000', duration: '45-60 min' },
    ],
  },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/5.jpeg"
            alt="Beauty Services"
            fill
            sizes="100vw"
            quality={80}
            loading="eager"
            className="object-cover hero-image"
            priority
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-cream mb-4">
              Our Services
            </h1>
            <p className="text-xl text-cream">
              Discover our range of premium beauty treatments
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((category) => (
              <div key={category.category} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-navy mb-8">{category.category}</h2>
                  <div className="space-y-6">
                    {category.items.map((service) => (
                      <div
                        key={service.name}
                        className="flex items-center justify-between py-4 border-b border-cream last:border-0"
                      >
                        <div>
                          <h3 className="text-lg font-semibold text-navy">{service.name}</h3>
                          <p className="text-sm text-navy/60">{service.duration}</p>
                        </div>
                        <p className="text-lg font-semibold text-teal">{service.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-16 text-center">
            <p className="text-navy mb-4">
              All prices are subject to change. Please contact us for the most up-to-date pricing.
            </p>
            <p className="text-navy">
              We recommend booking appointments in advance to ensure availability.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 