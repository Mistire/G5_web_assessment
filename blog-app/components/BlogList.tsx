import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useEffect, useState } from 'react';
import { fetchBlogs } from '../redux/slices/blogSlice';
import BlogCard from './BlogCard';

const BlogList = () => {
  const dispatch = useAppDispatch();
  const blogs = useAppSelector((state) => state.blog.blogs);
  const status = useAppSelector((state) => state.blog.status);
  const error = useAppSelector((state) => state.blog.error); // Get error from state

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;
  const maxPageButtons = 5; // Number of page buttons to show

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBlogs());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error loading blogs: {error}</p>; // Display error message
  }

  // Pagination Logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Calculate the range of page numbers to display
  const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
  const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-4">
      {/* Blog Cards */}
      <div className="space-y-4">
        {currentBlogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 border rounded ${
            currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-blue-500'
          }`}
        >
          Previous
        </button>

        {/* Page Number Buttons */}
        {startPage > 1 && (
          <>
            <button
              onClick={() => handlePageChange(1)}
              className={`px-4 py-2 ${
                currentPage === 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
              }`}
            >
              1
            </button>
            {startPage > 2 && <span className="px-4 py-2">...</span>}
          </>
        )}

        {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
          <button
            key={startPage + index}
            onClick={() => handlePageChange(startPage + index)}
            className={`px-4 py-2 border rounded ${
              currentPage === startPage + index ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
            }`}
          >
            {startPage + index}
          </button>
        ))}

        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <span className="px-4 py-2">...</span>}
            <button
              onClick={() => handlePageChange(totalPages)}
              className={`px-4 py-2 border rounded ${
                currentPage === totalPages ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
              }`}
            >
              {totalPages}
            </button>
          </>
        )}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 ${
            currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-blue-500'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogList;
