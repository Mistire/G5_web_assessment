// app/blogs/[id]/page.tsx
import BlogDetail from '@/components/BlogDetail';
import RelatedBlogs from '@/components/RealtedBlogs';

const BlogDetailPage = () => {
  return (
    <div>
      <BlogDetail />
      {/* <RelatedBlogs blogId={''}/> */}
    </div>
  );
};

export default BlogDetailPage;
