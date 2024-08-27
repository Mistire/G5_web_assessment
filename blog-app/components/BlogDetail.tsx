// components/BlogDetail.tsx
"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchBlogDetail } from "@/redux/slices/blogDetailSlice";
import { useParams } from "next/navigation";
import Image from "next/image";
import DOMPurify from "dompurify";
import placeHolderBlog from "../public/Images/placeHolderBlog.jpg"; // Import placeholder image

const BlogDetail = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const blogId = params.id as string;
  const blog = useAppSelector((state) => state.blogDetail.blog);
  const status = useAppSelector((state) => state.blogDetail.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBlogDetail(blogId));
    }
  }, [status, dispatch, blogId]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error loading blog details.</p>;
  }

  if (!blog) {
    return <p>No blog found.</p>;
  }

  const defaultRole = "SOFTWARE ENGINEER";
  const authorRole = blog.author?.role || defaultRole;
  const authorEmail = blog.author?.email || "Email not available";
  const blogTags = blog.tags.join(" | "); // Joining tags with a pipe separator

  return (
    <div className="container mx-auto py-40">
      {/* Title and Reading Time */}
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold">{blog.title}</h1>
        <p className="text-sm text-gray-500 mt-2">{blogTags} | 6 min read</p>
      </div>

      {/* Blog Image */}
      <div className="flex justify-center mb-6">
        <Image
          src={blog.image}
          alt={blog.title}
          width={1200}
          height={600}
          className="object-cover"
        />
      </div>

      {/* Author Information */}
      <div className="flex justify-center items-center mb-4">
        <Image
          src={blog.author?.image || placeHolderBlog} // Use placeholder image if author image is not available
          alt={blog.author?.name || "Author"}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="ml-4 text-center">
          <p className="font-semibold">
            {blog.author?.name || "Unknown Author"}
          </p>
          <p className="text-sm text-gray-500">
            {authorRole} &#183; {authorEmail}
          </p>
        </div>
      </div>

      {/* Blog Description */}
      <div className="text-center px-36">
        <p
          className="text-lg text-left font-light text-gray-700"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(blog.description),
          }}
        ></p>
      </div>
    </div>
  );
};

export default BlogDetail;
