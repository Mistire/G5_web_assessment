'use client';

import Image from 'next/image';
import { format } from 'date-fns';
import DOMPurify from 'dompurify';
import Link from 'next/link';

// Import the placeholder image
import placeholderImage from '@/public/images/placeHolderBlog.jpg';

interface Blog {
  _id: string;
  image: string | null;
  title: string;
  description: string;
  author: {
    name?: string;
    image?: string;
    email?: string;
  } | null;
  tags: string[];
}

const defaultImage = placeholderImage; // Use the imported image

const BlogCard: React.FC<{ blog: Blog }> = ({ blog }) => {
  const authorImage = blog.author?.image || defaultImage;
  const blogImage = blog.image || defaultImage;
  const authorName = blog.author?.name || 'Unknown Author';
  const authorRole = 'SOFTWARE ENGINEER'; // Default role
  const formattedDate = format(new Date(), 'MMM d, yyyy'); // Adjust the date format as needed

  return (
    <Link href={`/blogs/${blog._id}`}>
      <div className='border-t py-7'>
        <div className="flex flex-col sm:flex-row bg-white rounded-lg overflow-hidden">
          {/* Left Section */}
          <div className="flex-1 p-4 space-y-4">
            {/* Author Profile */}
            <div className="flex flex-col items-start space-y-2">
              <div className="flex items-center space-x-4">
                <Image
                  src={authorImage}
                  alt={authorName}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">
                    {authorName} <span className="text-gray-200">&#183;</span>{' '}
                    <span className='text-xs text-gray-400 font-light'>{formattedDate}</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1 font-[Montserrat]">{authorRole}</p>
                </div>
              </div>
            </div>

            {/* Blog Title and Description */}
            <div>
              <h2 className="text-2xl font-extrabold">{blog.title}</h2>
              <p
                className="text-sm font-light text-gray-700 mt-2"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.description) }}
              ></p>
            </div>

            {/* Tags */}
            <div className="mt-4">
              {blog.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map(tag => (
                    <span key={tag} className="bg-gray-200 text-gray-500 px-2 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full sm:w-1/3">
            <Image
              src={blogImage}
              alt={blog.title}
              width={450}
              height={296}
              className="object-cover w-full h-full rounded-md"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
