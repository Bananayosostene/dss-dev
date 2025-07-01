"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock, MapPin, Phone, Mail } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setAnimationKey((prev) => prev + 1); // Force re-animation
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "-50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitted(false);
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      ref={sectionRef}
      id="contact-form"
      className="py-5 px-[4rem] bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div
          key={`header-${animationKey}`}
          className={`mb-12 transition-all duration-1000 ${
            isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-[30px]"
          }`}
        >
          <h2
            key={`title-${animationKey}`}
            className={`text-[14px] lg:text-[16px] font-bold text-gray-800 mb-4 transition-all duration-800 ${
              isVisible
                ? "animate-fadeInUp animation-delay-200"
                : "opacity-0 translate-y-[30px]"
            }`}
          >
            Send Your Message
          </h2>
          <p
            key={`description-${animationKey}`}
            className={`text-gray-600 text-[14px] max-w-3xl transition-all duration-800 ${
              isVisible
                ? "animate-fadeInUp animation-delay-400"
                : "opacity-0 translate-y-[30px]"
            }`}
          >
            Whether you have a question, a suggestion, or just want to say
            hello, this is the place to do it. Please fill out the form below
            with your details and message, and we'll get back to you as soon as
            possible.
          </p>
        </div>

        <div className="flex items-center justify-between gap-10 md:flex-row flex-col">
          {/* Left */}
          <div
            key={`left-panel-${animationKey}`}
            className={`flex w-full bg-[#E1EBE2] lg:w-1/2 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-1000 ${
              isVisible
                ? "animate-fadeInLeft animation-delay-600"
                : "opacity-0 translate-x-[-50px]"
            }`}
          >
            <div className="relative h-[350px] w-1/2 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F17105]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <img
                src="/images/call-center.jpg?height=400&width=400"
                alt="Contact professional"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="lg:col-span-3 p-4 space-y-10">
              {[
                { icon: Clock, title: "We're Open", info: "24/7", delay: 800 },
                {
                  icon: MapPin,
                  title: "Office Location",
                  info: "KK 523 St, Kigali, Rwanda",
                  delay: 1000,
                },
                {
                  icon: Phone,
                  title: "Call Us Directly",
                  info: "+250 784 869 860",
                  delay: 1200,
                },
                {
                  icon: Mail,
                  title: "Send a Message",
                  info: "dss@gmail.com",
                  delay: 1400,
                },
              ].map((item, index) => (
                <div
                  key={`contact-item-${index}-${animationKey}`}
                  className={`transition-all duration-800 hover:transform hover:scale-105 ${
                    isVisible
                      ? "animate-fadeInUp"
                      : "opacity-0 translate-y-[30px]"
                  }`}
                  style={{
                    animationDelay: `${item.delay}ms`,
                    transitionDelay: isVisible ? `${item.delay}ms` : "0ms",
                  }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="bg-[#F17105]/20 p-2 rounded-full hover:bg-[#F17105]/30 transition-colors duration-300 hover:scale-110 transform">
                      <item.icon className="w-4 h-4 text-[#F17105]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 text-[14px] hover:text-[#F17105] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-[12px] hover:text-[#F17105] transition-colors cursor-pointer">
                        {item.info}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Contact Form */}
          <div
            key={`form-panel-${animationKey}`}
            className={`w-full lg:w-1/2 transition-all duration-1000 ${
              isVisible
                ? "animate-fadeInRight animation-delay-800"
                : "opacity-0 translate-x-[50px]"
            }`}
          >
            <div className="h-[350px] bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  {
                    name: "name",
                    type: "text",
                    placeholder: "Your Name",
                    required: true,
                    delay: 1000,
                  },
                  {
                    name: "email",
                    type: "email",
                    placeholder: "Your Email",
                    required: true,
                    delay: 1100,
                  },
                  {
                    name: "phone",
                    type: "tel",
                    placeholder: "Your Phone",
                    required: false,
                    delay: 1200,
                  },
                ].map((field) => (
                  <div
                    key={`field-${field.name}-${animationKey}`}
                    className={`transition-all duration-800 ${
                      isVisible
                        ? "animate-fadeInUp"
                        : "opacity-0 translate-y-[30px]"
                    }`}
                    style={{
                      animationDelay: `${field.delay}ms`,
                      transitionDelay: isVisible ? `${field.delay}ms` : "0ms",
                    }}
                  >
                    <Input
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.required}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full h-10 px-4 border text-[12px] placeholder:text-[12px]  border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F17105] focus:border-transparent hover:border-[#F17105]/50 transition-all duration-300"
                    />
                  </div>
                ))}
                <div
                  key={`textarea-${animationKey}`}
                  className={`transition-all duration-800 ${
                    isVisible
                      ? "animate-fadeInUp animation-delay-1300"
                      : "opacity-0 translate-y-[30px]"
                  }`}
                >
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 text-[12px] placeholder:text-[12px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F17105] focus:border-transparent resize-none hover:border-[#F17105]/50 transition-all duration-300"
                  />
                </div>
                <div
                  key={`button-${animationKey}`}
                  className={`transition-all duration-800 ${
                    isVisible
                      ? "animate-fadeInUp animation-delay-1400"
                      : "opacity-0 translate-y-[30px]"
                  }`}
                >
                  <Button
                    type="submit"
                    className={`w-[6rem] bg-[#F17105] hover:bg-[#F17105]/90 text-white text-[12px] font-semibold rounded-[5px] hover:scale-105 transition-all duration-300 ${
                      isSubmitted ? "bg-green-500 hover:bg-green-600" : ""
                    }`}
                  >
                    {isSubmitted ? "Sent!" : "Send"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
