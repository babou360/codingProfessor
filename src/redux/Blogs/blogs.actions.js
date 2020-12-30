// import productsTypes from './products.types';
import blogsTypes from './blogs.types';

export const addBlogStart = blogData => ({
  // type: productsTypes.ADD_NEW_PRODUCT_START,
  type: blogsTypes.ADD_NEW_BLOG_START,
  payload: blogData
});

export const fetchBlogsStart = (filters={}) => ({
  // type: productsTypes.FETCH_PRODUCTS_START,
  type: blogsTypes.FETCH_BLOGS_START,
  payload: filters
});

export const setBlogs = blogs => ({
  type: blogsTypes.SET_BLOGS,
  payload: blogs
});

export const deleteBlogStart = blogID => ({
  type: blogsTypes.DELETE_BLOG_START,
  payload: blogID
});

export const fetchBlogStart = blogID => ({
  type: blogsTypes.FETCH_BLOG_START,
  payload: blogID
});

export const setBlog = blog => ({
  type: blogsTypes.SET_BLOG,
  payload: blog
});