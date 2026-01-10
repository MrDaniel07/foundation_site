import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PublicLayout from "./PublicLayout";
import { ArrowRight, Heart, Users, Globe } from "lucide-react";
import founderImage from 'figma:asset/92e40b2871d1e969f0c8f4d7c135b049c9690ef6.png';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export default function HomePage() {
  const [featuredPrograms, setFeaturedPrograms] = React.useState<any[]>([]);
  const [activePrograms, setActivePrograms] = React.useState("6");

  React.useEffect(() => {
    // Fetch programs from server
    const fetchPrograms = async () => {
      try {
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-b2211b85/programs`,
          {
            headers: {
              'Authorization': `Bearer ${publicAnonKey}`,
            },
          }
        );
        
        if (response.ok) {
          const data = await response.json();
          // Display first 3 programs on home page
          setFeaturedPrograms((data.programs || []).slice(0, 3));
          setActivePrograms(String(data.programs?.length || 0));
        } else {
          console.error('Failed to fetch programs:', await response.text());
        }
      } catch (error) {
        console.error('Error fetching programs:', error);
      }
    };

    fetchPrograms();
  }, []);

  const stats = [
    { icon: Users, label: "People Impacted", value: "6,500+" },
    { icon: Globe, label: "Countries Served", value: "Multiple" },
    { icon: Heart, label: "Active Programs", value: activePrograms },
  ];

  return (
    <PublicLayout>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Prince Goodwill Foundation | Founded by Prince Uche Nwakanma</title>
        <meta name="title" content="Prince Goodwill Foundation | Founded by Prince Uche Nwakanma" />
        <meta name="description" content="Prince Goodwill Foundation, founded by Prince Uche Nwakanma, provides healthcare missions, education scholarships, housing support, and Christian evangelism. Empowering communities and transforming lives." />
        <meta name="keywords" content="Prince Goodwill Foundation, Prince Uche Nwakanma, charity, nonprofit, healthcare missions, education scholarships, housing support, Christian evangelism, community development, philanthropy, humanitarian" />
        <link rel="canonical" href="https://princegoodwillfoundation.org/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://princegoodwillfoundation.org/" />
        <meta property="og:title" content="Prince Goodwill Foundation | Founded by Prince Uche Nwakanma" />
        <meta property="og:description" content="Prince Goodwill Foundation provides healthcare missions, education scholarships, housing support, and Christian evangelism. Founded by attorney and philanthropist Prince Uche Nwakanma." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://princegoodwillfoundation.org/" />
        <meta property="twitter:title" content="Prince Goodwill Foundation | Founded by Prince Uche Nwakanma" />
        <meta property="twitter:description" content="Empowering communities through healthcare, education, housing support, and Christian evangelism. Founded by Prince Uche Nwakanma." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1761666507437-9fb5a6ef7b0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXJzJTIwaGVscGluZ3xlbnwxfHx8fDE3NjcxODE3NTd8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl mb-6 text-white">
            Empowering Communities, Transforming Lives
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white">
            Founded by Prince Uche Nwakanma, our foundation is
            dedicated to healthcare missions, housing support, education scholarships,
            and Christian evangelism to transform lives and strengthen faith communities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/programs"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              Explore Our Programs <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg transition-colors"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <stat.icon
                  className="mx-auto mb-4 text-blue-600"
                  size={48}
                />
                <div className="text-4xl mb-2 text-gray-900">
                  {stat.value}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">
              Our Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to making a difference in the
              lives of those who need it most through targeted,
              impactful programs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredPrograms.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl mb-3 text-gray-900">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {program.description}
                  </p>
                  <Link
                    to="/programs"
                    className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-2 transition-colors"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/programs"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors inline-block"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={founderImage}
                alt="Prince Uche"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl mb-6 text-gray-900">
                Meet Our Founder
              </h2>
              <h3 className="text-2xl mb-4 text-blue-600">
                Prince Uche Nwakanma
              </h3>
              <p className="text-gray-700 mb-4">
                Prince Uche Nwakanma is a respected legal
                professional, entrepreneur, philanthropist, and
                humanitarian. A prominent ambassador of
                successful lawyers of African descent in the
                United States, he was voted among the Top 50
                Black Lawyers in the country and represented
                more than 6,000 clients across federal courts.
              </p>
              <p className="text-gray-700 mb-6">
                Following his distinguished legal career, Prince
                Uche Nwakanma founded multiple
                multi-million-dollar enterprises and served on
                the President's Business Advisory Council for
                Texas. Now dedicated to philanthropy and
                service, he founded the Prince Goodwill Foundation
                to uplift individuals and communities through
                charitable giving and humanitarian work.
              </p>
              <Link
                to="/founder"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition-colors inline-flex items-center gap-2"
              >
                Read Prince Uche's Story <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl mb-8">
            Your support helps us continue our mission to
            empower communities and transform lives. Together,
            we can create lasting change.
          </p>
          <Link
            to="/contact"
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg transition-colors inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </PublicLayout>
  );
}