import axios from 'axios';
import {API_URL} from '@env';

export const get = async (setData, id) => {
  await axios
    .get(`${API_URL}/${id}`)
    .then(req => {
      setData(req.data);
    })
    .catch(err => {
      console.log(err);
    });
};
