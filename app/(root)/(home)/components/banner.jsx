import React from "react";
import { ArrowRight } from "lucide-react";
import {
  PenTool,
  Smartphone,
  Users,
  BarChart3,
  Lock,
  Bell,
} from "lucide-react";
import BlogCard from "./blogcard";
import ActionButton from "@/layout/ActionButton";

const banner = () => {
  return (
    <div className="">
      <section className=" container m-auto px-6 py-20">
        <div className="text-center  mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Everything You Need
          </h2>
          <p className="text-gray-500 mt-4">
            Powerful features designed to help you create, share, and grow your
            audience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-6 bg-gradient-to-br from-[#0f172a] to-[#020617] text-white rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <PenTool />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Rich Text Editor</h3>
              <p className="text-gray-300 leading-relaxed">
                Create beautiful content with our intuitive editor. Add images,
                format text, and bring your ideas to life.
              </p>
            </div>

            <button className="mt-8 text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all">
              Explore →
            </button>
          </div>

          <div className="md:col-span-3 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
              <Smartphone />
            </div>
            <h3 className="text-xl font-semibold">Mobile Ready</h3>
            <p className="text-sm mt-2 text-white/80">
              Access anywhere, anytime
            </p>

            <img
              src="phone.jpg"
              alt="mobile"
              className="absolute bottom-0 right-0 w-28 "
            />
          </div>
          <div className="md:col-span-2">
            <div className="md:col-span-2 bg-blue-50 rounded-3xl p-6 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-4">
                <Users size={18} />
              </div>
              <h4 className="font-semibold">Community</h4>
              <p className="text-sm text-gray-500 mt-1">
                Connect with creators
              </p>
            </div>
            <div className="md:col-span-2 bg-red-50 rounded-3xl p-6">
              <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center text-white mb-4">
                <BarChart3 size={18} />
              </div>
              <h4 className="font-semibold">Analytics</h4>
              <p className="text-sm text-gray-500 mt-1">Track your growth</p>
            </div>
          </div>

          <div className="md:col-span-3 bg-green-50 rounded-3xl p-6">
            <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white mb-4">
              <Lock size={18} />
            </div>
            <h4 className="font-semibold">Privacy</h4>
            <p className="text-sm text-gray-500 mt-1">Your data is safe</p>
          </div>

          <div className="md:col-span-3 bg-yellow-50 rounded-3xl p-6">
            <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center text-white mb-4">
              <Bell size={18} />
            </div>
            <h4 className="font-semibold">Notifications</h4>
            <p className="text-sm text-gray-500 mt-1">Stay updated</p>
          </div>

          <div className="md:col-span-5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl p-8 text-white flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold">Collaborate & Share</h3>
              <p className="text-sm text-white/80 mt-2">
                Work together with your team
              </p>
            </div>

            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/40?img=${i}`}
                  className="w-9 h-9 rounded-full border-2 border-white"
                />
              ))}
              <div className="w-9 h-9 rounded-full bg-black/30 flex items-center justify-center text-xs font-semibold">
                +99
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9FAFB] py-20">
        <div className=" container m-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-[#111827]  mb-4">
              Trending Stories
            </h1>
            <p className="text-xl text-[#6B7280] ">
              Discover amazing content from our community of creators
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BlogCard
              image="tex.jpg"
              category="Technology"
              title="The Future of Web Development in 2025"
              description="Exploring the latest trends and technologies shaping the future of web development."
              authorName="Sarah Chen"
              authorAvatar="https://i.pravatar.cc/40?img=32"
              date="2 days ago"
              likes={234}
              comments={45}
            />
            <BlogCard
              image="tex.jpg"
              category="Technology"
              title="The Future of Web Development in 2025"
              description="Exploring the latest trends and technologies shaping the future of web development."
              authorName="Sarah Chen"
              authorAvatar="https://i.pravatar.cc/40?img=32"
              date="2 days ago"
              likes={234}
              comments={45}
            />
            <BlogCard
              image="tex.jpg"
              category="Technology"
              title="The Future of Web Development in 2025"
              description="Exploring the latest trends and technologies shaping the future of web development."
              authorName="Sarah Chen"
              authorAvatar="https://i.pravatar.cc/40?img=32"
              date="2 days ago"
              likes={234}
              comments={45}
            />
            <BlogCard
              image="tex.jpg"
              category="Technology"
              title="The Future of Web Development in 2025"
              description="Exploring the latest trends and technologies shaping the future of web development."
              authorName="Sarah Chen"
              authorAvatar="https://i.pravatar.cc/40?img=32"
              date="2 days ago"
              likes={234}
              comments={45}
            />
            <BlogCard
              image="tex.jpg"
              category="Technology"
              title="The Future of Web Development in 2025"
              description="Exploring the latest trends and technologies shaping the future of web development."
              authorName="Sarah Chen"
              authorAvatar="https://i.pravatar.cc/40?img=32"
              date="2 days ago"
              likes={234}
              comments={45}
            />
            <BlogCard
              image="tex.jpg"
              category="Technology"
              title="The Future of Web Development in 2025"
              description="Exploring the latest trends and technologies shaping the future of web development."
              authorName="Sarah Chen"
              authorAvatar="https://i.pravatar.cc/40?img=32"
              date="2 days ago"
              likes={234}
              comments={45}
            />
          </div>
          <div className="mt-10 flex justify-center">
            <ActionButton
              text="View All Stories"
              href="/blog"
              variant="primary"
              icon={<ArrowRight size={18} />}
            />
          </div>
        </div>
      </section>

      <section className="bg-[#5865F0]">
        <div className="text-center container m-auto px-6 py-20">
          <h1 className="text-5xl font-bold text-white mb-6">Ready to Start Your Journey?</h1>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join our community today and share your unique voice with the world.
            It's free to get started!
          </p>
          <div className="flex items-center justify-center space-x-4">
            <ActionButton
              text="Create Free Account"
              href="/blog"
              variant="zoom"
            />

            <ActionButton text="Explore Content" href="/blog" variant="white" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default banner;
