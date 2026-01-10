import React, { useState, useEffect } from 'react';
import PublicLayout from './PublicLayout';
import { MapPin, Calendar } from 'lucide-react';

export default function ImpactPage() {
  const [stories, setStories] = useState<any[]>([]);

  useEffect(() => {
    // Load impact stories from localStorage
    const storedStories = localStorage.getItem('impactStories');
    if (storedStories) {
      setStories(JSON.parse(storedStories));
    } else {
      // Default stories
      const defaultStories = [
        {
          id: 1,
          title: 'Medical Mission Transforms Lives in Rural Africa',
          location: 'Nigeria, Africa',
          date: '2024',
          description: 'Through our healthcare program, we provided free medical care and essential supplies to over 2,500 vulnerable individuals including the homeless in rural African communities.',
          image: 'https://images.unsplash.com/photo-1536064479547-7ee40b74b807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2ElMjBtZWRpY2FsJTIwY2xpbmljJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3Njc0ODI0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        },
        {
          id: 2,
          title: 'Shelter Assistance Provides Hope for Homeless Families',
          location: 'Houston, Texas',
          date: '2024',
          description: 'Our shelter assistance program provided cash incentives and resources to help 150 families find stable, safe housing and rebuild their lives with dignity.',
          image: 'https://images.unsplash.com/photo-1627512184055-0473ec0b5815?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzaW5nJTIwYXNzaXN0YW5jZSUyMGZhbWlseSUyMGhvbWV8ZW58MXx8fHwxNzY3NDgyNDE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        },
        {
          id: 3,
          title: 'Scholarships Enable Dreams of Higher Education',
          location: 'Multiple States, USA',
          date: '2024',
          description: 'We provided scholarship support and tuition assistance to 85 deserving students, enabling them to pursue their academic dreams and build brighter futures.',
          image: 'https://images.unsplash.com/photo-1722263147569-fa8873772867?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvbGFyc2hpcCUyMHN0dWRlbnQlMjBncmFkdWF0aW9ufGVufDF8fHx8MTc2NzQ4MjQxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        },
        {
          id: 4,
          title: 'Christian Evangelism Brings Spiritual Renewal',
          location: 'Kenya, Africa',
          date: '2023',
          description: 'Our evangelism initiatives reached over 5,000 individuals with spiritual guidance, helping them understand God\'s purpose and love for His children.',
          image: 'https://images.unsplash.com/photo-1717201611909-0f75ee9b0b1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBwcmF5ZXIlMjBjb21tdW5pdHklMjBhZnJpY2F8ZW58MXx8fHwxNzY3NDgyNDE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        },
        {
          id: 5,
          title: 'Supporting Churches Strengthens Ministry Impact',
          location: 'Various Locations',
          date: '2023',
          description: 'Through financial support to 12 churches and ministries, we enhanced biblical teachings and outreach programs, helping win souls for God\'s kingdom.',
          image: 'https://images.unsplash.com/photo-1684640867930-eb616dc4ca64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RpYW4lMjBtaW5pc3RyeSUyMG91dHJlYWNofGVufDF8fHx8MTc2NzQ4MjQxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        },
        {
          id: 6,
          title: 'Comprehensive Care Across Communities',
          location: 'Africa and USA',
          date: '2024',
          description: 'Working across multiple continents, we expanded our programs to provide healthcare, housing support, education, and spiritual guidance to those in need.',
          image: 'https://images.unsplash.com/photo-1761666507437-9fb5a6ef7b0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXJzJTIwaGVscGluZ3xlbnwxfHx8fDE3NjcxODE3NTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
        },
      ];
      setStories(defaultStories);
      localStorage.setItem('impactStories', JSON.stringify(defaultStories));
    }
  }, []);

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1761666507437-9fb5a6ef7b0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXJzJTIwaGVscGluZ3xlbnwxfHx8fDE3NjcxODE3NTd8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl mb-4">Our Impact</h1>
          <p className="text-xl text-white">
            Real stories of transformation from the communities we serve across Africa and the United States.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-2">6,500+</div>
              <div className="text-xl">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2">Multiple</div>
              <div className="text-xl">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2">5</div>
              <div className="text-xl">Active Programs</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2">25+</div>
              <div className="text-xl">Partner Organizations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12 text-center text-gray-900">Stories of Change</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {stories.map((story) => (
              <div key={story.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{story.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{story.date}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl mb-3 text-gray-900">{story.title}</h3>
                  <p className="text-gray-600">{story.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12 text-center text-gray-900">What People Say</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-xl text-gray-700 italic mb-4">
                "The Prince Goodwill Foundation gave me hope when I had nowhere to turn. The food and shelter support helped me get back on my feet."
              </p>
              <div className="text-gray-600">— Sarah, Houston, Texas</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-xl text-gray-700 italic mb-4">
                "After losing my husband, I struggled to afford healthcare. This foundation's medical assistance program was a blessing I'll never forget."
              </p>
              <div className="text-gray-600">— Jennifer, New York, New York</div>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}