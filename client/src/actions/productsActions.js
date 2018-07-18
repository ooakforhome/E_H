import { FETCH_PRODUCTS, NEW_POST, FETCH_ONE, UPDATE_POST, FETCH_IMG, NEW_IMG, ALL_IMG } from './types'

import axios from 'axios';

export const fetchProducts = () => dispatch => {
  axios.get('/api/products')
  .then(res => res.data)
  .then(posts =>
    dispatch({
      type: FETCH_PRODUCTS,
      payload: posts
    })
  );
};

export const fetchOne = id => dispatch => {
  axios.get("/api/products/" + id)
  .then(res => res.data)
  .then(post =>
    dispatch({
      type: FETCH_ONE,
      payload: post
    })
  );
};

export const createPost = postData => dispatch => {
  axios.post("/api/products", postData)
    .then(res => res.data)
    .then(post =>
      dispatch ({
        type: NEW_POST,
        payload: post
      })
    )
  return window.location = '/newproductform'
};


export const updateProduct = (id, info)=> dispatch => {
  axios.put("/api/products/" + id, info)
  .then(res => res.data)
  .then(post =>
    dispatch ({
        type: UPDATE_POST,
        payload: post
    })
  );
};

export const fetchimgs = () => dispatch => {
  axios.get('/api/uploadImg')
  .then(res => res.data)
  .then(posts =>
    dispatch({
      type: FETCH_IMG,
      payload: posts
    })
  );
};

export const uploadimg = postData => dispatch => {
  axios.post("/api/uploadImg", postData)
    .then(res => res.data)
      .then(post =>
        dispatch ({
          type: NEW_IMG,
          payload: post
        })
      )
    return window.location = '/allproductpage'
};

export const loadImg = () => dispatch => {
  axios.get('/api/files')
    .then(res => res.data)
      .then(posts =>
        dispatch({
          type: ALL_IMG,
          payload: posts
        })
    );
};

// testing for product with image
  //insert photo
// export const createProImg = (postData,photo) => dispatch => {
//   axios.post("/api/products/", postData)
//     .then( info => info.data)
//     .then( post =>
//       dispatch ({
//         type: NEW_POSTIMG,
//         payload: post
//       })
//     )
//     return console.log("complete");
// };
