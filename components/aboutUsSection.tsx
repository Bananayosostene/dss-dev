"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "MUGISHA Yves Confiance",
    position: "Geologist",
    image: "/images/member1.jpg?height=400&width=300",
  },
  {
    id: 2,
    name: "UZABAKIRIHO Eric",
    position: "Project Manager",
    image: "/images/member2.jpg?height=400&width=300",
  },
  {
    id: 3,
    name: "HAHIRWABASENGA Sosthene",
    position: "Environmental Scientist",
    image: "/images/member3.jpg?height=400&width=300",
  },
  {
    id: 4,
    name: "UWIMANA Marie Claire",
    position: "Safety Engineer",
    image: "/images/member5.jpg?height=400&width=300",
  },
  {
    id: 5,
    name: "NIYONZIMA Jean Baptiste",
    position: "Operations Director",
    image: "/images/member4.jpg?height=300&width=200",
  },
];

export default function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 768) setCardsPerView(1);
      else if (width < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % Math.ceil(teamMembers.length / cardsPerView)
      );
    }, 7000);
    return () => clearInterval(interval);
  }, [cardsPerView]);

  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % Math.ceil(teamMembers.length / cardsPerView)
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(teamMembers.length / cardsPerView)) %
        Math.ceil(teamMembers.length / cardsPerView)
    );
  };

  return (
    <section className="px-4 bg-white">
      <div className="w-full w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 pb-4 gap-2 md:gap-6 items-center mb-6 md:mb-8">
          <div className="space-y-4 md:space-y-6 font-sans">
            <div>
              <div className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                OUR STORY
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#425D45] leading-tight">
                CRAFTING <span className="text-[#8A9A88]">BEAUTIFUL</span>
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#8A9A88] leading-tight mb-4">
                GARDENS <span className="text-[#425D45]">SINCE '99</span>
              </h2>
            </div>
            <div className="text-[#4B584F] text-sm leading-relaxed max-w-lg">
              <p>
                Established in 1999, our garden service has been transforming
                outdoor spaces into thriving, beautiful landscapes for over two
                decades. With a commitment to quality and personalized care, our
                experienced team offers a full range of services, from design to
                maintenance, ensuring your garden flourishes in every season.
              </p>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="flex items-center justify-center">
                <img
                  src="/images/logo.png"
                  alt="Company Logo"
                  className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* OUR TEAM */}
        <div className="bg-[#E1EBE2] rounded-lg p-6 md:p-8 shadow-lg mb-8 md:mb-12">
          <div className="text-center mb-8 md:mb-12">
            <div className="text-sm uppercase tracking-wide text-gray-600 mb-2">
              BEHIND THE SCENE
            </div>
            <h2 className="text-3xl font-bold text-[#425D45]">
              OUR <span className="text-[#8A9A88]">TEAM</span>
            </h2>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex items-center">
              <button
                onClick={prevSlide}
                className="absolute left-0 z-10 bg-[#425D45] text-white rounded-full p-2 hover:bg-[#4CAF50] transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="w-full overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{
                    transform: `translateX(-${
                      currentSlide * (100 / cardsPerView)
                    }%)`,
                    width: `${(teamMembers.length / cardsPerView) * 100}%`,
                  }}
                >
                  {teamMembers.map((member) => (
                    <div
                      key={member.id}
                      className={`w-full px-3 flex-shrink-0 ${
                        cardsPerView === 1
                          ? "sm:w-full"
                          : cardsPerView === 2
                          ? "md:w-1/2"
                          : "lg:w-1/3"
                      }`}
                    >
                      <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="w-full h-80 overflow-hidden">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-gray-800">
                            {member.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {member.position}
                          </p>
                        </div>
                        <div className="flex justify-end p-4 pt-0">
                          <div className="bg-[#425D45] text-white w-8 h-8 flex items-center justify-center rounded-full">
                            f
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={nextSlide}
                className="absolute right-0 z-10 bg-[#425D45] text-white rounded-full p-2 hover:bg-[#4CAF50] transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
