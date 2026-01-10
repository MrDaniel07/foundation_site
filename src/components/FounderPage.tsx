import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PublicLayout from './PublicLayout';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import founderImage from 'figma:asset/92e40b2871d1e969f0c8f4d7c135b049c9690ef6.png';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export default function FounderPage() {
  const [gallery, setGallery] = useState<any[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and window resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Fetch gallery from server
    const fetchGallery = async () => {
      try {
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-b2211b85/gallery`,
          {
            headers: {
              'Authorization': `Bearer ${publicAnonKey}`,
            },
          }
        );
        
        if (response.ok) {
          const data = await response.json();
          setGallery(data.gallery || []);
        } else {
          console.error('Failed to fetch gallery:', await response.text());
          setGallery([]);
        }
      } catch (error) {
        console.error('Error fetching gallery:', error);
        setGallery([]);
      }
    };

    fetchGallery();
  }, []);

  // Auto-play slider every 5 seconds
  useEffect(() => {
    const imagesPerSlide = isMobile ? 1 : 2;
    if (gallery.length > imagesPerSlide && !isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [gallery.length, currentSlide, isMobile, isPaused]);

  const nextSlide = () => {
    setIsTransitioning(true);
    const increment = isMobile ? 1 : 2;
    setTimeout(() => {
      setCurrentSlide((prev) => 
        prev + increment >= gallery.length ? 0 : prev + increment
      );
      setIsTransitioning(false);
    }, 300);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    const decrement = isMobile ? 1 : 2;
    setTimeout(() => {
      setCurrentSlide((prev) => 
        prev - decrement < 0 ? Math.max(0, gallery.length - decrement) : prev - decrement
      );
      setIsTransitioning(false);
    }, 300);
  };

  // Get current images to display based on screen size
  const getCurrentImages = () => {
    if (gallery.length === 0) return [];
    if (isMobile) {
      // Mobile: show 1 image
      return [gallery[currentSlide]];
    } else {
      // Desktop: show 2 images
      if (gallery.length === 1) return [gallery[0]];
      return [gallery[currentSlide], gallery[currentSlide + 1] || gallery[0]];
    }
  };

  return (
    <PublicLayout>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Prince Uche Nwakanma - Founder | Prince Goodwill Foundation</title>
        <meta name="title" content="Prince Uche Nwakanma - Founder & CEO | Prince Goodwill Foundation" />
        <meta name="description" content="Learn about Prince Uche Nwakanma, respected attorney, entrepreneur, philanthropist, and humanitarian. Top 50 Black Lawyer in America, former member of President's Business Advisory Council, founder of Prince Goodwill Foundation." />
        <meta name="keywords" content="Prince Uche Nwakanma, Prince Nwakanma, attorney Prince Uche, Prince Goodwill Foundation founder, top black lawyers America, Thurgood Marshall School of Law, Houston attorney, Christian philanthropist, humanitarian leader, business advisory council" />
        <link rel="canonical" href="https://princegoodwillfoundation.org/founder" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://princegoodwillfoundation.org/founder" />
        <meta property="og:title" content="Prince Uche Nwakanma - Founder & CEO | Prince Goodwill Foundation" />
        <meta property="og:description" content="Respected attorney, entrepreneur, philanthropist, and humanitarian. Top 50 Black Lawyer in America and founder of Prince Goodwill Foundation dedicated to healthcare, education, and Christian evangelism." />
        <meta property="og:image" content={founderImage} />
        <meta property="profile:first_name" content="Prince Uche" />
        <meta property="profile:last_name" content="Nwakanma" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://princegoodwillfoundation.org/founder" />
        <meta property="twitter:title" content="Prince Uche Nwakanma - Founder & CEO | Prince Goodwill Foundation" />
        <meta property="twitter:description" content="Respected attorney, entrepreneur, philanthropist, and humanitarian. Top 50 Black Lawyer in America and founder of Prince Goodwill Foundation." />
        <meta property="twitter:image" content={founderImage} />
        
        {/* Structured Data - Person Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Prince Uche Nwakanma",
            "alternateName": ["Prince Nwakanma", "Attorney Prince Uche Nwakanma"],
            "url": "https://princegoodwillfoundation.org/founder",
            "image": founderImage,
            "jobTitle": "Founder & CEO",
            "worksFor": {
              "@type": "Organization",
              "name": "Prince Goodwill Foundation",
              "url": "https://princegoodwillfoundation.org"
            },
            "alumniOf": [
              {
                "@type": "EducationalOrganization",
                "name": "Thurgood Marshall School of Law",
                "degree": "Juris Doctor (J.D.)"
              },
              {
                "@type": "EducationalOrganization",
                "name": "University of Houston–Downtown",
                "degree": "Bachelor of Science in Biology"
              }
            ],
            "award": [
              "Top 50 Black Lawyers in the United States",
              "Member of President's Business Advisory Council for Texas"
            ],
            "description": "Respected legal professional, entrepreneur, philanthropist, and humanitarian. Former member of President's Business Advisory Council for Texas under President George W. Bush. Represented over 6,000 clients in federal law. Founder of Prince Goodwill Foundation dedicated to healthcare missions, education scholarships, housing support, and Christian evangelism.",
            "nationality": "American",
            "knowsAbout": ["Law", "Business Leadership", "Philanthropy", "Christian Evangelism", "Community Development", "Healthcare Missions", "Education"],
            "sameAs": [
              "https://www.360naijahits.com.ng/news/the-unprecedented-story-of-attorney-prince-nwakanma/"
            ]
          })}
        </script>
        
        {/* Structured Data - BreadcrumbList */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://princegoodwillfoundation.org/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Founder - Prince Uche Nwakanma",
                "item": "https://princegoodwillfoundation.org/founder"
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={founderImage}
                alt="Prince Uche"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h1 className="text-5xl mb-4 text-gray-900">Prince Uche Nwakanma</h1>
              <p className="text-2xl text-blue-600 mb-6">Founder & CEO</p>
              <p className="text-xl text-gray-700 mb-4">
                A respected legal professional, entrepreneur, philanthropist, and humanitarian based in the United States.
              </p>
              <p className="text-gray-600">
                Widely recognized for his contributions to the legal profession, business leadership, and charitable initiatives, Prince Uche Nwakanma has become a prominent ambassador of successful lawyers of African descent in the United States.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-gray-900">Biography</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              Prince Uche Nwakanma earned his Bachelor of Science degree in Biology from the University of Houston–Downtown in 1999. Although initially drawn to a career in medicine, his passion for justice and advocacy led him to pursue law. He attended the Thurgood Marshall School of Law from 1999 to 2002, where he distinguished himself academically, successfully transitioning from the sciences to legal studies with outstanding performance.
            </p>
            <p className="text-gray-700 mb-4">
              In 2003, Prince Uche Nwakanma was licensed to practice law by the Supreme Court of Kansas and the Federal Court for the Southern District of Texas. He later gained admission to practice before the United States Court of Appeals for the Fifth Circuit, as well as several other federal courts across the United States. Over the course of his legal career, Prince Uche Nwakanma represented more than 6,000 clients across multiple areas of federal law, earning a reputation for diligence, integrity, and professional excellence.
            </p>
            <p className="text-gray-700 mb-4">
              His work and influence did not go unnoticed. Prince Uche Nwakanma was voted among the Top 50 Black Lawyers in the United States, receiving several awards and recognitions for his contributions to the legal profession and the communities he served. Following his success in law, Prince Uche Nwakanma expanded into business, where he founded, owned, and managed multiple multi-million-dollar enterprises in the United States.
            </p>
            <p className="text-gray-700 mb-4">
              Prince Uche Nwakanma's leadership and business achievements attracted national recognition, leading to his appointment as a member of the President's Business Advisory Council for Texas during the administration of President George W. Bush. This appointment was publicly reported by The Wall Street Journal. He and his wife were also honored with invitations to attend Presidential Dinners at the White House, hosted by President George W. Bush and President Barack Obama.
            </p>
            <p className="text-gray-700">
              Beyond his professional accomplishments, Prince Uche Nwakanma is a devoted Christian and humanitarian whose life is guided by faith, gratitude, and service to others. He credits God's grace for the opportunities and renewed purpose that have shaped his journey. Motivated by a deep commitment to humanity, Prince Uche Nwakanma stepped away from active legal practice to focus on business leadership, philanthropy, and evangelism, dedicating his efforts to uplifting individuals and communities through charitable giving and service.
            </p>
            <p className="text-gray-700 mt-4">
              Prince Uche Nwakanma is married and blessed with three daughters. His family shares his commitment to faith and service, supporting his philanthropic mission to make a positive impact in communities around the world.
            </p>
            
            {/* External Biography Link */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-700">
                View more about Mr. Prince at{' '}
                <a 
                  href="https://www.360naijahits.com.ng/news/the-unprecedented-story-of-attorney-prince-nwakanma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline transition-colors"
                >
                  360 Naija Hits
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12 text-center text-gray-900">Gallery</h2>
          {gallery.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No gallery images yet. Add images through the admin panel.</p>
            </div>
          ) : (
            <div 
              className="relative"
              onMouseEnter={() => !isMobile && setIsPaused(true)}
              onMouseLeave={() => !isMobile && setIsPaused(false)}
              onTouchStart={() => isMobile && setIsPaused(true)}
              onTouchEnd={() => isMobile && setIsPaused(false)}
            >
              <div 
                className={`grid md:grid-cols-2 gap-8 transition-opacity duration-300 ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {getCurrentImages().map((image) => (
                  <div key={image.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                      src={image.image}
                      alt={image.title}
                      className="w-full h-80 object-contain bg-gray-100"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl mb-2 text-gray-900">{image.title}</h3>
                      <p className="text-gray-600">{image.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              {((isMobile && gallery.length > 1) || (!isMobile && gallery.length > 2)) && (
                <>
                  <button
                    className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors"
                    onClick={prevSlide}
                    aria-label="Previous"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors"
                    onClick={nextSlide}
                    aria-label="Next"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-center text-gray-900">Leadership Philosophy</h2>
          <div className="bg-blue-50 p-8 rounded-lg">
            <blockquote className="text-xl text-gray-700 italic mb-6">
              "True development isn't about what we give to communities—it's about empowering them to unlock their own potential. Sustainable change happens when we listen, collaborate, and support local solutions to local challenges."
            </blockquote>
            <p className="text-gray-600 text-right">— Prince Uche</p>
          </div>
          <div className="mt-8 prose prose-lg max-w-none">
            <p className="text-gray-700">
              Prince's leadership philosophy centers on three core principles: empowerment, partnership, and sustainability. He believes that lasting change requires building capacity within communities, working alongside local leaders, and creating systems that can thrive independently long after external support ends.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-center text-gray-900">Education</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl mb-2 text-gray-900">Juris Doctor (J.D.)</h3>
              <p className="text-blue-600 mb-2">Thurgood Marshall School of Law</p>
              <p className="text-gray-600">1999 - 2002</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl mb-2 text-gray-900">Bachelor of Science in Biology</h3>
              <p className="text-blue-600 mb-2">University of Houston–Downtown</p>
              <p className="text-gray-600">Graduated 1999</p>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}