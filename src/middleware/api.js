import axios from 'axios';
import {API} from '../actions/types';
import {apiStart, apiError, apiEnd} from '../actions/api';

const apiMiddleware = ({dispatch, getState}) => next => action => {
  next(action);

  if (action.type !== API) return;

  const {url, method, data, jwt, onSuccess, onFailure, label} = action.payload;
  const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data';

  //Set BASE URL
  axios.defaults.baseURL = 'http://10.80.15.2:3001/api/';

  //Set Headers
  const headers = {};
  headers['Content-Type'] = 'application/json';

  if (label) {
    dispatch(apiStart(label)); // Dispatch the start of request
  }

  axios
    .request({
      url,
      method,
      headers,
      [dataOrParams]: data,
    })
    .then(({data}) => {
      dispatch(onSuccess(data));
    })
    .catch(error => {
      dispatch(apiError(error));

      if (error.response) {
        dispatch(onFailure(error.response.data));
      }
    })
    .finally(() => {
      if (label) {
        dispatch(apiEnd(label));
      }
    });
};

export default apiMiddleware;
