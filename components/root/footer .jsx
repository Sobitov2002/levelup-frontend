"use client";
import {
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0f1023] to-[#05060f] text-gray-300">
      <div className="container m-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <div  />
          <Image src="/x.png" alt="TemurX Logo" width={60} height={60} className="text-white" />
          <p className="text-sm leading-relaxed mb-6">
            Empowering creators to share their stories and connect
            with audiences worldwide. Join our growing community today.
          </p>

          <div className="flex gap-3">
            {[Twitter, Facebook, Instagram, Linkedin].map(
              (Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-600 transition"
                >
                  <Icon size={16} />
                </Link>
              )
            )}
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">PLATFORM</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="#" className="hover:text-white">Browse Posts</Link></li>
            <li><Link href="#" className="hover:text-white">Quick Notes</Link></li>
            <li><Link href="#" className="hover:text-white">Create Account</Link></li>
            <li><Link href="#" className="hover:text-white">Sign In</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">COMPANY</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="#" className="hover:text-white">About Us</Link></li>
            <li><Link href="#" className="hover:text-white">Careers</Link></li>
            <li><Link href="#" className="hover:text-white">Press Kit</Link></li>
            <li><Link href="#" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">STAY UPDATED</h4>
          <p className="text-sm mb-4">
            Get the latest updates and news
          </p>
          <div className="flex items-center bg-white/10 rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent px-4 py-2 text-sm w-full outline-none placeholder:text-gray-400"
            />
            <button className="bg-blue-600 hover:bg-blue-700 p-3 rounded-r-full m-1">
              <Send size={16} className="text-white" />
            </button>
          </div>

          <p className="text-xs text-gray-400 mt-2">
            We respect your privacy
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2025 Social Blog Platform. All rights reserved.</p>

          <div className="flex gap-4">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <span>•</span>  
            <Link href="#" className="hover:text-white">Terms of Service</Link>
            <span>•</span>
            <Link href="#" className="hover:text-white">Cookies</Link>
            <span>•</span>
            <Link href="#" className="hover:text-white">Powered by Readdy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
