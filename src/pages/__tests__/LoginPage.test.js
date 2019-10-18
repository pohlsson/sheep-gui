import React from 'react';
import {assert, spy} from 'sinon';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {LoginPage} from "../LoginPage";

Enzyme.configure({adapter: new Adapter()});

describe('<LoginPage/>', () => {

  it('Sends default value credentials when log in button is pressed', () => {
    const props = {
      onLogin: spy(),
    };
    const wrapper = shallow(<LoginPage {...props} />);
    wrapper.find('.login-page_button').simulate('click');
    assert.calledWith(props.onLogin, {username: '', password: ''});
  });

  it('Sends credentials when username is given', () => {
    const props = {
      onLogin: spy(),
    };
    const wrapper = shallow(<LoginPage {...props} />);
    wrapper.find('.login-page_username-input').simulate('change', {target: {value: 'TestUser'}});

    wrapper.find('.login-page_button').simulate('click');

    assert.calledWith(props.onLogin, {username: 'TestUser', password: ''});
  });

  it('Sends credentials when password is given', () => {
    const props = {
      onLogin: spy(),
    };
    const wrapper = shallow(<LoginPage {...props} />);
    wrapper.find('.login-page_password-input').simulate('change', {target: {value: 'secret'}});

    wrapper.find('.login-page_button').simulate('click');

    assert.calledWith(props.onLogin, {username: '', password: 'secret'});
  });

  it('Sends credentials when username and password is given', () => {
    const props = {
      onLogin: spy(),
    };
    const wrapper = shallow(<LoginPage {...props} />);
    wrapper.find('.login-page_username-input').simulate('change', {target: {value: 'TestUser'}});
    wrapper.find('.login-page_password-input').simulate('change', {target: {value: 'secret'}});

    wrapper.find('.login-page_button').simulate('click');

    assert.calledWith(props.onLogin, {username: 'TestUser', password: 'secret'});
  });

});
