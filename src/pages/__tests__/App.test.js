import React from 'react';
import {shallow} from 'enzyme';
import {App} from '../App';

describe('<App/>', () => {

  it('should render log in page', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('#login-page')).toHaveLength(1);
  });

  it('should render sheep management page', () => {
    const props = {
      loggedIn: true,
    };
    const wrapper = shallow(<App {...props} />);

    expect(wrapper.find('#sheep-management-page')).toHaveLength(1);
  });
});