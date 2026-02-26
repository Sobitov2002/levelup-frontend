"use client";

import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  Heart,
  MessageCircle,
  Bookmark,
} from "lucide-react";

const posts = [
  {
    title: "React Best Practices 2024",
    desc: "Key takeaways from building production React apps...",
    tags: ["React", "TypeScript", "Best Practices"],
    author: "Sarah Johnson",
    likes: 89,
    comments: 1,
    saves: 45,
    category: "Work",
    color: "bg-yellow-200",
  },
  {
    title: "CSS Grid Layout Cheatsheet",
    desc: "Quick reference for CSS Grid properties...",
    tags: ["CSS", "Grid", "Layout"],
    author: "Michael Chen",
    likes: 67,
    comments: 0,
    saves: 34,
    category: "Personal",
    color: "bg-blue-200",
  },
  {
    title: "API Design Principles",
    desc: "RESTful API design guidelines...",
    tags: ["API", "REST", "Backend"],
    author: "Emily Rodriguez",
    likes: 102,
    comments: 1,
    saves: 56,
    category: "Important",
    color: "bg-green-200",
  },
  {
    title: "React Best Practices 2024",
    desc: "Key takeaways from building production React apps...",
    tags: ["React", "TypeScript", "Best Practices"],
    author: "Sarah Johnson",
    likes: 89,
    comments: 1,
    saves: 45,
    category: "Work",
    color: "bg-yellow-200",
  },
  {
    title: "CSS Grid Layout Cheatsheet",
    desc: "Quick reference for CSS Grid properties...",
    tags: ["CSS", "Grid", "Layout"],
    author: "Michael Chen",
    likes: 67,
    comments: 0,
    saves: 34,
    category: "Personal",
    color: "bg-blue-200",
  },
  {
    title: "API Design Principles",
    desc: "RESTful API design guidelines...",
    tags: ["API", "REST", "Backend"],
    author: "Emily Rodriguez",
    likes: 102,
    comments: 1,
    saves: 56,
    category: "Important",
    color: "bg-green-200",
  },
];

const Banner = () => {
  const [selected, setSelected] = useState("All Notes");
  const [searchTerm, setSearchTerm] = useState("");

  const options = ["All Notes", "Personal", "Work", "Important"];

  // FILTER LOGIC
  const filteredPosts = posts.filter((post) => {
    const matchCategory =
      selected === "All Notes" || post.category === selected;

    const matchSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.desc.toLowerCase().includes(searchTerm.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div>
      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-[#F59E0B] to-[#F97316]">
        <div className="container mx-auto py-16 px-6">
          <h1 className="text-5xl font-bold text-white mb-4">
            Explore Amazing Stories
          </h1>

          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Discover stories, thinking, and expertise from writers on any topic.
          </p>

          {/* SEARCH + DROPDOWN */}
          <div className="flex flex-col md:flex-row gap-4 max-w-3xl">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Dropdown */}
            <div className="relative w-48">
              <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="appearance-none w-full px-6 py-4 rounded-2xl bg-gray-100 text-gray-800 font-medium shadow-md focus:outline-none"
              >
                {options.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <ChevronDown
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none"
                size={20}
              />
            </div>
          </div>
        </div>
      </div>

      {/* POSTS GRID */}
      <div className="min-h-screen bg-gray-100 py-12 px-6">
        {filteredPosts.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No posts found.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredPosts.map((post, index) => (
              <div
                key={index}
                className={`${post.color} rounded-2xl p-6 shadow-md hover:shadow-xl transition`}
              >
                <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                <p className="text-gray-700 mb-4">{post.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-white/50 px-3 py-1 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium">{post.author}</span>
                  <div className="flex gap-4">
                    <div className="flex gap-4 text-gray-700">
                      <div className="flex items-center gap-1 hover:text-red-500 cursor-pointer transition">
                        <Heart size={16} />
                        <span>{post.likes}</span>
                      </div>

                      <div className="flex items-center gap-1 hover:text-blue-500 cursor-pointer transition">
                        <MessageCircle size={16} />
                        <span>{post.comments}</span>
                      </div>

                      <div className="flex items-center gap-1 hover:text-yellow-600 cursor-pointer transition">
                        <Bookmark size={16} />
                        <span>{post.saves}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
