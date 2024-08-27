'use client'
import { usePathname } from "next/navigation";

const BlogsList: React.FC = () => {
  const pathname = usePathname();
  
  // Extract the last part of the path to determine the page name
  const pageName = pathname.split('/').pop() || '';

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header and Actions Container */}
      <div className="flex space-x-80 items-center mb-6">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900">{pageName.charAt(0).toUpperCase() + pageName.slice(1)}</h1>

        {/* Search Bar and New Blog Button */}
        <div className="flex space-x-4 items-center">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search blogs..."
            className="border border-gray-300 rounded-full px-4 py-2"
          />

          {/* New Blog Button */}
          <button className="bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-900">
            + New Blog
          </button>
        </div>
      </div>

      {/* Blog List or Content */}
      <div>
        {/* Placeholder for blog content */}
        {/* Add your blog content or list here */}
      </div>
    </div>
  );
};

export default BlogsList;
