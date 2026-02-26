import { Heart, MessageCircle ,Bookmark } from "lucide-react";

const BlogCard = ({
  image,
  category,
  title,
  description,
  authorName,
  authorAvatar,
  date,
  likes,
  comments,
  
}) => {
  return (
    <div className="group max-w-sm bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition">
      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <span className="absolute top-4 left-4 bg-white text-blue-600 text-xs font-semibold px-3 py-1 rounded-full shadow">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>

        <p className="text-gray-500 text-sm mt-3 border-b pb-2">{description}</p>

        {/* Footer */}
        <div className=" items-center justify-between  mt-6">
          {/* Author */}
          <div className="flex items-center gap-3">
            <img
              src={authorAvatar}
              className="w-9 h-9 rounded-full object-cover"
              alt={authorName}
            />
            <div>
              <p className="text-sm font-medium">{authorName}</p>
              <p className="text-xs text-gray-400">{date}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-4 text-gray-500 text-sm">
            <div className="flex items-center gap-1">
              <Heart size={16} />
              {likes}
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle size={16} />
              {comments}
            </div>
            <div className="flex items-center gap-1">
              <Bookmark size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
