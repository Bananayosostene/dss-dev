import { MessageSquare, Send } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "IT Helpdesk Support",
    description:
      "24/7 IT support for hardware and software with remote assistance and on-site visits when needed.",
    image: "/images/service1.png?height=300&width=400",
    date: "24/7",
    comments: "Available",
  },
  {
    id: 2,
    title: "IT Consulting Services",
    description:
      "Long-term IT partnerships with strategic guidance and ongoing support for your business operations.",
    image: "/images/service2.png?height=300&width=400",
    date: "24/7",
    comments: "Support",
  },
  {
    id: 3,
    title: "Cybersecurity Solutions",
    description:
      "Comprehensive cybersecurity consulting to protect your IT assets and confidential data.",
    image: "/images/service3.png?height=300&width=400",
    date: "24/7",
    comments: "Protected",
  },
  {
    id: 4,
    title: "Data Collection Services",
    description:
      "Professional data collection and management for government agencies, NGOs, and companies.",
    image: "/images/service4.png?height=300&width=400",
    date: "Real",
    comments: "Time Data",
  },
  {
    id: 5,
    title: "ICT4D Solutions",
    description:
      "Technology solutions helping organizations deliver better services through advanced systems.",
    image: "/images/service5.png?height=300&width=400",
    date: "Smart",
    comments: "Solutions",
  },
  {
    id: 6,
    title: "Software Development",
    description:
      "Custom software development tailored to your specific business needs and requirements.",
    image: "/images/service6.png?height=300&width=400",
    date: "Custom",
    comments: "Built",
  },
  {
    id: 7,
    title: "Website Design",
    description:
      "Modern, user-friendly websites that represent your brand and convert visitors into customers.",
    image: "/images/service7.png?height=300&width=400",
    date: "Modern",
    comments: "Design",
  },
  {
    id: 8,
    title: "Network Setup",
    description:
      "Reliable networking and cabling services for computer network installation and maintenance.",
    image: "/images/service8.png?height=300&width=400",
    date: "24/7",
    comments: "Network",
  },
  {
    id: 9,
    title: "Data Backup & Recovery",
    description:
      "Comprehensive backup solutions to protect and quickly recover your critical business data.",
    image: "/images/service9.png?height=300&width=400",
    date: "Secure",
    comments: "Backup",
  },
  {
    id: 10,
    title: "Social Media Management",
    description:
      "Strategic social media services to build your brand and connect with your audience.",
    image: "/images/service10.png?height=300&width=400",
    date: "Social",
    comments: "Growth",
  },
  {
    id: 11,
    title: "E-waste Management",
    description:
      "Professional advisory for electronic waste disposal while protecting the environment.",
    image: "/images/service11.png?height=300&width=400",
    date: "Eco",
    comments: "Friendly",
  },
  {
    id: 12,
    title: "Accounting Services",
    description:
      "Modern accounting combining traditional expertise with advanced technology systems.",
    image: "/images/service12.png?height=300&width=400",
    date: "Tax",
    comments: "Ready",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-5">
          <h2 className="text-2xl font-bold text-[#0066FF]">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex">
                <div className="relative w-2/5 h-48">
                  <img
                    src={service.image || "/images/service1.png"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#0066FF]/90 text-white rounded-lg px-2 py-1 backdrop-blur-sm">
                    <div className="text-lg font-bold leading-none">
                      {service.id.toString().padStart(2, "0")}
                    </div>
                    <div className="text-xs opacity-90">{service.date}</div>
                  </div>
                </div>

                <div className="w-3/5 p-4 flex flex-col justify-between bg-[#E1EBE2]">
                  <div>
                    <h3 className="text-[16px] font-bold text-gray-900 mb-2 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-[14px] leading-relaxed mb-3">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex justify-between ">
                    <div className="flex items-center text-gray-500 text-[14px] cursor-pointer">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      <span>{service.comments}</span>
                    </div>
                    <div>
                      <Link href={"/contact/#contact-form"}>
                      <Send className="w-4 h-4 text-[#F17105] cursor-pointer" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
