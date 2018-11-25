import axios from 'axios';
import { SET_POWERS } from './powersConstants';

const url = '/powers';
const setPowers = powers => ({ type: SET_POWERS, powers });


export const fetchPowers = () => dispatch => {
  axios.get(url)
    .then(response => {
      dispatch(setPowers(response.data));
    })
    .catch(error => { throw error; })
};
