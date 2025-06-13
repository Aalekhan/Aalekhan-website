import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Business with Modern IT Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We provide cutting-edge technology services to help your business thrive in the digital age
            </p>
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Cloud Solutions</h3>
              <p className="text-gray-600">
                Secure and scalable cloud infrastructure to power your business applications
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Cybersecurity</h3>
              <p className="text-gray-600">
                Protect your business with advanced security solutions and monitoring
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Digital Transformation</h3>
              <p className="text-gray-600">
                Modernize your business processes with cutting-edge technology
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/services"
              className="text-blue-600 font-semibold hover:text-blue-800"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">10+</div>
              <div className="font-semibold">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">200+</div>
              <div className="font-semibold">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="font-semibold">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">99%</div>
              <div className="font-semibold">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">Contact us today for a free consultation</p>
          <Link 
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
