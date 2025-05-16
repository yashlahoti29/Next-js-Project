'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Image from 'next/image';

export default function Status() {
  const [email, setEmail] = useState('');
  const [appointment, setAppointment] = useState<null | {
    name: string;
    service: string;
    date: string;
    time: string;
    status: 'confirmed' | 'pending' | 'completed';
  }>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a mock implementation
    // In a real application, you would fetch the appointment data from your backend
    setAppointment({
      name: 'Jane Doe',
      service: 'Haircut & Styling',
      date: '2024-03-20',
      time: '2:00 PM',
      status: 'confirmed',
    });
  };

  return (
    <main className="min-h-screen bg-cream">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[30vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/6.jpeg"
            alt="Check Appointment Status"
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
              Check Your Appointment
            </h1>
            <p className="text-xl text-cream">
              Track the status of your booking
            </p>
          </div>
        </div>
      </section>

      {/* Status Check Form */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSearch} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal focus:ring-teal"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block rounded-full bg-teal px-8 py-4 text-lg font-semibold text-cream shadow-sm hover:bg-mint hover:text-navy transition-colors"
                >
                  Check Status
                </button>
              </div>
            </form>

            {/* Appointment Status Display */}
            {appointment && (
              <div className="mt-8 p-6 bg-cream rounded-lg">
                <h3 className="text-lg font-semibold text-navy mb-4">Appointment Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-navy/70">Name:</span>
                    <span className="font-medium text-navy">{appointment.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy/70">Service:</span>
                    <span className="font-medium text-navy">{appointment.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy/70">Date:</span>
                    <span className="font-medium text-navy">{appointment.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy/70">Time:</span>
                    <span className="font-medium text-navy">{appointment.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy/70">Status:</span>
                    <span className={`font-medium ${
                      appointment.status === 'confirmed'
                        ? 'text-teal'
                        : appointment.status === 'pending'
                        ? 'text-mint'
                        : 'text-navy'
                    }`}>
                      {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
} 