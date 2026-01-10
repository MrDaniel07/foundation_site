import React from 'react';
import { Link } from 'react-router-dom';
import PublicLayout from './PublicLayout';
import { Target, Eye, Award, Users } from 'lucide-react';
import founderImage from 'figma:asset/92e40b2871d1e969f0c8f4d7c135b049c9690ef6.png';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower communities worldwide through sustainable programs in education, healthcare, and economic development, creating lasting positive change.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'A world where every individual has access to the resources and opportunities they need to thrive and reach their full potential.',
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Integrity, compassion, innovation, collaboration, and sustainability guide everything we do as we work to transform lives.',
    },
  ];

  const team = [
    {
      name: 'Prince Uche',
      role: 'Founder & CEO',
      image: founderImage,
    },
  ];

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1676277757211-ebd7fdeb3d5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzY3MjA4OTI0fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl mb-4">About Us</h1>
          <p className="text-xl text-white">
            Learn more about our mission, vision, and the team behind the Prince Goodwill Foundation.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <value.icon className="text-blue-600 mb-4" size={48} />
                <h3 className="text-2xl mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-center text-gray-900">Our Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              The Prince Goodwill Foundation was established in 2004 with a simple yet powerful vision: to create meaningful, lasting change in communities that need it most. What began as a small grassroots initiative has grown into a global organization impacting lives across 15 countries.
            </p>
            <p className="text-gray-700 mb-4">
              Our founder, Prince Uche, was inspired to start this foundation after witnessing firsthand the challenges faced by underserved communities during his work in international development. He recognized that sustainable change requires a holistic approach—one that addresses education, healthcare, and economic opportunity simultaneously.
            </p>
            <p className="text-gray-700 mb-4">
              Over the past two decades, we've implemented innovative programs that have educated thousands of children, provided healthcare to vulnerable populations, and empowered communities to build sustainable futures. Our work is guided by the principle that every person deserves the opportunity to thrive.
            </p>
            <p className="text-gray-700">
              Today, the Prince Goodwill Foundation continues to expand its reach and impact, working alongside local partners to create solutions that are culturally appropriate, sustainable, and community-driven. We believe in empowering people, not just providing aid—and this philosophy drives everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12 text-center text-gray-900">Leadership</h2>
          <div className="flex justify-center">
            {team.map((member, index) => (
              <div key={index} className="max-w-sm">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover rounded-lg shadow-lg mb-4"
                />
                <h3 className="text-2xl mb-2 text-gray-900">{member.name}</h3>
                <p className="text-blue-600 mb-4">{member.role}</p>
                <Link
                  to="/founder"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Read Full Bio →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12 text-center">Our Impact by the Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-2">50,000+</div>
              <div className="text-xl">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2">15</div>
              <div className="text-xl">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2">25</div>
              <div className="text-xl">Active Programs</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2">20</div>
              <div className="text-xl">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6 text-gray-900">Join Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8">
            Together, we can create lasting change and empower communities worldwide.
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors inline-block"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </PublicLayout>
  );
}