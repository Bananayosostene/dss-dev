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
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-6 gap-6">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Leaf className="w-6 h-6" />
                <span className="text-xl font-bold">DSS</span>
              </Link>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                Ready to transform your business with our IT solutions? Contact
                us today for a free consultation and discover how we can help
                you achieve your technology goals.
              </p>
              <div className="flex space-x-3">
                <Facebook className="w-4 h-4 hover:text-green-300 cursor-pointer transition-colors duration-200" />
                <Twitter className="w-4 h-4 hover:text-green-300 cursor-pointer transition-colors duration-200" />
                <Instagram className="w-4 h-4 hover:text-green-300 cursor-pointer transition-colors duration-200" />
                <Youtube className="w-4 h-4 hover:text-green-300 cursor-pointer transition-colors duration-200" />
                <MessageCircle className="w-4 h-4 hover:text-green-300 cursor-pointer transition-colors duration-200" />
              </div>
            </div>

            {/* Our Services - Enhanced with more width */}
            <div className="lg:col-span-3">
              <h3 className="text-lg font-semibold mb-4 text-center lg:text-left">
                Our Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="group">
                    <span className="text-gray-300 hover:text-green-300 transition-colors duration-200 cursor-pointer block text-sm">
                      IT Helpdesk Support
                    </span>
                  </div>
                  <div className="group">
                    <span className="text-gray-300 hover:text-green-300 transition-colors duration-200 cursor-pointer block text-sm">
                      Cybersecurity Solutions
                    </span>
                  </div>
                  <div className="group">
                    <span className="text-gray-300 hover:text-green-300 transition-colors duration-200 cursor-pointer block text-sm">
                      Data Collection Services
                    </span>
                  </div>
                  <div className="group">
                    <span className="text-gray-300 hover:text-green-300 transition-colors duration-200 cursor-pointer block text-sm">
                      Software Development
                    </span>
                  </div>
                  <div className="group">
                    <span className="text-gray-300 hover:text-green-300 transition-colors duration-200 cursor-pointer block text-sm">
                      Website Design
                    </span>
                  </div>
                  <div className="group">
                    <span className="text-gray-300 hover:text-green-300 transition-colors duration-200 cursor-pointer block text-sm">
                      Network Setup & Maintenance
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="group">
                    <span className="text-gray-300 hover:text-green-300 transition-colors duration-200 cursor-pointer block text-sm">
                      Data Backup & Recovery
                    </span>
                  </div>
                  <div className="group">
                    <span className="text-gray-300 hover:text-green-300 transition-colors duration-200 cursor-pointer block text-sm">
                      Social Media Management
                    </span>
                  </div>
                  <div className="group">
                    <span className="text-gray-300 hover:text-green-300 transition-colors duration-200 cursor-pointer block text-sm">
                      E-waste Management
                    </span>
                  </div>
                  <div className="group">
                    <span className="text-gray-300 hover:text-green-300 transition-colors duration-200 cursor-pointer block text-sm">
                      Accounting Services
                    </span>
                  </div>
                  <div className="group">
                    <span className="text-gray-300 hover:text-green-300 transition-colors duration-200 cursor-pointer block text-sm">
                      ICT4D Solutions
                    </span>
                  </div>
                  <div className="group">
                    <span className="text-gray-300 hover:text-green-300 transition-colors duration-200 cursor-pointer block text-sm">
                      IT Consulting
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">We're Open</h3>
                  <p className="text-gray-300 text-sm font-medium">24/7</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Office Location
                  </h3>
                  <p className="text-gray-300 text-sm">KN 8 Ave</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Send a Message</h3>
                  <p className="text-gray-300 hover:text-green-300 transition-colors cursor-pointer text-sm">
                    contact@DSS.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-700">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row justify-center items-center">
              <p className="text-gray-300 text-sm mb-2 md:mb-0">
                © DSS Ltd 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
