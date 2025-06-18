"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Leaf,
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
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "" },
    { name: "ABOUT US", href: "#" },
    { name: "BLOG", href: "#" },
    { name: "CONTACT", href: "#" },
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
      <header className="absolute top-0 left-0 right-0 z-50 w-full">
        {/* Top Bar */}
        <div className="bg-[#354E33] text-white py-2">
          <div className="container mx-auto flex flex-wrap justify-between items-center">
            <div className="flex items-center text-sm space-x-6">
              <span>24/7 Support — Whether Remote or On-Site</span>
              <span>contact@DSS.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 hover:text-green-300 cursor-pointer" />
                <Twitter className="w-5 h-5 hover:text-green-300 cursor-pointer" />
                <Instagram className="w-5 h-5 hover:text-green-300 cursor-pointer" />
                <Youtube className="w-5 h-5 hover:text-green-300 cursor-pointer" />
                <MessageCircle className="w-5 h-5 hover:text-green-300 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav
          className={`top-0 left-0 right-0 z-40 transition-colors duration-300 ${
            scrolled ? "bg-[#354E33] fixed" : "bg-transparent"
          }`}
        >
          <div className="container mx-auto">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2 text-white">
                <Leaf className="w-8 h-8" />
                <span className="text-2xl font-bold">DSS</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-green-300 transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* CTA Button and Menu */}
              <div className="flex items-center gap-2">
                <div>
                  <Button
                    variant="outline"
                    className="bg-transparent border-gray-400 rounded-[20px] text-white text-sm py-1 px-4 hover:text-white hover:bg-[#354E33] h-auto min-h-0"
                  >
                    GET IN TOUCH
                  </Button>
                </div>
                <div>
                  {/* Desktop Side Drawer Toggle */}
                  <button
                    onClick={() => setIsSideDrawerOpen(true)}
                    className="hidden lg:block"
                  >
                    <AlignRight className="w-10 h-5 text-white cursor-pointer hover:text-green-300 transition-colors" />
                  </button>

                  {/* Mobile Menu Button */}
                  <button
                    className="lg:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    {isMenuOpen ? (
                      <X className="w-6 h-6" />
                    ) : (
                      <Menu className="w-6 h-6" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="lg:hidden py-4 border-t border-green-700">
                <div className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-white hover:text-green-300 transition-colors font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button
                    variant="outline"
                    className="border-green-300 text-green-300 hover:bg-green-300 hover:text-green-900 w-fit"
                  >
                    GET IN TOUCH
                  </Button>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* Side Drawer */}
      <SideDrawer
        isOpen={isSideDrawerOpen}
        onClose={() => setIsSideDrawerOpen(false)}
      />
    </>
  );
}
