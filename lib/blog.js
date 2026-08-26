import blogs from '../data/blogs.json';

export const getAllBlogs = () => {
  return [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const getBlogBySlug = (slug) => {
  return blogs.find((blog) => blog.slug === slug) ?? null;
};

export const formatBlogDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
