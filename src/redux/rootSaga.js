import { all, call } from 'redux-saga/effects';

import userSagas from './User/user.sagas';
import productsSagas from './Products/products.sagas';
import blogsSagas from './Blogs/blogs.sagas';

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(productsSagas),
    call(blogsSagas)
  ])
}