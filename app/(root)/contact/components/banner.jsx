import React from "react";
import { Instagram ,Facebook , Linkedin ,Github ,X} from 'lucide-react';
import { Mail, Phone, MapPin } from "lucide-react";

const banner = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#10B981] to-[#14B8A6] text-center py-16 px-6">
        <h1 className="text-5xl font-bold text-white mb-4">Get in Touch</h1>
        <p className="text-xl text-white/90 mb-8 ">
          Have a question or want to work together? We'd love to hear from you.
        </p>
      </div>
      <div className="container m-auto">
        <div className=" flex items-center justify-center px-6 py-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
            <div className="bg-white border border-stone-200 rounded-2xl p-8 shadow-md hover:shadow-2xl transition">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-500 text-white mb-6">
                <Mail size={26} />
              </div>

              <h3 className="text-xl font-semibold mb-3">Email Us</h3>
              <p className="text-gray-500 mb-6">
                Send us an email and we'll get back to you within 24 hours.
              </p>

              <a
                href="mailto:hello@socialblog.com"
                className="text-blue-600 font-medium hover:underline"
              >
                hello@socialblog.com
              </a>
            </div>

            {/* Call Card */}
            <div className="bg-white border border-stone-200 rounded-2xl p-8 shadow-md hover:shadow-2xl transition">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-500 text-white mb-6">
                <Phone size={26} />
              </div>

              <h3 className="text-xl font-semibold mb-3">Call Us</h3>
              <p className="text-gray-500 mb-6">
                Available Monday to Friday, 9am to 6pm EST.
              </p>

              <a
                href="tel:+1234567890"
                className="text-green-600 font-medium hover:underline"
              >
                +1 (234) 567-890
              </a>
            </div>

            {/* Visit Card */}
            <div className="bg-white border border-stone-200 rounded-2xl p-8 shadow-md hover:shadow-2xl transition">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-500 text-white mb-6">
                <MapPin size={26} />
              </div>

              <h3 className="text-xl font-semibold mb-3">Visit Us</h3>
              <p className="text-gray-500 mb-6">
                Come say hello at our office headquarters.
              </p>

              <p className="text-orange-600 font-medium">
                123 Main Street <br />
                San Francisco, CA 94102
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-3xl shadow-2xl border border-[#E5E7EB] bg-white text-center">
            <div class="bg-gradient-to-r from-[#2563EB] to-[#3B82F6] rounded-t-3xl px-10 py-8">
              <h2 class="text-3xl font-bold text-white mb-2">
                Send us a Message
              </h2>
              <p class="text-white/90">
                Fill out the form below and we'll respond as soon as possible.
              </p>
            </div>

            <form class="p-10">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label class="block text-sm font-semibold text-[#111827] mb-3">
                    Your Name
                  </label>
                  <input
                    className="w-full px-5 py-4 text-sm border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                    placeholder="John Doe"
                    required
                    type="text"
                    value=""
                  />
                </div>
                <div>
                  <label class="block text-sm font-semibold text-[#111827] mb-3">
                    Email Address
                  </label>
                  <input
                    className="w-full px-5 py-4 text-sm border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                    placeholder="john@example.com"
                    required
                    type="email"
                    value=""
                  />
                </div>
              </div>
              <div class="mb-6">
                <label class="block text-sm font-semibold text-[#111827] mb-3">
                  Subject
                </label>
                <input
                  className="w-full px-5 py-4 text-sm border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                  placeholder="How can we help you?"
                  required
                  type="text"
                  value=""
                />
              </div>
              <div class="mb-8">
                <label class="block text-sm font-semibold text-[#111827] mb-3">
                  Message
                </label>
                <textarea
                  rows="6"
                  class="w-full px-5 py-4 text-sm border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent resize-none transition-all"
                  placeholder="Tell us more about your inquiry..."
                  required=""
                ></textarea>
              </div>
              <button
                type="submit"
                class="w-full px-8 py-4 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] hover:shadow-2xl text-white text-base font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap"
              >
                Send Message
              </button>
            </form>
          </div>
          <div class="max-w-3xl mx-auto mt-16 text-center mb-16">
            <h3 class="text-2xl font-bold text-[#111827] mb-6">
              Connect With Us
            </h3>
            <div class="flex items-center justify-center space-x-6">
              <a
                href="#"
                class="w-14 h-14 bg-white border border-[#E5E7EB] rounded-full flex items-center justify-center hover:bg-[#2563EB] hover:border-[#2563EB] hover:text-white text-[#6B7280] transition-all cursor-pointer shadow-lg hover:shadow-xl group"
              >
                 <X />
              </a>
              <a
                href="#"
                class="w-14 h-14 bg-white border border-[#E5E7EB] rounded-full flex items-center justify-center hover:bg-[#2563EB] hover:border-[#2563EB] hover:text-white text-[#6B7280] transition-all cursor-pointer shadow-lg hover:shadow-xl group"
              >
                <Facebook />
              </a>
              <a
                href="#"
                class="w-14 h-14 bg-white border border-[#E5E7EB] rounded-full flex items-center justify-center hover:bg-[#2563EB] hover:border-[#2563EB] hover:text-white text-[#6B7280] transition-all cursor-pointer shadow-lg hover:shadow-xl group"
              >
                <Instagram />
              </a>
              <a
                href="#"
                class="w-14 h-14 bg-white border border-[#E5E7EB] rounded-full flex items-center justify-center hover:bg-[#2563EB] hover:border-[#2563EB] hover:text-white text-[#6B7280] transition-all cursor-pointer shadow-lg hover:shadow-xl group"
              >
                <Linkedin />
              </a>
              <a
                href="#"
                class="w-14 h-14 bg-white border border-[#E5E7EB] rounded-full flex items-center justify-center hover:bg-[#2563EB] hover:border-[#2563EB] hover:text-white text-[#6B7280] transition-all cursor-pointer shadow-lg hover:shadow-xl group"
              >
                <Github />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default banner;
