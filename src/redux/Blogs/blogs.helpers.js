import { firestore } from './../../firebase/utils';

export const handleAddBlog = blog => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('blogs')
      .doc()
      .set(blog)
      .then(() => {
        resolve();
      })
      .catch(err => {
        reject(err);
      })
  });
}


export const handleFetchBlogs = () => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('blogs')
      // .orderBy('timestamp' ,'desc')
      .get()
      .then(snapshot => {
        const productsArray = snapshot.docs.map(doc => {
          return {
            ...doc.data(),
            documentID: doc.id
          }
        });
        resolve(productsArray);
      })
      .catch(err => {
        reject(err);
      })
  })
}

export const handleDeleteBlog = documentID => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('blogs')
      .doc(documentID)
      .delete()
      .then(() => {
        console.log(documentID, 2)
        resolve();
      })
      .catch(err => {
        reject(err);
      })
  });
}

export const handleFetchBlog = blogID => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('blogs')
      .doc(blogID)
      .get()
      .then(snapshot => {
        if(snapshot.exists){
          resolve(snapshot.data())
        }
      }).catch(err => {
        reject(err);
      })
  })
}

// export const handleFetchBlog = (blogtID) => {
//   return new Promise((resolve, reject) => {
//     firestore
//       .collection('blogs')
//       .doc(blogtID)
//       .get()
//       .then(snapshot => {

//         if (snapshot.exists) {
//           resolve({
//             ...snapshot.data(),
//             documentID: blogtID
//           });
//         }
//       })
//       .catch(err => {
//         reject(err);
//       })
//   })
// }