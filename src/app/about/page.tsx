import Link from 'next/link';

const teamMembers = [
  {
    name: 'Jainam Shah',
    role: 'CEO & Founder',
    bio: '20+ years of experience in IT consulting and digital transformation.',
    avatar: '/team-1.jpg'
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    bio: 'Expert in cloud architecture and cybersecurity solutions.',
    avatar: '/team-2.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'Head of Development',
    bio: 'Leads our software development and technical innovation initiatives.',
    avatar: '/team-3.jpg'
  },
  {
    name: 'Emily Brown',
    role: 'Client Success Director',
    bio: 'Ensures exceptional service delivery and client satisfaction.',
    avatar: '/team-4.jpg'
  },
];

const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Excellence',
    description: 'Delivering the highest quality in everything we do, exceeding expectations at every turn.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Innovation',
    description: 'Staying ahead with cutting-edge solutions and emerging technologies.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Collaboration',
    description: 'Working together to achieve shared success and meaningful partnerships.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Trust',
    description: 'Building lasting relationships through integrity, transparency, and reliability.'
  },
];

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-poppins text-slate-900 mb-8">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Aalekhan</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            We are a leading IT solutions provider committed to helping businesses thrive
            in the digital age through innovative technology solutions and expert consulting.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold font-poppins text-slate-900 mb-8">Our Story</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Founded with a vision to bridge the gap between complex technology and business success, 
                Aalekhan has been at the forefront of digital transformation for over a decade.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                From our humble beginnings as a small consulting firm to becoming a trusted technology 
                partner for businesses worldwide, we've maintained our commitment to excellence, 
                innovation, and client success.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold font-poppins text-primary mb-2">500+</div>
                  <div className="text-slate-600">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold font-poppins text-primary mb-2">10+</div>
                  <div className="text-slate-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold font-poppins text-primary mb-2">50+</div>
                  <div className="text-slate-600">Team Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold font-poppins text-primary mb-2">99%</div>
                  <div className="text-slate-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary to-secondary rounded-3xl p-1">
                <div className="w-full h-full bg-slate-100 rounded-3xl flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-24 h-24 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <p className="text-slate-600 font-medium">Building Digital Futures</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold font-poppins text-slate-900 mb-6">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                To empower businesses with cutting-edge technology solutions that drive
                growth, efficiency, and innovation while ensuring the highest levels of
                security and reliability in every solution we deliver.
              </p>
            </div>
            <div className="group bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold font-poppins text-slate-900 mb-6">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                To be the most trusted technology partner for businesses worldwide,
                known for our innovation, expertise, and unwavering commitment to client success
                in an ever-evolving digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-slate-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our relationships with clients and partners.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 text-white">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold font-poppins text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-slate-900 mb-6">
              Our Leadership Team
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Meet the visionaries and experts who drive our company's success and innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center border border-slate-200">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-xl font-bold font-poppins text-slate-900 mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-4">{member.role}</p>
                <p className="text-slate-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Let's discuss how we can help your business succeed in the digital world.
            Our team is ready to turn your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact"
              className="group bg-white text-primary px-10 py-4 rounded-full text-lg font-semibold hover:bg-slate-100 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Start a Conversation
              <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="text-white border-2 border-white/30 px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 hover:shadow-lg backdrop-blur-sm"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 