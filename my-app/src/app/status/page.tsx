'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Image from 'next/image';

export default function Status() {
  const [searchType, setSearchType] = useState<'reference' | 'email'>('reference');
  const [searchValue, setSearchValue] = useState('');
  const [appointment, setAppointment] = useState<null | {
    reference: string;
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
      reference: 'REF123456',
      name: 'Jane Doe',
      service: 'Haircut & Styling',
      date: '2024-03-20',
      time: '2:00 PM',
      status: 'confirmed',
    });
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[30vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/status-hero.jpg"
            alt="Check Appointment Status"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Check Your Appointment
            </h1>
            <p className="text-xl text-white">
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
                <div className="flex space-x-4 mb-6">
                  <button
                    type="button"
                    onClick={() => setSearchType('reference')}
                    className={`flex-1 py-2 px-4 rounded-md ${
                      searchType === 'reference'
                        ? 'bg-pink-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Reference Number
                  </button>
                  <button
                    type="button"
                    onClick={() => setSearchType('email')}
                    className={`flex-1 py-2 px-4 rounded-md ${
                      searchType === 'email'
                        ? 'bg-pink-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Email Address
                  </button>
                </div>
                <div>
                  <label htmlFor="search" className="block text-sm font-medium text-gray-700">
                    {searchType === 'reference' ? 'Reference Number' : 'Email Address'}
                  </label>
                  <input
                    type={searchType === 'reference' ? 'text' : 'email'}
                    id="search"
                    required
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                    placeholder={searchType === 'reference' ? 'Enter your reference number' : 'Enter your email address'}
                  />
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block rounded-full bg-pink-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-pink-500 transition-colors"
                >
                  Check Status
                </button>
              </div>
            </form>

            {/* Appointment Status Display */}
            {appointment && (
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Appointment Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Reference:</span>
                    <span className="font-medium">{appointment.reference}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Name:</span>
                    <span className="font-medium">{appointment.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service:</span>
                    <span className="font-medium">{appointment.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium">{appointment.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time:</span>
                    <span className="font-medium">{appointment.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className={`font-medium ${
                      appointment.status === 'confirmed'
                        ? 'text-green-600'
                        : appointment.status === 'pending'
                        ? 'text-yellow-600'
                        : 'text-gray-600'
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