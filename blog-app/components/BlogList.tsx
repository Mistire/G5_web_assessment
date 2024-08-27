import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useEffect, useState } from 'react';
import { fetchBlogs } from '../redux/slices/blogSlice';
import BlogCard from './BlogCard';

const BlogList = () => {
  const dispatch = useAppDispatch();
  const blogs = useAppSelector((state) => state.blog.blogs);
  const status = useAppSelector((state) => state.blog.status);

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBlogs());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error loading blogs.</p>;
  }

  // Pagination Logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Calculate the range of page numbers to display
  const pageNumbersToShow = 5; // Number of page buttons to show at a time
  const startPage = Math.max(1, currentPage - Math.floor(pageNumbersToShow / 2));
  const endPage = Math.min(totalPages, startPage + pageNumbersToShow - 1);
  const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <div className="space-y-4">
        {currentBlogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center pt-20 space-x-2">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded bg-white text-blue-500 disabled:opacity-50"
        >
          Previous
        </button>

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`mx-1 px-3 py-1 border rounded ${
              currentPage === page ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded bg-white text-blue-500 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogList;
