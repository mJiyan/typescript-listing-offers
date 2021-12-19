import React from 'react';
import { Pagination } from '../../src/components';
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
    <Pagination
      totalPages={defaultState.totalPages}
      changePage={defaultState.changePage}
      page={defaultState.page}
    />
  </Provider>,
);

const lastPageWrapper = mount(
    <Provider store={store}>
      <Pagination
        totalPages={defaultState.totalPages}
        changePage={defaultState.changePage}
        page={defaultState.lastPage}
      />
    </Provider>,
  );

describe('rendering components', () => {
  test('it should match with the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('find next button', () => {
    const nextButton = wrapper.find('[data-testid="next-button"]');
    expect(nextButton.length).toEqual(1);
  });

  test('the prev button should be disabled at first page', () => {
    const prevButton = wrapper.find('[data-testid="prev-button"]');
    expect(prevButton.props().disabled).toEqual(true);
  });

  test('the next button should be disabled at last page', () => {
    const nextButton = lastPageWrapper.find('[data-testid="next-button"]');
    expect(nextButton.props().disabled).toEqual(true);
  });

  test('the list of buttons count should be match with the totalPage', () => {
    const buttonList = wrapper.find('[data-testid="list-page-buttons"]');
    expect(buttonList.children().length === (defaultState.totalPages + 2)).toEqual(true);
  });

//   test('simulate next button', () => {
//     const nextButton = wrapper.find('[data-testid="next-button"]');
//     nextButton.simulate('click');
//     expect(nextButton.length).toEqual(1);
//   });

//   test('simulate prev button', () => {
//     const prevButton = lastPageWrapper.find('[data-testid="prev-button"]');
//     prevButton.simulate('click');
//     expect(prevButton.length).toEqual(1);
//   });


//   test('simulate page button', () => {
//     const firstButton = wrapper.find('[data-testid="1-button"]');
//     firstButton.simulate('click');
//     expect(firstButton.length).toEqual(1);
//   });

});
