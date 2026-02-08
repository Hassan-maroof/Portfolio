import React from "react";
import "./Blogs.scss";
import { blogsInfo } from "../../portfolio";
import BlogCard from "../../components/blogs/BlogCard";

export default function Blogs() {
  if (!blogsInfo.display) return null;

  return (
    <div className="blogs-section" id="blogs">
      <h1 className="blogs-heading">Blogs</h1>

      <div className="blogs-card-container">
        {blogsInfo.blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
}
