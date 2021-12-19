import React from 'react';
import { Header } from '../../src/components';
import { mount  } from 'enzyme';
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
    <Header />
  </Provider>,
);          



describe('rendering components', () => {
  test('it should match with the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test('it should contain with the text', () => {
    const text = (
      <p className='px-5'> Rent a car</p>
    );
    expect(wrapper.contains(text)).toEqual(true);
  });
});
