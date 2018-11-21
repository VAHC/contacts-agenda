import { FETCH_POWERS_SUCCESS } from './powerConstants';
import axios from 'axios';

const fetchPowersSuccess = powers => ({ type: FETCH_POWERS_SUCCESS, powers });

const baseUrl = '/powers';

export const fetchPowers = () => dispatch => {
  axios.get(baseUrl)
    .then(response => {
      dispatch(fetchPowersSuccess(response.data));
    })
    .catch(error => { throw error; })
};
