import { FETCH_ACCENT } from './types'
import axios from 'axios';

export const fetchAccent = () => dispatch => {
  axios.get('/api/product/accentfurniture')
  .then(res => res.data)
  .then(items =>
    dispatch({
      type: FETCH_ACCENT,
      payload: items
    })
  );
};
