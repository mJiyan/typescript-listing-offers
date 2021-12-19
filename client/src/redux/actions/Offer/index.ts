import { Dispatch } from 'redux';
import apiCall from '../../../services/api';
import { HTTP } from '../../../services/constants';
import { OfferDispatchTypes, OFFERS_SUCCESS, OFFERS_FAIL, OFFERS_LOADING } from './types';

export const GetOffers = () => async (dispatch: Dispatch<OfferDispatchTypes>) => {
  try {
    dispatch({ type: OFFERS_LOADING });
    const { data } = await apiCall('/offers', null, null, HTTP.GET, {});
    dispatch({
      type: OFFERS_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: OFFERS_FAIL,
    });
  }
};
