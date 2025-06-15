import Link from 'next/link';

const services = [
  {
    title: 'Cloud Solutions',
    description: 'Secure and scalable cloud infrastructure solutions including migration, hosting, and management services tailored to your business needs.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    features: [
      'Cloud Migration & Strategy',
      'Infrastructure as a Service (IaaS)',
      'Platform as a Service (PaaS)',
      'Cloud Security & Compliance',
      'Backup & Disaster Recovery',
      'Multi-Cloud Management'
    ],
    gradient: 'from-primary to-secondary'
  },
  {
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your business from modern cyber threats with advanced monitoring and response capabilities.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    features: [
      'Security Audits & Assessments',
      'Penetration Testing',
      '24/7 Threat Monitoring',
      'Incident Response & Recovery',
      'Employee Security Training',
      'Compliance Management'
    ],
    gradient: 'from-accent to-primary'
  },
  {
    title: 'Digital Transformation',
    description: 'Strategic consulting and implementation of digital solutions to modernize your business processes and drive innovation.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    features: [
      'Process Automation',
      'Legacy System Modernization',
      'Digital Strategy Consulting',
      'Change Management',
      'Technology Integration',
      'Workflow Optimization'
    ],
    gradient: 'from-secondary to-accent'
  },
  {
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs with modern technologies and agile development methodologies.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    features: [
      'Web Applications',
      'Mobile App Development',
      'Enterprise Software',
      'API Development & Integration',
      'E-commerce Solutions',
      'Quality Assurance & Testing'
    ],
    gradient: 'from-primary to-accent'
  },
  {
    title: 'IT Infrastructure',
    description: 'End-to-end infrastructure solutions for reliable and efficient operations with 24/7 support and monitoring.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    features: [
      'Network Design & Implementation',
      'Server Management',
      'Data Center Solutions',
      '24/7 IT Support',
      'Hardware Procurement',
      'System Maintenance'
    ],
    gradient: 'from-accent to-secondary'
  },
  {
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights for better decision making with advanced analytics and visualization tools.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    features: [
      'Business Intelligence',
      'Data Visualization & Dashboards',
      'Predictive Analytics',
      'Big Data Solutions',
      'Data Warehousing',
      'Machine Learning Models'
    ],
    gradient: 'from-secondary to-primary'
  }
];

const benefits = [
  {
    title: 'Expert Team',
    description: 'Certified professionals with years of industry experience',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
      </svg>
    )
  },
  {
    title: 'Proven Results',
    description: '500+ successful projects delivered across various industries',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock technical assistance and monitoring',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Scalable Solutions',
    description: 'Future-ready technology that grows with your business',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  }
];

export default function Services() {
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
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
            We offer a comprehensive range of IT solutions to help your business thrive in the digital age.
            Our expert team ensures top-quality service delivery and ongoing support.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/contact"
              className="group bg-primary text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-secondary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 hover:scale-105"
            >
              Get Started Today
              <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link 
              href="/about"
              className="text-slate-700 border-2 border-slate-300 px-10 py-4 rounded-full text-lg font-semibold hover:bg-slate-900 hover:text-white transition-all duration-300 hover:shadow-lg"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-slate-900 mb-6">
              Complete IT Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From cloud infrastructure to cybersecurity, we provide end-to-end technology solutions 
              that drive business growth and operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-white`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold font-poppins text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors group-hover:translate-x-1 duration-200"
                >
                  Get This Service
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-slate-900 mb-6">
              Why Choose Our Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We combine technical expertise with business understanding to deliver 
              solutions that truly make a difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 text-white">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold font-poppins text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-slate-900 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery 
              and optimal results for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold font-poppins text-slate-900 mb-4">Discovery</h3>
              <p className="text-slate-600">We analyze your business needs and current technology landscape</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold font-poppins text-slate-900 mb-4">Strategy</h3>
              <p className="text-slate-600">We develop a comprehensive plan tailored to your objectives</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold font-poppins text-slate-900 mb-4">Implementation</h3>
              <p className="text-slate-600">We execute the solution with precision and minimal disruption</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold font-poppins text-slate-900 mb-4">Support</h3>
              <p className="text-slate-600">We provide ongoing support and optimization for long-term success</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Contact us today to discuss how we can help transform your business with our comprehensive IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact"
              className="group bg-white text-primary px-10 py-4 rounded-full text-lg font-semibold hover:bg-slate-100 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Contact Our Experts
              <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="text-white border-2 border-white/30 px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 hover:shadow-lg backdrop-blur-sm"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 