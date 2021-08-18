import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let component;

beforeEach(() => {
const initialState = {
  comments: ['Comments Number one', 'Comments Number two']
}

  component = mount(<Root initialState={initialState}><CommentList/></Root>)
})

it('creates one list item per comment', () => {
  expect(component.find('li').length).toEqual(2);
});

it('shows text from each comment is visible', () => {
  console.log(component.render().text())
  expect(component.render().text()).toContain('Comments Number one');
  expect(component.render().text()).toContain('Comments Number two');
})