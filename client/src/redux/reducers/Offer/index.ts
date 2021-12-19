import {
  OfferType,
  OfferDispatchTypes,
  OFFERS_SUCCESS,
  OFFERS_FAIL,
  OFFERS_LOADING,
} from '../../actions/Offer/types';

interface DefaultStateI {
  loading: boolean;
  offer?: Array<OfferType>;
  error?: boolean;
}

const defaultState: DefaultStateI = {
  loading: false,
  error: false
};

const offerReducer = (
  state: DefaultStateI = defaultState,
  action: OfferDispatchTypes,
): DefaultStateI => {
  switch (action.type) {
    case OFFERS_FAIL:
      return {
        loading: false,
        error: true
      };
    case OFFERS_LOADING:
      return {
        loading: true,
      };
    case OFFERS_SUCCESS:
      return {
        loading: false,
        offer: action.payload,
      };
    default:
      return state;
  }
};

export default offerReducer;
