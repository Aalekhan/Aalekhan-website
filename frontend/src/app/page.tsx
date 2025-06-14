import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-8 leading-tight">
              Transform Your Business with
              <span className="block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Modern IT Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Aalekhan empowers businesses with cutting-edge technology, cloud infrastructure, 
              cybersecurity, and digital transformation solutions that drive growth and innovation.
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
                href="/services"
                className="text-white border-2 border-white/30 px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 hover:shadow-lg backdrop-blur-sm"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-slate-900 mb-6">
              Our Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to accelerate your digital transformation 
              and maximize business potential.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold font-poppins text-slate-900 mb-4">Cloud Solutions</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Scalable cloud infrastructure, migration services, and optimization strategies 
                that reduce costs while enhancing performance and reliability.
              </p>
              <Link href="/services" className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center">
                Learn More 
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold font-poppins text-slate-900 mb-4">Cybersecurity</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Advanced security solutions, threat monitoring, and compliance management 
                to protect your business from evolving cyber threats.
              </p>
              <Link href="/services" className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center">
                Learn More 
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold font-poppins text-slate-900 mb-4">Digital Transformation</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Comprehensive modernization strategies, process automation, and technology 
                integration to future-proof your business operations.
              </p>
              <Link href="/services" className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center">
                Learn More 
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-slate-900 mb-6">
              Why Choose Aalekhan
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Trusted by businesses worldwide for our expertise, reliability, and commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-white">10+</span>
              </div>
              <h3 className="text-xl font-bold font-poppins text-slate-900 mb-2">Years Experience</h3>
              <p className="text-slate-600">Decade of expertise in IT solutions</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-white">500+</span>
              </div>
              <h3 className="text-xl font-bold font-poppins text-slate-900 mb-2">Projects Completed</h3>
              <p className="text-slate-600">Successful implementations delivered</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">24/7</span>
              </div>
              <h3 className="text-xl font-bold font-poppins text-slate-900 mb-2">Support Available</h3>
              <p className="text-slate-600">Round-the-clock technical assistance</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-white">99%</span>
              </div>
              <h3 className="text-xl font-bold font-poppins text-slate-900 mb-2">Client Satisfaction</h3>
              <p className="text-slate-600">Proven track record of success</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have accelerated their growth with our innovative IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/contact"
              className="group bg-white text-primary px-10 py-4 rounded-full text-lg font-semibold hover:bg-slate-100 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Start Your Project
              <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link 
              href="/about"
              className="text-white border-2 border-white/30 px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 hover:shadow-lg backdrop-blur-sm"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
