import { combineReducers } from 'redux';
import offerReducer from './Offer';

const RootReducer = combineReducers({
  offer: offerReducer,
});

export default RootReducer;
