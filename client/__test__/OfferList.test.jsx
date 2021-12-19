import React from 'react';
import { Offers } from '../src/views/';
import { mount, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { OfferType } from '../src/redux/actions/Offer/types';

const mockStore = configureMockStore([thunk]);
const initialState = {
  offer: {
    loading: false,
    offer: {
      prices: {
        totalPrice: {
          amount: {
            display: '',
            currency: '',
          },
        },
      },
      splashImages: [
        {
          narrowMedium: '',
        },
      ],

      headlines: {
        description: '',
      },
    },
    error: false,
  },
  offers: [
    {
      prices: {
        totalPrice: {
          amount: {
            display: '209,96',
            currency: 'EUR',
          },
        },
      },
      splashImages: [
        {
          narrowMedium: 'https://cdn.sixt.io/fleet/images/750x640/audi-a3-4d-mf-01.jpg',
        },
      ],

      headlines: {
        description: 'Audi A3 Sedan',
      },
    },
  ],
};

const store = mockStore(initialState);

describe('rendering components', () => {
  test('it should have the header', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Offers />
      </Provider>,
    );
    const header = <h3>Blog List</h3>;
    expect(wrapper.contains(header)).toEqual(true);
  });
});
