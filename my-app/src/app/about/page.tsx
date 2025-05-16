import Navigation from '@/components/Navigation';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Salon Owner & Master Stylist',
    image: '/images/team/sarah.jpg',
    bio: 'With over 15 years of experience in the beauty industry, Sarah leads our team with passion and expertise.',
  },
  {
    name: 'Michael Chen',
    role: 'Senior Hair Colorist',
    image: '/images/team/michael.jpg',
    bio: 'Michael specializes in color transformations and has won multiple awards for his innovative techniques.',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Makeup Artist',
    image: '/images/team/emma.jpg',
    bio: 'Emma brings her artistic vision to every makeup application, creating stunning looks for all occasions.',
  },
  {
    name: 'David Kim',
    role: 'Spa Therapist',
    image: '/images/team/david.jpg',
    bio: 'David is certified in various massage techniques and provides exceptional spa treatments.',
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="About Diamond Beauty"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Us
            </h1>
            <p className="text-xl text-white">
              Discover the story behind Diamond Beauty
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2010, Diamond Beauty has been at the forefront of beauty and wellness services,
                  providing our clients with exceptional experiences and stunning transformations.
                </p>
                <p>
                  Our journey began with a simple vision: to create a space where beauty meets expertise,
                  where every client feels valued and leaves feeling their absolute best.
                </p>
                <p>
                  Today, we're proud to be one of the most trusted beauty destinations, known for our
                  commitment to quality, innovation, and personalized service.
                </p>
              </div>
            </div>
            <div className="relative aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden">
              <Image
                src="/images/about-story.jpg"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We strive for excellence in every service we provide, ensuring the highest quality standards.',
                icon: (
                  <svg className="h-12 w-12 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
              },
              {
                title: 'Innovation',
                description: 'We stay ahead of trends and continuously innovate to provide cutting-edge beauty solutions.',
                icon: (
                  <svg className="h-12 w-12 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                title: 'Client Care',
                description: 'Your satisfaction is our priority. We provide personalized attention and care to every client.',
                icon: (
                  <svg className="h-12 w-12 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative aspect-w-1 aspect-h-1">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-pink-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 