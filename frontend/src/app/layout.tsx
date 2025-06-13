import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IT Solutions Company",
  description: "Professional IT solutions and services for modern businesses",
  openGraph: {
    title: "IT Solutions Company",
    description: "Professional IT solutions and services for modern businesses",
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
      <body className={inter.className}>
        <header className="bg-white shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center">
              <a href="/" className="text-xl font-bold text-gray-900">IT Solutions</a>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
              <a href="/about" className="text-gray-700 hover:text-gray-900">About</a>
              <a href="/services" className="text-gray-700 hover:text-gray-900">Services</a>
              <a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">IT Solutions</h3>
                <p className="text-gray-300">Professional IT services for modern businesses</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
                  <li><a href="/services" className="text-gray-300 hover:text-white">Services</a></li>
                  <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Email: info@itsolutions.com</li>
                  <li>Phone: (555) 123-4567</li>
                  <li>Address: 123 Tech Street, IT City</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
              <p>&copy; {new Date().getFullYear()} IT Solutions. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
