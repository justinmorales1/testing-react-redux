import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

let component;

beforeEach(() => {
  component = mount(<CommentBox />);
}) 

it('has a text area and a button', () => {
  expect(component.find("textarea").length).toEqual(1);
  expect(component.find("button").length).toEqual(1);
});

// it('has a  button', () => {
//   expect(component.find("button").length).toEqual(1);
//   console.log(component.find("button").length);
// });

