"use client";

import React, { useState } from "react";
import BlogCard from "./blogcard";
import { Search } from "lucide-react";

const categories = [
  "All",
  "Development",
  "Design",
  "Technology",
  "Backend",
  "Frontend",
  "Database",
];

const postsData = [
  {
    image: "tex.jpg",
    category: "Technology",
    title: "The Future of Web Development in 2025",
    description:
      "Exploring the latest trends and technologies shaping the future of web development.",
    authorName: "Sarah Chen",
    authorAvatar: "https://i.pravatar.cc/40?img=32",
    date: "2 days ago",
    likes: 234,
    comments: 45,
  },
  {
    image: "tex.jpg",
    category: "Design",
    title: "UI/UX Trends in Modern Apps",
    description:
      "How minimalism and accessibility are changing interface design.",
    authorName: "John Doe",
    authorAvatar: "https://i.pravatar.cc/40?img=12",
    date: "4 days ago",
    likes: 120,
    comments: 30,
  },
  {
    image: "tex.jpg",
    category: "Backend",
    title: "Node.js Performance Optimization",
    description:
      "Best practices to scale your backend services efficiently.",
    authorName: "Emily Clark",
    authorAvatar: "https://i.pravatar.cc/40?img=45",
    date: "1 week ago",
    likes: 98,
    comments: 12,
  },
];

const Banner = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // FILTER LOGIC
  const filteredPosts = postsData.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;

    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500">
        <div className="container mx-auto py-16 px-6">
          <h1 className="text-5xl font-bold text-white mb-4">
            Explore Amazing Stories
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Discover stories, thinking, and expertise from writers on any topic.
          </p>

          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      </div>

      {/* CATEGORY FILTER */}
      <div className="bg-white py-6">
        <div className="container mx-auto flex flex-wrap justify-start gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-50 text-gray-500 hover:bg-gray-200 hover:text-gray-950"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* BLOG GRID */}
      <div className="container mx-auto py-10">
        {filteredPosts.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            No posts found.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;