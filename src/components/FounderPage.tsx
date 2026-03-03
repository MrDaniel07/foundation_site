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
              <h1 className="text-5xl mb-2 text-gray-900">Prince Uche Nwakanma</h1>
              <p className="text-2xl text-blue-600 mb-6">Founder & Chief Executive Officer, Prince Goodwill Foundation</p>
              <p className="text-lg text-gray-700 mb-4">
                Prince Uche Nwakanma is a distinguished legal professional, entrepreneur, philanthropist, and humanitarian whose career reflects a lifelong commitment to excellence, service, and transformational leadership. As the founder of the Prince Goodwill Foundation, Prince Uche Nwakanma has dedicated his post-legal career to advancing sustainable humanitarian initiatives across Nigeria and the United States.
              </p>
              <p className="text-gray-700">
                Recognized nationally for his legal accomplishments and widely respected for his leadership in business and philanthropy, Prince Uche Nwakanma continues to shape communities through structured giving, strategic outreach, and faith-driven service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Early Life and Academic Foundation */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-gray-900">Early Life and Academic Foundation</h2>
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed">
              Prince Uche Nwakanma began his academic journey with a strong interest in the sciences, earning a Bachelor of Science degree in Biology from the University of Houston–Downtown in 1999. Initially inspired by the medical profession, he developed a deep appreciation for analytical reasoning and disciplined study.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              However, his passion for justice, advocacy, and social equity ultimately redirected his path toward the legal profession. Prince Uche Nwakanma enrolled at the Thurgood Marshall School of Law in 1999, successfully transitioning from the sciences to law with academic distinction. He earned his Juris Doctor degree in 2002, laying the foundation for what would become a highly accomplished legal career.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Career and Professional Distinction */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-gray-900">Legal Career and Professional Distinction</h2>
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed">
              In 2003, Prince Uche Nwakanma was licensed to practice law by the Supreme Court of Kansas and the Federal Court for the Southern District of Texas. He later gained admission to the United States Court of Appeals for the Fifth Circuit and several other federal courts throughout the United States.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Over the course of his legal career, Prince Uche Nwakanma represented more than 6,000 clients across various areas of federal law. His work earned him a reputation for diligence, integrity, and strategic excellence. Through consistent professional performance and ethical practice, he built a respected presence within the legal community.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              His contributions were formally recognized when Prince Uche Nwakanma was voted among the Top 50 Black Lawyers in the United States — a distinction reflecting both legal achievement and community influence.
            </p>
          </div>
        </div>
      </section>

      {/* Business Leadership and National Recognition */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-gray-900">Business Leadership and National Recognition</h2>
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed">
              Beyond law, Prince Uche Nwakanma expanded into entrepreneurship, founding and managing multiple multi-million-dollar enterprises in the United States. His leadership in business attracted national attention and led to his appointment as a member of the President's Business Advisory Council for Texas during the administration of President George W. Bush.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              This appointment was publicly reported and further solidified Prince Uche Nwakanma's standing as a respected business and civic leader. He and his wife were also invited to attend Presidential Dinners at the White House under both President George W. Bush and President Barack Obama — an honor reflecting national acknowledgment of professional achievement.
            </p>
          </div>
        </div>
      </section>

      {/* Vision for Service and Establishment of Foundation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-gray-900">Vision for Service and the Establishment of Prince Goodwill Foundation</h2>
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed">
              While his legal and business careers were marked by measurable success, Prince Uche Nwakanma felt a deeper calling toward structured humanitarian service. Motivated by faith, gratitude, and a desire to address systemic challenges affecting vulnerable communities, he established the Prince Goodwill Foundation.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed font-semibold">
              The founding vision was clear: to create sustainable, accountable programs that empower communities rather than foster dependency.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Prince Uche Nwakanma designed the foundation to focus on four critical pillars:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
              <li>Healthcare outreach</li>
              <li>Shelter and housing assistance</li>
              <li>Educational scholarships</li>
              <li>Faith-based community engagement</li>
            </ul>
            <p className="text-gray-700 text-lg leading-relaxed">
              Through these initiatives, Prince Uche Nwakanma sought to combine strategic leadership with compassionate action — ensuring that humanitarian efforts produce long-term, measurable results.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-12">
            <a href="/programs" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors inline-block">
              Explore Our Programs
            </a>
            <a href="/impact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors inline-block">
              See Our Community Impact
            </a>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-gray-900">Leadership Philosophy</h2>
          <div className="bg-blue-50 p-8 rounded-lg mb-8">
            <blockquote className="text-xl text-gray-700 italic mb-4">
              "True development isn't about what we give to communities — it's about empowering them to unlock their own potential. Sustainable change happens when we listen, collaborate, and support local solutions to local challenges."
            </blockquote>
            <p className="text-gray-600 text-right">— Prince Uche Nwakanma</p>
          </div>
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed">
              Prince Uche Nwakanma's leadership philosophy centers on empowerment, partnership, and sustainability.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              This philosophy guides the structure of the Prince Goodwill Foundation's initiatives. Rather than delivering temporary relief alone, Prince Uche Nwakanma emphasizes building capacity within communities — strengthening systems that continue functioning long after direct intervention concludes.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              He believes that responsible philanthropy must integrate transparency, measurable outcomes, and community participation.
            </p>
          </div>
        </div>
      </section>

      {/* Humanitarian Commitment and Impact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-gray-900">Humanitarian Commitment and Community Impact</h2>
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed">
              Under the leadership of Prince Uche Nwakanma, the Prince Goodwill Foundation has impacted tens of thousands of individuals through healthcare missions, scholarship funding, housing assistance, and faith-centered outreach.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              The organization has extended its reach across Nigeria and into collaborative initiatives within the United States, reflecting Prince Uche Nwakanma's commitment to cross-border humanitarian engagement.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Through medical missions, vulnerable populations have received access to essential healthcare services. Through scholarship initiatives, students have been empowered to pursue academic advancement. Through housing assistance programs, families have regained stability and dignity.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Each initiative reflects Prince Uche Nwakanma's belief that structured leadership and compassionate service can produce generational transformation.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-12">
            <a href="/impact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors inline-block">
              Learn More About Our Impact
            </a>
          </div>
        </div>
      </section>

      {/* Faith, Family, and Personal Commitment */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-gray-900">Faith, Family, and Personal Commitment</h2>
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed">
              Prince Uche Nwakanma is a devoted Christian whose life is guided by faith, gratitude, and service to humanity. He attributes his professional opportunities and renewed sense of mission to divine grace and remains deeply committed to evangelism and charitable outreach.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Married and blessed with three daughters, Prince Uche Nwakanma values family as a cornerstone of both personal and community stability. His family actively supports his philanthropic mission, reinforcing a shared commitment to faith-driven service and responsible leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Continuing the Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-gray-900">Continuing the Mission</h2>
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed">
              Today, Prince Uche Nwakanma continues to provide strategic oversight and visionary leadership to the Prince Goodwill Foundation. His work bridges professional excellence, entrepreneurial experience, and humanitarian dedication.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Through disciplined governance, community partnerships, and measurable program outcomes, Prince Uche Nwakanma remains committed to empowering communities, strengthening families, and expanding access to opportunity.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed font-semibold">
              The mission continues — guided by purpose, grounded in faith, and executed through structured service.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-12">
            <a href="/programs" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors inline-block">
              Discover Our Programs
            </a>
            <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors inline-block">
              Partner With Prince Goodwill Foundation
            </a>
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
                className={`grid md:grid-cols-2 gap-8 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'
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

      {/* Education Summary */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-center text-gray-900">Education & Credentials</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl mb-2 text-gray-900 font-semibold">Juris Doctor (J.D.)</h3>
              <p className="text-blue-600 mb-2">Thurgood Marshall School of Law</p>
              <p className="text-gray-600">1999 - 2002</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl mb-2 text-gray-900 font-semibold">Bachelor of Science in Biology</h3>
              <p className="text-blue-600 mb-2">University of Houston–Downtown</p>
              <p className="text-gray-600">Graduated 1999</p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-gray-700 text-center">
              For more biographical information, visit{' '}
              <a
                href="https://www.360naijahits.com.ng/news/the-unprecedented-story-of-attorney-prince-nwakanma/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 underline transition-colors font-semibold"
              >
                360 Naija Hits
              </a>
            </p>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}