// components/RelatedBlogs.tsx
"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchRelatedBlogs } from "@/redux/slices/relatedBlogsSlice";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";
import placeHolderBlog from "/public/images/placeHolderBlog.jpg"; // Import placeholder image

const RelatedBlogs = ({ blogId }: { blogId: string }) => {
  const dispatch = useAppDispatch();
  const { blogs, status, error } = useAppSelector((state) => state.relatedBlogs);

  useEffect(() => {
    dispatch(fetchRelatedBlogs(blogId));
  }, [dispatch, blogId]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error loading related blogs: {error}</p>;
  }

  return (
    <div className="p-4">
      {blogs.length === 0 ? (
        <p>No related blogs found.</p>
      ) : (
        <div className="space-y-4">
          {blogs.map(blog => (
            <div key={blog._id} className="border rounded-md p-4">
              {/* Blog Image */}
              <Image
                src={blog.image || placeHolderBlog}
                alt={blog.title}
                width={600}
                height={300}
                className="object-cover w-full h-48"
              />

              {/* Blog Title */}
              <h2 className="text-xl font-bold mt-2">{blog.title}</h2>

              {/* Author and Date */}
              <div className="flex items-center mt-2">
                <Image
                  src={blog.author.image || placeHolderBlog}
                  alt={blog.author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <p className="ml-2 text-sm text-gray-500">
                  {blog.author.name} | {new Date(blog.createdAt).toLocaleDateString()}
                </p>
              </div>

              {/* Tags */}
              <p className="mt-2 text-sm text-gray-600">{blog.tags.join(', ')}</p>

              {/* Short Description */}
              <p className="mt-2 text-gray-700">{blog.description.substring(0, 100)}...</p>

              {/* Footer */}
              <div className="flex justify-between items-center mt-4 border-t pt-2">
                <div className="flex items-center">
                  <FaHeart className="text-red-500" />
                  <span className="ml-1 text-sm">{blog.likes} Likes</span>
                </div>
                <Link href={`/blogs/${blog._id}`} className="text-blue-500 hover:underline">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RelatedBlogs;
