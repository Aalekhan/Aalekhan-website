import Link from 'next/link';

const services = [
  {
    title: 'Cloud Solutions',
    description: 'Secure and scalable cloud infrastructure solutions including migration, hosting, and management.',
    features: [
      'Cloud Migration',
      'Infrastructure as a Service (IaaS)',
      'Platform as a Service (PaaS)',
      'Cloud Security',
      'Backup & Recovery'
    ]
  },
  {
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your business from modern cyber threats.',
    features: [
      'Security Audits',
      'Penetration Testing',
      '24/7 Monitoring',
      'Incident Response',
      'Employee Training'
    ]
  },
  {
    title: 'Digital Transformation',
    description: 'Strategic consulting and implementation of digital solutions to modernize your business.',
    features: [
      'Process Automation',
      'Legacy System Modernization',
      'Digital Strategy Consulting',
      'Change Management',
      'Technology Integration'
    ]
  },
  {
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs and objectives.',
    features: [
      'Web Applications',
      'Mobile Apps',
      'Enterprise Software',
      'API Development',
      'Software Integration'
    ]
  },
  {
    title: 'IT Infrastructure',
    description: 'End-to-end infrastructure solutions for reliable and efficient operations.',
    features: [
      'Network Design',
      'Server Management',
      'Data Center Solutions',
      'IT Support',
      'Hardware Procurement'
    ]
  },
  {
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights for better decision making.',
    features: [
      'Business Intelligence',
      'Data Visualization',
      'Predictive Analytics',
      'Big Data Solutions',
      'Data Warehousing'
    ]
  }
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
          We offer a comprehensive range of IT solutions to help your business thrive in the digital age.
          Our expert team ensures top-quality service delivery and support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2"
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
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-6">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-8">
          Contact us today to discuss how we can help transform your business.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
} 