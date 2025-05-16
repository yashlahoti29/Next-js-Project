import PageWrapper from '@/components/PageWrapper';
import Image from 'next/image';
import ForceReload from '@/components/ForceReload';

// Testimonial data
const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Pune',
    content: 'Diamond Beauty has transformed my look completely! Their attention to detail and personalized service makes them stand out from other salons. My regular facials here leave my skin glowing for weeks.',
  },
  {
    name: 'Vikram Patel',
    location: 'Mumbai',
    content: 'The groom makeup services were exceptional. I looked my best on my wedding day thanks to their expert staff. Everyone complimented how natural yet polished the look was.',
  },
  {
    name: 'Anjali Desai',
    location: 'Sinhgad Road',
    content: 'I&apos;ve been coming to Diamond Beauty for over two years now, and they never disappoint. The ambiance is serene, the staff is courteous, and the results are always beyond expectations.',
  },
  {
    name: 'Rahul Kapoor',
    location: 'Pune',
    content: 'Professional service in a luxurious setting. Diamond Beauty understands exactly what I need and delivers every time. Their massage therapy helped relieve my chronic back pain.',
  },
];

export default function About() {
  return (
    <PageWrapper>
      <ForceReload />
      <main className="min-h-screen bg-cream">
        {/* Hero Section */}
        <section className="relative h-[40vh]">
          <div className="absolute inset-0">
            <Image
              src="/images/6.jpeg"
              alt="About Diamond Beauty"
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
                About Us
              </h1>
              <p className="text-xl text-cream">
                Discover the story behind Diamond Beauty
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-navy mb-6">Our Story</h2>
                <div className="space-y-4 text-navy/80">
                  <p>
                    Founded in 2010, Diamond Beauty has been at the forefront of beauty and wellness services,
                    providing our clients with exceptional experiences and stunning transformations.
                  </p>
                  <p>
                    Our journey began with a simple vision: to create a space where beauty meets expertise,
                    where every client feels valued and leaves feeling their absolute best.
                  </p>
                  <p>
                    Today, we&apos;re proud to be one of the most trusted beauty destinations, known for our
                    commitment to quality, innovation, and personalized service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-navy text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Excellence',
                  description: 'We strive for excellence in every service we provide, ensuring the highest quality standards.',
                  icon: (
                    <svg className="h-12 w-12 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  ),
                },
                {
                  title: 'Innovation',
                  description: 'We stay ahead of trends and continuously innovate to provide cutting-edge beauty solutions.',
                  icon: (
                    <svg className="h-12 w-12 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                },
                {
                  title: 'Client Care',
                  description: 'Your satisfaction is our priority. We provide personalized attention and care to every client.',
                  icon: (
                    <svg className="h-12 w-12 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ),
                },
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-navy mb-2">{value.title}</h3>
                  <p className="text-navy/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-navy text-center mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <svg className="h-8 w-8 text-teal mb-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                      </svg>
                      <p className="text-navy/80 italic">{testimonial.content}</p>
                    </div>
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <p className="font-semibold text-navy">{testimonial.name}</p>
                      <p className="text-sm text-teal">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
} 