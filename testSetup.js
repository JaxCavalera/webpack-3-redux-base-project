/* eslint-disable import/no-extraneous-dependencies */
import { shallow, mount, render } from 'enzyme';
import React from 'react';

global.React = React;
global.shallow = shallow;
global.mount = mount;
global.render = render;
