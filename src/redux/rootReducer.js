import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './User/user.reducer';
import productsReducer from './Products/products.reducer';
import blogsReducer from './Blogs/blogs.reducer';
import cartReducer from './Cart/cart.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  productsData: productsReducer,
  blogsData: blogsReducer,
  cartData: cartReducer
});

const configStorage = {
  key: 'root',
  storage,
  whitelist: ['cartData']
};

export default persistReducer(configStorage, rootReducer);
