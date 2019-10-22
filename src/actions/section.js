import {ALL_SECTIONS, ERROR_ALL_SECTIONS, GET_SECTIONS} from './types';
import {apiAction} from './api';

export const getSections = data =>
  apiAction({
    url: 'sections/',
    method: 'GET',
    data,
    onSuccess: data => (dispatch, getState) => {
      dispatch({type: ALL_SECTIONS, payload: data});
    },
    onFailure: err => (dispatch, getState) => {
      dispatch({type: ERROR_ALL_SECTIONS, payload: err});
    },
    label: GET_SECTIONS,
  });
