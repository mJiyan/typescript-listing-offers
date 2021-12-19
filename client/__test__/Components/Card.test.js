import React from 'react';
import { Card } from '../../src/components';
import { mount, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import defaultState from '../Mock/defaulState';
import fallBackImage from '../../assets/images/fallbackImage.png';
import toJson from 'enzyme-to-json'; //added this line
import 'jsdom-global/register'; //at the top of file , even  , before importing react

const mockStore = configureMockStore([thunk]);
const store = mockStore(defaultState);

const wrapper = mount(
  <Provider store={store}>
    <Card
      headlines={defaultState.offers[0].headlines}
      prices={defaultState.offers[0].prices}
      splashImages={defaultState.offers[0].splashImages}
    />
  </Provider>,
);

const wrapperUndefinedImage = mount(
  <Provider store={store}>
    <Card
      headlines={defaultState.offers[0].headlines}
      prices={defaultState.offers[0].prices}
      splashImages={undefined}
    />
  </Provider>,
);

const wrapperNullImage = mount(
  <Provider store={store}>
    <Card
      headlines={defaultState.offers[0].headlines}
      prices={defaultState.offers[0].prices}
      splashImages={null}
    />
  </Provider>,
);

describe('rendering components', () => {
  test('it should match with the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('it should have the description', () => {
    const header = <p className="text-orange-600 text-lg "> Audi A3 Sedan</p>;
    expect(wrapper.contains(header)).toEqual(true);
  });

  test('it should have the prices', () => {
    const text = (
      <p className="text-sm">
        209,96 EUR
      </p>
    );
    expect(wrapper.contains(text)).toEqual(true);
  });

  test('it should have the splashImages', () => {
    const image = <img className="w-full" src={'https://cdn.sixt.io/fleet/images/750x640/audi-a3-4d-mf-01.jpg'} />;
    expect(wrapper.contains(image)).toEqual(true);
  });

  test('it should have the fallBackImage', () => {
    const image = <img className="w-full" src={fallBackImage} />;
    expect(wrapperUndefinedImage.contains(image)).toEqual(true);
  });

  test('it should not have the splashImages nor fallBackImage', () => {
    const fallBackImages = <img className="w-full" src={fallBackImage} />;
    const splashImages = <img className="w-full" src={'https://cdn.sixt.io/fleet/images/750x640/audi-a3-4d-mf-01.jpg'} />;

    expect(wrapperNullImage.contains(fallBackImages)).toEqual(false);
    expect(wrapperNullImage.contains(splashImages)).toEqual(false);
  });
});
