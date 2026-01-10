import React, { useState, useEffect } from 'react';
import PublicLayout from './PublicLayout';
import { Calendar, Tag } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

const getDefaultNews = () => [
  {
    id: 2,
    title: 'Reaching 12,000 Lives: A Foundation Milestone',
    date: '2024-11-28',
    category: 'Impact',
    excerpt: 'This month, we celebrated a major milestone as our programs reached their 12,000th beneficiary, marking years of dedicated service to the poor, homeless, and widows in America.',
    image: 'https://images.unsplash.com/photo-1761666507437-9fb5a6ef7b0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXJzJTIwaGVscGluZ3xlbnwxfHx8fDE3NjcxODE3NTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    title: 'New Healthcare Partnerships Serve Widows in New York',
    date: '2024-11-10',
    category: 'Healthcare',
    excerpt: 'Through strategic partnerships with local health organizations, we are expanding medical assistance to serve 500 additional widows and elderly individuals in New York City.',
    image: 'https://images.unsplash.com/photo-1662470186780-b5e97bb715e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoY2FyZSUyMGNsaW5pY3xlbnwxfHx8fDE3NjcyMTIyODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 4,
    title: 'Emergency Shelter Program Helps 300 Families',
    date: '2024-10-22',
    category: 'Shelter',
    excerpt: 'Our emergency shelter initiative successfully provided safe housing to 300 homeless families across multiple US cities, offering hope and stability during difficult times.',
    image: 'https://images.unsplash.com/photo-1716651333712-d78aff70f4d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbGVzcyUyMHNoZWx0ZXIlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjcyOTgwNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 5,
    title: 'Prince Uche Addresses Community Leaders on Homelessness',
    date: '2024-10-05',
    category: 'Events',
    excerpt: 'Foundation founder Prince Uche spoke at a national conference, sharing insights on compassionate approaches to serving the homeless and addressing poverty in America.',
    image: 'https://images.unsplash.com/photo-1640536099247-9ff490b0c297?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbGVzcyUyMGZvb2QlMjBzaGVsdGVyfGVufDF8fHx8MTc2NzI5ODA2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export default function NewsPage() {
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    // Fetch news from server
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-b2211b85/news`,
          {
            headers: {
              'Authorization': `Bearer ${publicAnonKey}`,
            },
          }
        );
        
        if (response.ok) {
          const data = await response.json();
          
          // If no news exists in Supabase, initialize with defaults
          if (!data.news || data.news.length === 0) {
            const defaultNews = getDefaultNews();
            setNews(defaultNews);
            
            // Save defaults to Supabase
            await fetch(
              `https://${projectId}.supabase.co/functions/v1/make-server-b2211b85/news`,
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${publicAnonKey}`,
                },
                body: JSON.stringify({ news: defaultNews }),
              }
            );
          } else {
            setNews(data.news);
          }
        } else {
          console.error('Failed to fetch news:', await response.text());
          // Fallback to default news
          setNews(getDefaultNews());
        }
      } catch (error) {
        console.error('Error fetching news:', error);
        // Fallback to default news
        setNews(getDefaultNews());
      }
    };

    fetchNews();
  }, []);

  const categories = ['All', ...new Set(news.map(n => n.category))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredNews = selectedCategory === 'All' 
    ? news 
    : news.filter(n => n.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

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
          <h1 className="text-5xl mb-4">News & Updates</h1>
          <p className="text-xl text-white">
            Stay informed about our latest programs, achievements, and community impact stories.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{formatDate(article.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag size={16} />
                      <span>{article.category}</span>
                    </div>
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">{article.title}</h3>
                  <p className="text-gray-600">{article.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-4">Stay Connected</h2>
          <p className="text-xl mb-8">
            Subscribe to our newsletter to receive the latest updates about our programs and impact.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900"
            />
            <button
              type="submit"
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </PublicLayout>
  );
}