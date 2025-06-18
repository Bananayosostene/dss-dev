"use client";

import { useEffect } from "react";
import {
  X,
  Leaf,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MessageCircle,
} from "lucide-react";

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideDrawer({ isOpen, onClose }: SideDrawerProps) {
  // Handle body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      {/* <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      /> */}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-[#354E33] text-white z-50 transform transition-all duration-300 ease-in-out overflow-y-auto shadow-2xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div
          className={`flex justify-between items-center p-6 border-b border-gray-400 transform transition-all duration-500 delay-100 ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="flex items-center space-x-2">
            <Leaf className="w-6 h-6 animate-pulse" />
            <span className="text-xl font-bold">DSS</span>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-green-300 transition-colors hover:rotate-90 transform duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Company Info */}
          <div
            className={`transform transition-all duration-500 delay-200 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <h3 className="text-lg font-semibold mb-4 text-green-300">
              About DSS
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed text-sm">
              Ready to transform your business with our IT solutions? Contact us
              today for a free consultation and discover how we can help you
              achieve your technology goals.
            </p>
            <div className="flex space-x-3">
              <Facebook className="w-4 h-4 hover:text-green-300 cursor-pointer transition-all duration-200 hover:scale-125 hover:-translate-y-1" />
              <Twitter className="w-4 h-4 hover:text-green-300 cursor-pointer transition-all duration-200 hover:scale-125 hover:-translate-y-1" />
              <Instagram className="w-4 h-4 hover:text-green-300 cursor-pointer transition-all duration-200 hover:scale-125 hover:-translate-y-1" />
              <Youtube className="w-4 h-4 hover:text-green-300 cursor-pointer transition-all duration-200 hover:scale-125 hover:-translate-y-1" />
              <MessageCircle className="w-4 h-4 hover:text-green-300 cursor-pointer transition-all duration-200 hover:scale-125 hover:-translate-y-1" />
            </div>
          </div>

          {/* Animated Divider */}
          <div
            className={`border-t border-gray-400 transform transition-all duration-500 delay-300 ${
              isOpen ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          />

          {/* Our Services */}
          <div
            className={`transform transition-all duration-500 delay-400 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <h3 className="text-lg font-semibold mb-4 text-green-300">
              Our Services
            </h3>
            <div className="space-y-3">
              {[
                "IT Helpdesk Support",
                "Cybersecurity Solutions",
                "Data Collection Services",
                "Software Development",
                "Website Design",
                "Network Setup & Maintenance",
                "Data Backup & Recovery",
                "Social Media Management",
                "E-waste Management",
                "Accounting Services",
                "ICT4D Solutions",
                "IT Consulting",
              ].map((service, index) => (
                <div
                  key={service}
                  className={`group transform transition-all duration-300 ${
                    isOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${500 + index * 50}ms` }}
                >
                  <span className="text-gray-300 hover:text-green-300 transition-all duration-200 cursor-pointer block text-sm hover:translate-x-2 hover:font-medium relative">
                    <span className="absolute left-0 w-0 h-0.5 bg-green-300 bottom-0 transition-all duration-200 group-hover:w-full"></span>
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Animated Divider */}
          <div
            className={`border-t border-gray-400 transform transition-all duration-500 delay-700 ${
              isOpen ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          />

          {/* Contact Us */}
          <div
            className={`transform transition-all duration-500 delay-800 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <h3 className="text-lg font-semibold mb-4 text-green-300">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="group hover:bg-green-900/20 p-2 rounded transition-all duration-200">
                <h4 className="text-sm font-semibold mb-1 text-green-300">
                  We're Open
                </h4>
                <p className="text-gray-300 text-sm">24/7</p>
              </div>

              <div className="group hover:bg-green-900/20 p-2 rounded transition-all duration-200">
                <h4 className="text-sm font-semibold mb-1 text-green-300">
                  Office Location
                </h4>
                <p className="text-gray-300 text-sm">KN 8 Ave</p>
              </div>

              <div className="group hover:bg-green-900/20 p-2 rounded transition-all duration-200">
                <h4 className="text-sm font-semibold mb-1 text-green-300">
                  Send a Message
                </h4>
                <p className="text-gray-300 hover:text-green-300 transition-colors cursor-pointer text-sm hover:underline">
                  contact@DSS.com
                </p>
              </div>
            </div>
          </div>

          {/* Bottom spacing */}
          <div className="h-8"></div>
        </div>
      </div>
    </>
  );
}
