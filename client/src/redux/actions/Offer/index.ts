import { Dispatch } from 'redux';
import apiCall from '../../../services/api';
import { HTTP } from '../../../services/constants';
import { OfferDispatchTypes, OFFERS_SUCCESS, OFFERS_FAIL, OFFERS_LOADING } from './types';

export const GetOffers = () => async (dispatch: Dispatch<OfferDispatchTypes>) => {
  try {
    // after function is called the loading is setting true in order to indicate that the function is triggered
    dispatch({ type: OFFERS_LOADING });
    const { data } = await apiCall('/offers', null, null, HTTP.GET, {});

    // if the request return data without error then it updates the state with the response
    dispatch({
      type: OFFERS_SUCCESS,
      payload: data,
    });
  } catch (e) {
    // if the request failed then it dispatch fail
    dispatch({
      type: OFFERS_FAIL,
    });
  }
};
