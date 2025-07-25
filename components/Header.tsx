"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MessageCircle,
  AlignRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SideDrawer from "./SideDrawer";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About us", href: "/#about" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 w-full ">
        <div className="bg-[#000000] text-white py-2 px-[2rem] animate-slideDown">
          <div className="container mx-auto flex flex-wrap items-center justify-center md:justify-between">
            <div className="hidden md:flex items-center text-[12px] space-x-6 animate-fadeInLeft">
              <span>24/7 Support — Whether Remote or On-Site</span>
              <span>info@dss.com</span>
            </div>
            <div className="flex items-center space-x-4 animate-fadeInRight">
              <div className="flex space-x-4">
                <Facebook className="w-4 h-4 text-[#18a0fb] cursor-pointer hover:scale-110 transition-transform" />
                <a
                  href="https://x.com/DigitalSupSol"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-4 h-4 text-[#1da1f2] cursor-pointer hover:scale-110 transition-transform" />
                </a>
                <Instagram className="w-4 h-4 text-[#e1306c] cursor-pointer hover:scale-110 transition-transform" />
                <Youtube className="w-4 h-4 text-[#ff0000] cursor-pointer hover:scale-110 transition-transform" />
                <a
                  href="https://wa.me/250788300967"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 text-[#0088cc] cursor-pointer hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <nav
          className={`top-0 left-0 right-0 z-40 transition-all duration-500 animate-slideDown px-[2rem] ${
            scrolled ? "bg-[#000000] fixed" : "bg-transparent"
          }`}
        >
          <div className="container mx-auto">
            <div className="flex justify-between items-center py-4">
              <Link
                href="/"
                className="flex items-center space-x-2 text-white animate-fadeInLeft animation-delay-300"
              >
                <span className="text-[16px] hover:text-[#F17105] transition-colors">
                  DSS
                </span>
              </Link>

              <div className="hidden lg:flex items-center space-x-8 animate-fadeInUp animation-delay-500">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-[#F17105] text-[16px] transition-colors animate-fadeInUp"
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-2 animate-fadeInRight animation-delay-700">
                <div>
                  <Link href={"/contact"}>
                  <Button className="hidden lg:block bg-transparent border-gray-400 rounded-[20px] text-white text-sm py-1 px-4 bg-[#F17105] hover:bg-[#F17105]/50 hover:scale-105 transition-all duration-300 h-auto min-h-0">
                    Get in touch
                  </Button>
                  </Link>
                </div>
                <div>
                  <button
                    onClick={() => setIsSideDrawerOpen(true)}
                    className="hidden lg:block"
                  >
                    <AlignRight className="w-10 h-5 text-white cursor-pointer hover:text-[#F17105] hover:scale-110 transition-all duration-300" />
                  </button>
                  <button
                    className="lg:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    {isMenuOpen ? (
                      <X className="w-6 h-6 hover:scale-110 transition-transform" />
                    ) : (
                      <Menu className="w-6 h-6 hover:scale-110 transition-transform" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {isMenuOpen && (
              <div className="lg:hidden py-4 border-t border-[#F17105]/30 bg-[#000000] animate-slideDown">
                <div className="flex flex-col space-y-4">
                  {navigation.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-white hover:text-[#F17105] transition-colors text-[16px] font-medium animate-fadeInLeft"
                      style={{ animationDelay: `${index * 100}ms` }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link href={"/contact"}>
                  <Button className="text-white text-[16px] bg-[#F17105] hover:bg-[#F17105]/50 w-fit animate-fadeInLeft animation-delay-400">
                    Get in touch
                  </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>

      <SideDrawer
        isOpen={isSideDrawerOpen}
        onClose={() => setIsSideDrawerOpen(false)}
      />
    </>
  );
}
