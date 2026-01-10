import React, { useState, useEffect } from 'react';
import PublicLayout from './PublicLayout';
import { Heart, Home, GraduationCap, Cross, Church, Users } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export default function ProgramsPage() {
  const [programs, setPrograms] = useState<any[]>([]);

  // Map icon names to components
  const iconMap: { [key: string]: any } = {
    Heart,
    Home,
    GraduationCap,
    Cross,
    Church,
    Users,
  };

  useEffect(() => {
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
          
          // If no programs exist in Supabase, initialize with defaults
          if (!data.programs || data.programs.length === 0) {
            const defaultPrograms = getDefaultPrograms();
            setPrograms(defaultPrograms);
            
            // Save defaults to Supabase
            await fetch(
              `https://${projectId}.supabase.co/functions/v1/make-server-b2211b85/programs`,
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${publicAnonKey}`,
                },
                body: JSON.stringify({ programs: defaultPrograms }),
              }
            );
          } else {
            setPrograms(data.programs);
          }
        } else {
          console.error('Failed to fetch programs:', await response.text());
          // Fallback to default programs
          setPrograms(getDefaultPrograms());
        }
      } catch (error) {
        console.error('Error fetching programs:', error);
        // Fallback to default programs
        setPrograms(getDefaultPrograms());
      }
    };

    fetchPrograms();
  }, []);

  const getDefaultPrograms = () => {
    return [
      {
        id: 1,
        title: 'Healthcare Support',
        category: 'Health', 
        description: 'Providing free medical missions and essential medical supplies for vulnerable populations including the homeless in Africa, ensuring access to critical healthcare services.',
        image: 'https://images.unsplash.com/photo-1627555704146-5c4ffa8149f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbWlzc2lvbiUyMGFmcmljYSUyMGNsaW5pY3xlbnwxfHx8fDE3Njc0ODE1MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        impact: '3,500+ patients treated annually',
        iconName: 'Heart',
      },
      {
        id: 2,
        title: 'Shelter Assistance',
        category: 'Housing',
        description: 'Supporting individuals with housing needs through cash incentives and comprehensive resources to help them find stable, safe living accommodations and rebuild their lives.',
        image: 'https://images.unsplash.com/photo-1758755791011-0720d654b8d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzaW5nJTIwYXNzaXN0YW5jZSUyMHN1cHBvcnR0ZW58MXx8fHwxNjc0ODE1MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        impact: '800+ families housed',
        iconName: 'Home',
      },
      {
        id: 3,
        title: 'Scholarships & Tuition Support',
        category: 'Education',
        description: 'Providing financial support to qualified individuals who need assistance with tuition and education expenses, enabling them to pursue their academic dreams and build better futures.',
        image: 'https://images.unsplash.com/photo-1604336480714-ed7fa506014e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBzY2hvbGFyc2hpcCUyMHN0dWRlbnR8ZW58MXx8fHwxNjc0ODE1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        impact: '1,200+ students supported',
        iconName: 'GraduationCap',
      },
      {
        id: 4,
        title: 'Christian Evangelism',
        category: 'Faith',
        description: 'Sponsoring Christian evangelism initiatives and providing spiritual guidance to encourage people to know our Creator and understand His purpose and love for His children.',
        image: 'https://images.unsplash.com/photo-1714381636560-47bca37b5054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RpYW4lMjB3b3JzaGlwJTIwY2h1cmNofGVufDF8fHx8MTY3NDgxNTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        impact: '50+ evangelism events supported',
        iconName: 'Cross',
      },
      {
        id: 5,
        title: 'Church & Ministry Support',
        category: 'Faith',
        description: 'Providing financial support to churches and religious organizations to enhance biblical teachings, strengthen ministry outreach, and win souls for God\'s kingdom.',
        image: 'https://images.unsplash.com/photo-1760319726429-fcda77d3cb05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb25ncmVnYXRpb24lMjBjb21tdW5pdHl8ZW58MXx8fHwxNjc0ODE1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        impact: '25+ churches and ministries supported',
        iconName: 'Church',
      },
      {
        id: 6,
        title: 'Pastoral Ministry Support',
        category: 'Faith',
        description: 'Providing financial incentives to clergy members and pastoral leaders to strengthen their ministries, support gospel advancement, and enable effective spiritual leadership in their communities.',
        image: 'https://images.unsplash.com/photo-1623081553676-8b658405761a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0b3IlMjBwcmVhY2hpbmclMjBtaW5pc3RyeXxlbnwxfHx8fDE3Njc2NTUzNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        impact: '40+ pastoral leaders supported',
        iconName: 'Users',
      },
    ];
  };

  const categories = ['All', ...new Set(programs.map(p => p.category))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPrograms = selectedCategory === 'All' 
    ? programs 
    : programs.filter(p => p.category === selectedCategory);

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
          <h1 className="text-5xl mb-4">Our Programs</h1>
          <p className="text-xl text-white">
            Supporting healthcare, housing, education, and faith-based initiatives to transform lives and communities.
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

      {/* Programs Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => {
              const IconComponent = program.iconName ? iconMap[program.iconName] : null;
              return (
                <div key={program.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      {IconComponent && <IconComponent className="text-blue-600" size={24} />}
                      <span className="text-sm text-blue-600">{program.category}</span>
                    </div>
                    <h3 className="text-2xl mb-3 text-gray-900">{program.title}</h3>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <div className="text-sm text-gray-500 border-t pt-4">
                      <strong>Impact:</strong> {program.impact}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}