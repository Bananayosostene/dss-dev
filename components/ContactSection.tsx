"use client";

import type React from "react";

import { useState } from "react";
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
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
    <section className="py-16 px-5 bg-gray-50">
      <div className="w-full mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl lg:text-2xl font-bold text-gray-800 mb-4">
            Send Your Message
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            Whether you have a question, a suggestion, or just want to say
            hello, this is the place to do it. Please fill out the form below
            with your details and message, and we'll get back to you as soon as
            possible.
          </p>
        </div>

        <div className="flex items-center justify-between gap-10 md:flex-row flex-col">
          {/* Left */}
          <div className="flex w-full  bg-[#E1EBE2] lg:w-1/2">
            <div className="relative h-[450px] w-[350px]">
              <img
                src="/images/call-center.jpg?height=400&width=400"
                alt="Gardening professional"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-3  space-y-10">
              <div className="">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Clock className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      We're Open
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday 08.00 - 18.00
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Location */}
              <div className="">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <MapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Office Location
                    </h3>
                    <p className="text-gray-600">KK 523 St, Kigali, Rwanda</p>
                  </div>
                </div>
              </div>

              {/* Call Us Directly */}
              <div className="">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Call Us Directly
                    </h3>
                    <p className="text-gray-600">+250 784 869 860</p>
                  </div>
                </div>
              </div>

              {/* Send a Message */}
              <div className="">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Mail className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Send a Message
                    </h3>
                    <p className="text-gray-600">aamityltd@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="w-full lg:w-1/2 ">
            <div className="">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-[10rem] bg-[#354E33] hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
