import React from 'react';
import PublicLayout from './PublicLayout';

export default function ProgramsPage() {
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
          <h1 className="text-5xl font-bold mb-4">Our Programs</h1>
          <p className="text-xl text-white">
            Advancing Healthcare, Housing, and Education for Sustainable Community Transformation
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 mb-4">
            At Prince Goodwill Foundation, our programs are designed to create measurable, lasting change in vulnerable communities across Nigeria while engaging partners and supporters in the United States.
          </p>
          <p className="text-lg text-gray-700">
            Each initiative is built around sustainability, accountability, and real-world outcomes; ensuring that every intervention strengthens individuals, families, and communities for the future.
          </p>
        </div>
      </section>

      {/* Healthcare Support */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-2 text-gray-900">Healthcare Support</h2>
          <h3 className="text-2xl font-semibold text-blue-600 mb-6">Expanding Access to Essential Medical Care</h3>

          <p className="text-lg text-gray-700 mb-6">
            Access to quality healthcare remains one of the most urgent challenges facing underserved communities. Through its Healthcare Support initiatives, Prince Goodwill Foundation delivers medical outreach programs, supplies essential medications, and supports vulnerable populations; including the homeless and economically disadvantaged families.
          </p>

          <p className="text-lg text-gray-700 mb-8">
            Our healthcare programs are designed to address immediate needs while also strengthening local healthcare capacity.
          </p>

          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4">What We Provide</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Free medical missions in underserved communities</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Distribution of essential medications and medical supplies</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Preventative care screenings</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Community health education initiatives</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Support services for vulnerable and homeless populations</span></li>
            </ul>
            <p className="text-gray-700 mt-4">Each year, the Foundation facilitates care for 1,500+ patients, offering services that many recipients would otherwise be unable to access.</p>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Real-World Outcomes</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Reduced untreated illnesses in participating communities</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Early detection of chronic conditions through screening programs</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Improved access to medications for low-income families</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Increased health awareness through education campaigns</span></li>
            </ul>
          </div>

          <p className="text-gray-700 mb-4">
            Rather than temporary intervention alone, our healthcare model promotes continuity of care by collaborating with local healthcare professionals and community leaders.
          </p>
          <p className="text-gray-700">
            To understand the measurable reach of our healthcare missions, visit our <a href="/impact" className="text-blue-600 hover:underline">Impact Page</a>.
          </p>
        </div>
      </section>

      {/* Shelter Assistance */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-2 text-gray-900">Shelter Assistance</h2>
          <h3 className="text-2xl font-semibold text-blue-600 mb-6">Restoring Stability Through Housing Support</h3>

          <p className="text-lg text-gray-700 mb-6">
            Housing stability is foundational to economic mobility, mental wellness, and family security. Without safe shelter, families face ongoing barriers to employment, education, and healthcare access.
          </p>

          <p className="text-lg text-gray-700 mb-8">
            Prince Goodwill Foundation addresses housing insecurity through direct support and structured assistance programs aimed at helping individuals and families secure stable living accommodations.
          </p>

          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4">What We Provide</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Financial assistance for housing stabilization</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Emergency shelter support</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Housing transition support for vulnerable families</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Resource coordination for long-term housing solutions</span></li>
            </ul>
            <p className="text-gray-700 mt-4">To date, the Foundation has supported 800+ families in securing safe and stable housing.</p>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Real-World Outcomes</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Families transition from unstable living conditions to permanent housing</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Reduced risk of homelessness among vulnerable populations</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Improved educational continuity for children in supported households</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Enhanced economic stability for beneficiaries</span></li>
            </ul>
          </div>

          <p className="text-gray-700 mb-4">
            Shelter Assistance goes beyond short-term relief. By addressing the root causes of housing instability and working alongside community partners, the Foundation promotes long-term independence and dignity.
          </p>
          <p className="text-gray-700">
            You can explore detailed stories and housing impact data on our <a href="/impact" className="text-blue-600 hover:underline">Impact Page</a>.
          </p>
        </div>
      </section>

      {/* Tuition Assistance Support */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-2 text-gray-900">Tuition Assistance Support</h2>
          <h3 className="text-2xl font-semibold text-blue-600 mb-6">Empowering Futures Through Education</h3>

          <p className="text-lg text-gray-700 mb-6">
            Education is one of the most powerful drivers of generational transformation. Recognizing this, Prince Goodwill Foundation invests in students who demonstrate promise but face financial barriers to academic advancement.
          </p>

          <p className="text-lg text-gray-700 mb-8">
            Through tuition assistance programs, the Foundation enables qualified individuals to pursue higher education, vocational training, and skill development opportunities.
          </p>

          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4">What We Provide</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Tuition assistance for eligible students</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Financial support for educational expenses</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Mentorship and encouragement for long-term success</span></li>
            </ul>
            <p className="text-gray-700 mt-4">To date, the Foundation has supported 500+ students in achieving their educational goals.</p>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Real-World Outcomes</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Increased access to higher education</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Reduced student financial burden</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Expanded career opportunities for tuition assistance recipients</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Long-term economic mobility for beneficiaries and their families</span></li>
            </ul>
          </div>

          <p className="text-gray-700 mb-4">
            Tuition assistance recipients are selected based on merit, need, and demonstrated commitment to community development. By investing in education, the Foundation strengthens not only individuals but the broader communities they serve.
          </p>
          <p className="text-gray-700">
            Learn more about how our education initiatives are transforming lives on our <a href="/impact" className="text-blue-600 hover:underline">Impact Page</a>.
          </p>
        </div>
      </section>

      {/* Faith-Based Outreach */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Faith-Based Outreach</h2>
          <h3 className="text-2xl font-semibold text-blue-600 mb-6">Supporting Spiritual Growth</h3>

          <p className="text-lg text-gray-700 mb-6">
            While healthcare, housing, and education remain central pillars, Prince Goodwill Foundation also supports faith-based initiatives that encourage spiritual growth and moral development.
          </p>

          <p className="text-lg text-gray-700 mb-6">These include:</p>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Christian evangelism outreach programs</span></li>
            <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Support for churches and ministry organizations</span></li>
            <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Pastoral leadership assistance</span></li>
          </ul>

          <p className="text-gray-700">
            Faith-based initiatives complement our humanitarian programs by fostering hope, resilience, and ethical leadership within communities.
          </p>
        </div>
      </section>

      {/* Structured Approach */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">A Structured Approach to Sustainable Impact</h2>

          <p className="text-lg text-gray-700 mb-8">
            Under the leadership of our founder, the Foundation was intentionally designed to avoid dependency-based models. Instead, each program emphasizes:
          </p>

          <ul className="space-y-2 text-gray-700 mb-8">
            <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Community collaboration</span></li>
            <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Transparent resource allocation</span></li>
            <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Measurable performance outcomes</span></li>
            <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Long-term sustainability</span></li>
          </ul>

          <p className="text-gray-700 mb-4">
            This structured approach ensures that every dollar invested produces tangible, lasting results.
          </p>
          <p className="text-gray-700">
            To learn more about the vision behind these initiatives, visit our <a href="/founder" className="text-blue-600 hover:underline">Founder Page</a>.
          </p>
        </div>
      </section>

      {/* How Programs Work Together */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">How Our Programs Work Together</h2>

          <p className="text-lg text-gray-700 mb-6">
            Healthcare, housing, and education are interconnected. A child struggling with illness cannot excel in school. A family without housing stability cannot fully participate in economic opportunity. A student without financial support may never reach their academic potential.
          </p>

          <p className="text-lg text-gray-700 mb-8">
            By addressing these areas simultaneously, Prince Goodwill Foundation creates a holistic ecosystem of support.
          </p>

          <p className="text-lg text-gray-700 mb-4">Our integrated model:</p>
          <ul className="space-y-2 text-gray-700 mb-8">
            <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Stabilizes families through housing</span></li>
            <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Protects health through medical outreach</span></li>
            <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Expands opportunity through education</span></li>
            <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Encourages spiritual growth and community cohesion</span></li>
          </ul>

          <p className="text-gray-700">
            Together, these programs empower individuals to move from vulnerability to stability; and from stability to leadership.
          </p>
        </div>
      </section>

      {/* Measuring Success */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Measuring Success</h2>

          <p className="text-lg text-gray-700 mb-6">We evaluate program effectiveness through:</p>
          <ul className="space-y-2 text-gray-700 mb-8">
            <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Annual patient treatment metrics</span></li>
            <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Housing stabilization data</span></li>
            <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Tuition assistance completion rates</span></li>
            <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> <span>Community feedback and partnership reports</span></li>
          </ul>

          <p className="text-gray-700 mb-4">
            Quantitative data is combined with qualitative impact stories to ensure continuous improvement and responsible stewardship.
          </p>
          <p className="text-gray-700">
            For full statistics and annual performance highlights, explore our <a href="/impact" className="text-blue-600 hover:underline">Impact Page</a>.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Mission</h2>

          <p className="text-lg mb-6">
            Prince Goodwill Foundation remains committed to expanding its reach and deepening its impact across Nigeria and the United States. Whether through partnerships, donations, volunteer engagement, or advocacy, supporters play a vital role in sustaining these programs.
          </p>

          <p className="text-lg mb-8">
            If you would like to contribute or collaborate, visit our <a href="/contact" className="underline hover:text-gray-100">Contact Page</a> or explore opportunities to <a href="/contact" className="underline hover:text-gray-100">Get Involved</a>.
          </p>

          <p className="text-xl font-semibold">
            Together, we can continue empowering communities and transforming lives.
          </p>
        </div>
      </section>
    </PublicLayout>
  );
}