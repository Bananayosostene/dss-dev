"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Flag, Target, Shield } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "MUGISHA Yves Confiance",
    position: "Geologist",
    image: "/images/member1.jpg?height=400&width=300",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    name: "UZABAKIRIHO Eric",
    position: "Project Manager",
    image: "/images/member2.jpg?height=400&width=300",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    name: "HAHIRWABASENGA Sosthene",
    position: "Environmental Scientist",
    image: "/images/member3.jpg?height=400&width=300",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    name: "UWIMANA Marie Claire",
    position: "Safety Engineer",
    image: "/images/member5.jpg?height=400&width=300",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 5,
    name: "NIYONZIMA Jean Baptiste",
    position: "Operations Director",
    image: "/images/member4.jpg?height=300&width=200",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Calculate how many cards to show based on screen size
  const getVisibleCards = () => {
    if (isMobile) return 1;
    return 3;
  };

  const getCardWidth = () => {
    if (isMobile) return "w-80 max-w-[90vw]";
    return "w-72";
  };

  return (
    <section className="py-8 md:py-16 px-4 bg-white">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <div className="flex flex-col items-center lg:items-start">
            <div className="text-center lg:text-left">
              <div className="mb-6 md:mb-8">
                <div className="relative">
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 relative mb-4">
                      <div className="">
                        <img
                          src="/images/logo.png"
                          alt="Company Logo"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
                ABOUT US
              </h2>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4 md:mb-6">
                Empowering vision, guiding success
              </h3>
            </div>

            <div className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed space-y-3 md:space-y-4">
              <p>
                AAMITY Ltd we deliver unmatched expertise and innovative
                solutions to the mining industry. Our seasoned professionals,
                with decades of experience, ensure your mining projects are
                safe, efficient, and profitable. Whether exploring new
                opportunities or optimizing existing operations.
              </p>

              <p>
                We are committed to sustainable mining practices that respect
                both the environment and local communities. Our comprehensive
                approach combines cutting-edge technology with traditional
                mining wisdom to deliver exceptional results.
              </p>
            </div>

            {/* Additional Stats or Features */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
              <div className="text-center p-3 md:p-4 bg-gray-50 rounded-lg">
                <h4 className="text-xl md:text-2xl font-bold text-[#8B9F3E]">
                  15+
                </h4>
                <p className="text-sm md:text-base text-gray-600">
                  Years Experience
                </p>
              </div>
              <div className="text-center p-3 md:p-4 bg-gray-50 rounded-lg">
                <h4 className="text-xl md:text-2xl font-bold text-[#8B9F3E]">
                  100+
                </h4>
                <p className="text-sm md:text-base text-gray-600">
                  Projects Completed
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="bg-[#4CAF50] h-12 md:h-16 rounded-t-3xl relative">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="bg-white rounded-full p-2 md:p-3 shadow-lg">
                    <Flag className="w-6 h-6 md:w-8 md:h-8 text-[#4CAF50]" />
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8 pt-8 md:pt-12 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                  MISSION
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  To empower mining companies with the knowledge and tools they
                  need to operate safely, efficiently, and sustainably.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="bg-[#2196F3] h-12 md:h-16 rounded-t-3xl relative">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="bg-white rounded-full p-2 md:p-3 shadow-lg">
                    <Target className="w-6 h-6 md:w-8 md:h-8 text-[#2196F3]" />
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8 pt-8 md:pt-12 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                  VISION
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  To revolutionize mining with sustainable innovations and
                  advanced technologies, driving growth, efficiency, and
                  environmental stewardship for a resilient and responsible
                  industry.
                </p>
              </div>
            </div>

            {/* Values Card */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="bg-[#00BCD4] h-12 md:h-16 rounded-t-3xl relative">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="bg-white rounded-full p-2 md:p-3 shadow-lg">
                    <Shield className="w-6 h-6 md:w-8 md:h-8 text-[#00BCD4]" />
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8 pt-8 md:pt-12 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                  VALUES
                </h3>
                <ul className="text-sm md:text-base text-gray-700 space-y-1 md:space-y-2">
                  <li>• Integrity</li>
                  <li>• Excellence</li>
                  <li>• Innovation</li>
                  <li>• Sustainability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-6 md:mb-8">
            MEET OUR TEAM
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex justify-center items-center w-full">
            <button
              onClick={prevSlide}
              className="bg-[#354E33] hover:bg-[#4CAF50] text-white rounded-full p-2 md:p-3 shadow-lg transition-colors duration-300 z-10 mr-2 md:mr-4 flex-shrink-0"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <div className="flex-1 flex justify-center overflow-hidden">
              <div className="flex space-x-3 md:space-x-6">
                {Array.from({ length: getVisibleCards() }, (_, index) => {
                  const memberIndex =
                    (currentSlide + index) % teamMembers.length;
                  const member = teamMembers[memberIndex];

                  return (
                    <div
                      key={member.id}
                      className={`relative ${getCardWidth()} h-80 md:h-96 p-3 md:p-5 perspective-1000 flex-shrink-0`}
                      onMouseEnter={() => setHoveredCard(member.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div
                        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                          hoveredCard === member.id ? "rotate-y-180" : ""
                        }`}
                      >
                        {/* Front of card */}
                        <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-xl shadow-lg overflow-hidden">
                          <div className="h-48 md:h-64 overflow-hidden">
                            <img
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4 md:p-6 text-center">
                            <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-2 leading-tight">
                              {member.name}
                            </h3>
                            <p className="text-xs md:text-base text-gray-600 mb-3 md:mb-4">
                              {member.position}
                            </p>
                            <p className="text-xs md:text-sm text-gray-500">
                              {isMobile ? "Tap" : "Click"} to view More 👆
                            </p>
                          </div>
                        </div>

                        {/* Back of card */}
                        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-white rounded-xl shadow-lg p-4 md:p-6 flex flex-col justify-center">
                          <div className="text-black text-center">
                            <h3 className="text-base md:text-xl font-bold mb-3 md:mb-4 leading-tight">
                              {member.name}
                            </h3>
                            <p className="text-sm md:text-lg font-semibold mb-3 md:mb-4">
                              {member.position}
                            </p>
                            <p className="text-xs md:text-sm leading-relaxed line-clamp-6">
                              {member.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="bg-[#354E33] hover:bg-[#4CAF50] text-white rounded-full p-2 md:p-3 shadow-lg transition-colors duration-300 z-10 ml-2 md:ml-4 flex-shrink-0"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          <div className="flex justify-center mt-6 md:mt-8 space-x-2">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? "bg-[#2196F3]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .line-clamp-6 {
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
