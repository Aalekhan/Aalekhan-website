import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter ({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Aalekhan - Modern IT Solutions & Digital Services",
  description: "Transform your business with cutting-edge IT solutions, cloud services, cybersecurity, and digital transformation. Professional IT consulting and development services.",
  openGraph: {
    title: "Aalekhan - Modern IT Solutions & Digital Services",
    description: "Transform your business with cutting-edge IT solutions, cloud services, cybersecurity, and digital transformation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/Aalekhan_logo.jpg" 
                alt="Aalekhan Logo" 
                className="h-10 w-10 rounded-lg object-cover"
              />
              <a href="/" className="text-2xl font-bold font-poppins text-slate-900 hover:text-primary transition-colors">
                Aalekhan
              </a>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-slate-700 hover:text-primary font-medium transition-colors duration-200 relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a href="/about" className="text-slate-700 hover:text-primary font-medium transition-colors duration-200 relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a href="/services" className="text-slate-700 hover:text-primary font-medium transition-colors duration-200 relative group">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a href="/contact" className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-secondary transition-all duration-200 hover:shadow-lg hover:shadow-primary/25">
                Contact Us
              </a>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <img 
                    src="/Aalekhan_logo.jpg" 
                    alt="Aalekhan Logo" 
                    className="h-10 w-10 rounded-lg object-cover"
                  />
                  <h3 className="text-2xl font-bold font-poppins">Aalekhan</h3>
                </div>
                <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
                  Transforming businesses through innovative IT solutions, cloud services, and digital transformation. 
                  Your trusted partner in the digital age.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                    <span className="sr-only">GitHub</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold font-poppins mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  <li><a href="/about" className="text-slate-300 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="/services" className="text-slate-300 hover:text-white transition-colors">Our Services</a></li>
                  <li><a href="/contact" className="text-slate-300 hover:text-white transition-colors">Contact</a></li>
                  <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Case Studies</a></li>
                  <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Blog</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold font-poppins mb-6">Contact Info</h4>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>info@aalekhan.com</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+1 (555) 123-4567</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>123 Tech Street, IT City</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Aalekhan. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
