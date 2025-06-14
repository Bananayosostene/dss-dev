import Link from "next/link";
import {
  Leaf,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url(/images/footer-bg.png)" }}
    >
      <div className="absolute inset-0 bg-green-900/90"></div>
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <Leaf className="w-8 h-8" />
                <span className="text-2xl font-bold">DSS</span>
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transform your outdoor space with our expert garden services!
                From design to maintenance, we create beautiful, thriving
                gardens tailored to your vision. Let us bring your dream garden
                to life— professional, reliable, and passionate about nature.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 hover:text-green-300 cursor-pointer" />
                <Twitter className="w-5 h-5 hover:text-green-300 cursor-pointer" />
                <Instagram className="w-5 h-5 hover:text-green-300 cursor-pointer" />
                <Youtube className="w-5 h-5 hover:text-green-300 cursor-pointer" />
                <MessageCircle className="w-5 h-5 hover:text-green-300 cursor-pointer" />
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                <li>
                  <span className="text-gray-300">Garden Design</span>
                </li>
                <li>
                  <span className="text-gray-300">Garden Maintenance</span>
                </li>
                <li>
                  <span className="text-gray-300">Planting Services</span>
                </li>
                <li>
                  <span className="text-gray-300">Tree Care</span>
                </li>
                <li>
                  <span className="text-gray-300">Irrigation Services</span>
                </li>
                <li>
                  <span className="text-gray-300">Specialty Services</span>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">We're Open</h3>
                <p className="text-gray-300">Monday - Friday 08.00 - 18.00</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Office Location</h3>
                <p className="text-gray-300">100 S Main St, New York, NY</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Send a Message</h3>
                <p className="text-gray-300">contact@DSS.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-700">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 text-sm mb-4 md:mb-0">
                Buy on Envato - DSS by Designesia
              </p>
              <div className="flex space-x-6 text-sm">
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
