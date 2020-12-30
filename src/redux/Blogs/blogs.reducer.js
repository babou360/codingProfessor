// import productsTypes from './products.types';
// import productTypes from './products.types';

import blogsTypes from './blogs.types';
import blogTypes from './blogs.types';

const INITIAL_STATE = {
  blogs: [],
  blog: {},
};

const blogsReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case blogTypes.SET_BLOGS:
      return {
        ...state,
        blogs: action.payload
      }
    case blogsTypes.SET_BLOG:
      return {
        ...state,
        blog: action.payload
      }
    default:
      return state;
  }
};

export default blogsReducer;