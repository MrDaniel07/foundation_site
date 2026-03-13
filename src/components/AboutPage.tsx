import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PublicLayout from './PublicLayout';
import { Heart, Users, Globe, Award } from 'lucide-react';
import founderImage from 'figma:asset/92e40b2871d1e969f0c8f4d7c135b049c9690ef6.png';

export default function AboutPage() {
  const coreValues = [
    {
      title: 'Integrity',
      description: 'We operate with transparency, accountability, and ethical responsibility in all initiatives and partnerships.',
    },
    {
      title: 'Compassion',
      description: 'We approach every community with empathy, respect, and a deep commitment to human dignity.',
    },
    {
      title: 'Collaboration',
      description: 'We work alongside local leaders, volunteers, and strategic partners to create culturally appropriate and sustainable solutions.',
    },
    {
      title: 'Innovation',
      description: 'We continually refine our programs to ensure effectiveness, scalability, and measurable outcomes.',
    },
    {
      title: 'Sustainability',
      description: 'We prioritize long-term impact over short-term relief, focusing on empowerment rather than dependency.',
    },
  ];

  const impactStats = [
    { number: '50,000+', label: 'Lives Impacted', icon: Users },
    { number: '15', label: 'Countries Served', icon: Globe },
    { number: '25', label: 'Active Programs', icon: Heart },
    { number: '20', label: 'Years of Service', icon: Award },
  ];

  return (
    <PublicLayout>
      <Helmet>
        <title>About Prince Goodwill Foundation</title>
        <meta name="description" content="Learn about the Prince Goodwill Foundation's mission, vision, values, and commitment to advancing healthcare, education, housing, and community empowerment across Nigeria and the United States." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559027615-cd2628902d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBjb21taXRtZW50fGVufDB8fHx8fDE3NjcyMDg5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="sr-only">About Prince Goodwill Foundation</h1>
          <h2 className="text-5xl mb-4">About Prince Goodwill Foundation</h2>
          <p className="text-xl text-white">
            Learn about our mission, vision, values, and commitment to advancing lasting change.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              The Prince Goodwill Foundation is a purpose-driven humanitarian organization committed to advancing sustainable solutions in healthcare, education, housing stability, and community empowerment. Guided by integrity and compassion, the foundation works across Nigeria and the United States to create measurable, lasting impact in underserved communities.
            </p>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Established with a long-term vision for structured philanthropy, the foundation continues to expand its reach through responsible leadership, collaborative partnerships, and community-centered programming.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/programs"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors inline-block"
            >
              Explore Our Programs
            </Link>
            <Link
              to="/impact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors inline-block"
            >
              View Our Impact
            </Link>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-gray-900">Our Mission</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Our mission is to empower communities through sustainable initiatives in healthcare access, educational advancement, housing support, and faith-based engagement. We are dedicated to addressing systemic challenges while equipping individuals and families with the tools they need to build stable, self-sufficient futures.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              At Prince Goodwill Foundation, empowerment goes beyond temporary assistance. Every program is designed to produce meaningful outcomes, restore dignity, and strengthen communities from within.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-gray-900">Our Vision</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              We envision a world where every individual — regardless of background or circumstance — has access to the essential resources, opportunities, and support systems necessary to thrive.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Through strategic outreach and responsible stewardship, Prince Goodwill Foundation seeks to bridge opportunity gaps and contribute to stronger, healthier communities across borders.
            </p>
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-4 text-gray-900 text-center">Our Core Values</h2>
          <p className="text-gray-700 text-lg text-center mb-12 max-w-3xl mx-auto">
            Our work is guided by principles that define who we are and how we serve:
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl mb-3 text-gray-900 font-semibold">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 text-lg text-center mt-12">
            These values shape every decision we make and every community we serve.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-gray-900">Our Story</h2>
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed">
              The Prince Goodwill Foundation was established in 2004 with a simple but powerful objective: to create structured, sustainable change in communities facing significant socioeconomic challenges.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              What began as a grassroots initiative has grown into a multi-regional humanitarian organization serving thousands of individuals across Nigeria and beyond. Over the past two decades, the foundation has implemented programs that improve healthcare access, provide tuition assistance opportunities, assist families with housing stability, and promote faith-centered community engagement.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              The inspiration behind the foundation came from firsthand exposure to the systemic challenges affecting vulnerable populations. Recognizing that sustainable transformation requires more than isolated interventions, the organization adopted a holistic model — one that integrates healthcare, education, housing, and community support into a unified strategy for empowerment.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Today, Prince Goodwill Foundation continues to evolve while remaining rooted in its founding principles: dignity, service, and measurable impact.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-12">
            <Link
              to="/programs"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors inline-block"
            >
              Learn More About Our Programs
            </Link>
            <Link
              to="/news"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors inline-block"
            >
              Read Our Latest News & Updates
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership & Governance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12 text-gray-900">Leadership & Governance</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={founderImage}
                alt="Prince Uche Nwakanma"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="prose prose-lg max-w-none space-y-4">
              <p className="text-gray-700 text-lg leading-relaxed">
                The foundation was founded by Prince Uche Nwakanma, whose professional background in law, business, and public service informs the organization's structured approach to philanthropy.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                With a distinguished legal career in the United States and recognition among top legal professionals, Prince Uche Nwakanma transitioned his focus toward humanitarian service, establishing the foundation as a vehicle for responsible and strategic community development.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Under his leadership, Prince Goodwill Foundation emphasizes accountability, operational transparency, and measurable results. Governance structures are designed to ensure responsible stewardship of resources and long-term sustainability of programs.
              </p>
              <Link
                to="/founder"
                className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2 transition-colors"
              >
                Read the Full Biography of Prince Uche Nwakanma →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact by the Numbers */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-4 text-center">Community Impact by the Numbers</h2>
          <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
            Our commitment to service is reflected in measurable outcomes:
          </p>
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="mx-auto mb-4" size={40} />
                <div className="text-5xl mb-2 font-bold">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="text-lg text-center">
            While these numbers represent growth and reach, they also represent individuals and families whose lives have been positively transformed through access to healthcare, education, housing, and structured support systems.
          </p>
          <div className="text-center mt-8">
            <Link
              to="/impact"
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg transition-colors inline-block font-semibold"
            >
              See Detailed Impact Reports
            </Link>
          </div>
        </div>
      </section>

      {/* Global Commitment */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-gray-900">A Commitment to Responsible Global Outreach</h2>
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed">
              Although deeply rooted in Nigeria, Prince Goodwill Foundation maintains growing engagement within the United States through partnerships, community collaborations, and philanthropic initiatives.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our cross-border presence reflects a broader commitment to international responsibility and community advancement. By combining global perspective with local partnership, we ensure that our programs remain both impactful and culturally responsive.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6 text-gray-900">Join Us in Advancing Lasting Change</h2>
          <p className="text-xl text-gray-700 mb-8">
            Sustainable transformation requires collective effort. Prince Goodwill Foundation invites individuals, volunteers, donors, and strategic partners to participate in advancing healthcare access, educational opportunity, housing support, and community empowerment.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Together, we can expand opportunity, restore dignity, and strengthen communities for generations to come.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors inline-block"
            >
              Get Involved
            </Link>
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}