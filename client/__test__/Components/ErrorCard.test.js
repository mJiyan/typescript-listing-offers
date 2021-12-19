import React from 'react';
import { ErrorCard } from '../../src/components';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import defaultState from '../Mock/defaulState';
import 'jsdom-global/register'; //at the top of file , even  , before importing react
import toJson from 'enzyme-to-json'; //added this line

const mockStore = configureMockStore([thunk]);
const store = mockStore(defaultState);

const wrapper = mount(
  <Provider store={store}>
    <ErrorCard />
  </Provider>,
);

describe('rendering components', () => {
  test('it should match with the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('it should contain with the header', () => {
    const header = (
      <h2 className="mt-8 uppercase text-xl font-black">We're sorry, but something went wrong.</h2>
    );
    expect(wrapper.contains(header)).toEqual(true);
  });
});
