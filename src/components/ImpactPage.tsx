import React from 'react';
import PublicLayout from './PublicLayout';

export default function ImpactPage() {

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
          <h1 className="text-5xl font-bold mb-4">Our Impact</h1>
          <p className="text-xl text-white">
            Measurable Results. Real Lives Transformed. Lasting Change.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 mb-6">
            At Prince Goodwill Foundation, impact is not measured by intention alone; it is measured by lives changed, communities strengthened, and sustainable systems built for the future.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            From healthcare missions in rural Africa to housing stabilization in major U.S. cities, our work reflects a structured, accountable approach to nonprofit leadership. Every program is designed with measurable outcomes, transparent reporting, and community collaboration at its core.
          </p>
          <p className="text-lg text-gray-700">
            To understand how we deliver these results, visit our <a href="/programs" className="text-blue-600 hover:underline">Programs Page</a>.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Impact at a Glance</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-xl">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">Multiple</div>
              <div className="text-xl">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">5</div>
              <div className="text-xl">Active Core Programs</div>
            </div>
          </div>
          <p className="text-center text-lg mt-8">
            These numbers represent more than statistics; they represent renewed hope, restored dignity, and expanded opportunity.
          </p>
        </div>
      </section>

      {/* Healthcare Transformation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-2 text-gray-900">Healthcare Transformation</h2>
          <h3 className="text-2xl font-semibold text-blue-600 mb-6">Restoring Health, Restoring Dignity</h3>

          <p className="text-lg text-gray-700 mb-6">
            Access to healthcare remains a major barrier for vulnerable populations. In 2024, our medical mission in Nigeria provided free medical care and essential supplies to individuals, including homeless and underserved families in rural communities.
          </p>

          <p className="text-lg text-gray-700 mb-8">
            Through screenings, medication distribution, and preventative care education, our healthcare initiatives reduced untreated illnesses and increased awareness of chronic conditions.
          </p>

          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Community Outcome Highlights:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Early detection of hypertension and diabetes</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Distribution of essential medications to low-income patients</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Immediate treatment for acute conditions</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Improved health literacy among community members</span></li>
            </ul>
          </div>

          <p className="text-gray-700 mb-4">
            Healthcare access is often the first step toward long-term economic and social stability. Our annual healthcare programs continue to expand through strategic partnerships and responsible stewardship.
          </p>
          <p className="text-gray-700">
            Learn more about our healthcare initiatives on the <a href="/programs" className="text-blue-600 hover:underline">Programs Page</a>.
          </p>
        </div>
      </section>

      {/* Shelter Assistance */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-2 text-gray-900">Shelter Assistance</h2>
          <h3 className="text-2xl font-semibold text-blue-600 mb-6">Stability for Families in Crisis</h3>

          <p className="text-lg text-gray-700 mb-6">
            Our Shelter Assistance program supported 150 families in 2024 through direct financial support and resource coordination.
          </p>

          <p className="text-lg text-gray-700 mb-8">
            Housing insecurity affects every aspect of life; employment, education, and health. By helping families secure stable living conditions, Prince Goodwill Foundation promotes long-term independence rather than temporary relief.
          </p>

          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Housing Impact Highlights:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>800+ families supported to date</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Increased housing stability for vulnerable households</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Improved school continuity for children</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Strengthened financial planning and independence</span></li>
            </ul>
          </div>

          <p className="text-gray-700 mb-4">
            Families who once faced eviction or homelessness now have a renewed path forward.
          </p>
          <p className="text-gray-700">
            For a full overview of our housing model, visit our <a href="/programs" className="text-blue-600 hover:underline">Programs Page</a>.
          </p>
        </div>
      </section>

      {/* Education & Scholarship Advancement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-2 text-gray-900">Education & Scholarship Advancement</h2>
          <h3 className="text-2xl font-semibold text-blue-600 mb-6">Unlocking Academic Potential</h3>

          <p className="text-lg text-gray-700 mb-6">
            Education is a generational investment. Prince Goodwill Foundation provided tuition assistance to 150 deserving students through our initiatives.
          </p>

          <p className="text-lg text-gray-700 mb-8">
            Scholarship recipients demonstrate academic promise and financial need. By reducing tuition burdens, we allow students to focus on learning, career preparation, and community contribution.
          </p>

          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Education Impact Highlights:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Increased college retention rates among supported students</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Reduced student debt burden</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Expanded access to professional careers</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Stronger community leadership pipeline</span></li>
            </ul>
          </div>

          <p className="text-gray-700">
            Through education, we empower individuals to become catalysts for change in their own communities.
          </p>
        </div>
      </section>

      {/* Faith-Based Community Strengthening */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-2 text-gray-900">Faith-Based Community Strengthening</h2>
          <h3 className="text-2xl font-semibold text-blue-600 mb-6">Encouraging Spiritual Renewal and Ethical Leadership</h3>

          <p className="text-lg text-gray-700 mb-6">
            In addition to healthcare, housing, and education, Prince Goodwill Foundation supports faith-based initiatives that encourage moral development and spiritual growth.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            In 2023, our evangelism initiatives reached over 1,000 individuals in Nigeria and other regions. We also provided structured support to 12 churches and ministries, enhancing community outreach and leadership development.
          </p>

          <p className="text-gray-700">
            Faith-based engagement complements our humanitarian work by fostering hope, resilience, and ethical community leadership.
          </p>
        </div>
      </section>

      {/* Stories of Transformation / Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Stories of Transformation</h2>
          <p className="text-lg text-gray-700 text-center mb-12">Behind every metric is a personal story.</p>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-xl text-gray-700 italic mb-4">
                "The Prince Goodwill Foundation gave me hope when I had nowhere to turn. The food and shelter support helped me get back on my feet."
              </p>
              <div className="text-gray-600 font-semibold">— Sarah James</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-xl text-gray-700 italic mb-4">
                "After losing my husband, I struggled to afford healthcare. This foundation's medical assistance program was a blessing I'll never forget."
              </p>
              <div className="text-gray-600 font-semibold">— jennifer</div>
            </div>
          </div>

          <p className="text-gray-700 text-center mt-12">
            These testimonials reflect the heart of our mission: restoring dignity while empowering individuals to rebuild their lives.
          </p>
        </div>
      </section>

      {/* Multi-Continent Reach */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Multi-Continent Reach, Unified Mission</h2>

          <p className="text-lg text-gray-700 mb-6">
            Prince Goodwill Foundation advances sustainable transformation across Africa with support and engagement from the United States.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            Our work is strengthened through partnerships with local leaders, healthcare professionals, educators, and churches.
          </p>
        </div>
      </section>

      {/* Accountability and Transparency */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Accountability and Transparency</h2>

          <p className="text-lg text-gray-700 mb-6">
            Nonprofit credibility is built on responsible governance. Our impact model includes:
          </p>

          <ul className="space-y-2 text-gray-700 mb-8">
            <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Clear program metrics and annual reporting</span></li>
            <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Partner accountability structures</span></li>
            <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Community feedback mechanisms</span></li>
            <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Continuous performance evaluation</span></li>
          </ul>

          <p className="text-gray-700 mb-4">
            This commitment to transparency builds trust among donors, partners, and beneficiaries.
          </p>
          <p className="text-gray-700">
            To learn more about the vision guiding this structured approach, visit our <a href="/founder" className="text-blue-600 hover:underline">Founder Page</a>.
          </p>
        </div>
      </section>

      {/* Comprehensive Community Transformation */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Comprehensive Community Transformation</h2>

          <p className="text-lg text-gray-700 mb-6">
            Healthcare, housing, education, and faith initiatives are interconnected. When families receive medical care, secure stable housing, and access educational opportunity, entire communities are strengthened.
          </p>

          <p className="text-lg text-gray-700 mb-6">Our integrated model produces:</p>
          <ul className="space-y-2 text-gray-700 mb-8">
            <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Healthier families</span></li>
            <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Stronger educational outcomes</span></li>
            <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Increased economic mobility</span></li>
            <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Renewed spiritual and community engagement</span></li>
          </ul>

          <p className="text-gray-700">
            By addressing multiple dimensions of vulnerability simultaneously, Prince Goodwill Foundation fosters long-term resilience rather than short-term relief.
          </p>
        </div>
      </section>

      {/* Looking Ahead / Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Looking Ahead</h2>

          <p className="text-lg mb-6">
            As we expand into new regions and deepen partnerships in existing communities, our focus remains clear: measurable impact, sustainable solutions, and compassionate leadership.
          </p>

          <p className="text-lg mb-8">
            The journey of transformation continues; one family, one student, one community at a time.
          </p>

          <p className="text-lg mb-6">
            To explore how you can partner with us, visit our <a href="/contact" className="underline hover:text-gray-100">Get Involved Page</a> or <a href="/contact" className="underline hover:text-gray-100">Contact Page</a>.
          </p>
        </div>
      </section>
    </PublicLayout>
  );
}