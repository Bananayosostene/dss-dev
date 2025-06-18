import { MessageSquare } from "lucide-react";

const services = [
  {
    id: 1,
    title: "IT Helpdesk Support",
    description:
      "Comprehensive IT support services for hardware and software using our advanced IT Helpdesk System. We provide remote assistance wherever you are, with on-site visits when necessary. Cost-effective solution that eliminates the need for full-time IT staff.",
    image: "/images/service1.png?height=300&width=400",
    date: "24/7",
    comments: "Available",
  },
  {
    id: 2,
    title: "Fixed IT Consulting Services",
    description:
      "Long-term IT consulting partnerships tailored to your daily business operations. We provide strategic guidance and ongoing support to optimize your technology infrastructure with predictable costs.",
    image: "/images/service2.png?height=300&width=400",
    date: "24/7",
    comments: "Support",
  },
  {
    id: 3,
    title: "Cybersecurity Solutions",
    description:
      "Comprehensive cybersecurity consulting to protect against increasing digital threats. We help safeguard your IT assets, confidential data, and ensure your organization's security with proactive protection.",
    image: "/images/service3.png?height=300&width=400",
    date: "24/7",
    comments: "Protected",
  },
  {
    id: 4,
    title: "Data Collection Services",
    description:
      "Professional data collection, organization, and management services for government agencies, NGOs, private companies, and researchers using reliable, secure methodologies with complete service package.",
    image: "/images/service4.png?height=300&width=400",
    date: "Real",
    comments: "Time Data",
  },
  {
    id: 5,
    title: "ICT4D Solutions",
    description:
      "Information and Communication Technology for Development solutions that help government agencies, NGOs, and private organizations deliver better services through advanced technology systems.",
    image: "/images/service5.png?height=300&width=400",
    date: "Smart",
    comments: "Solutions",
  },
  {
    id: 6,
    title: "Software Development and API",
    description:
      "Custom software development services tailored to your specific business needs. Whether you're a startup, growing company, or undergoing digital transformation, we deliver reliable, user-friendly solutions.",
    image: "/images/service6.png?height=300&width=400",
    date: "Custom",
    comments: "Built",
  },
  {
    id: 7,
    title: "Website Design",
    description:
      "Professional website design services creating modern, attractive, user-friendly, and fast-loading websites that effectively represent your brand and convert visitors into customers.",
    image: "/images/service7.png?height=300&width=400",
    date: "Modern",
    comments: "Design",
  },
  {
    id: 8,
    title: "Network Setup and Maintenance",
    description:
      "Reliable and secure networking and cabling services for computer network installation and maintenance. Whether setting up new offices or needing ongoing support, we ensure 24/7 network performance.",
    image: "/images/service8.png?height=300&width=400",
    date: "24/7",
    comments: "Network",
  },
  {
    id: 9,
    title: "Data Backup and Recovery",
    description:
      "Comprehensive data backup and recovery solutions to protect your critical business information. We provide expert advice and services to ensure your important data is secure and quickly recoverable.",
    image: "/images/service9.png?height=300&width=400",
    date: "Secure",
    comments: "Backup",
  },
  {
    id: 10,
    title: "Social Media Management",
    description:
      "Strategic social media management services to build your company's brand, connect with your audience, and promote your services through effective online presence and engagement strategies.",
    image: "/images/service10.png?height=300&width=400",
    date: "Social",
    comments: "Growth",
  },
  {
    id: 11,
    title: "E-waste Management Advisory",
    description:
      "Professional advisory services for electronic waste management, helping organizations properly dispose of outdated technology equipment while protecting the environment and complying with regulations.",
    image: "/images/service11.png?height=300&width=400",
    date: "Eco",
    comments: "Friendly",
  },
  {
    id: 12,
    title: "Accounting Services",
    description:
      "Modern accounting services combining traditional bookkeeping expertise with advanced technology systems. We provide reliable, up-to-date financial management solutions including tax processing.",
    image: "/images/service12.png?height=300&width=400",
    date: "Tax",
    comments: "Ready",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
        </div>

        {/* Services Grid - 2 per row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-[5px] shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex">
                {/* Left Side - Image with Number Overlay */}
                <div className="relative w-1/2 h-[50vh]">
                  <img
                    src={service.image || "/images/service1.png"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Number Overlay - Top Left */}
                  <div className="absolute top-4 left-4 bg-[#354E33]/90 text-white rounded-lg px-3 py-2 backdrop-blur-sm">
                    <div className="text-2xl font-bold leading-none">
                      {service.id.toString().padStart(2, "0")}
                    </div>
                    <div className="text-xs opacity-90">{service.date}</div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="w-1/2 p-6 flex flex-col justify-between  bg-[#E1EBE2]">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom Section - Comments/Status */}
                  <div className="flex items-center text-gray-500 text-sm">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    <span>{service.comments}</span>
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
