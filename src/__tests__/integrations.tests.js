import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(()=> {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{name: "Fetched One"},{name: "Fetched Two"}]
  });

});

afterEach(() => {
  moxios.uninstall();
})

it('can fetch a list of comments and display them', (done) => {
  // Render the entire app.
  const wrapped = mount (
    <Root>
      <App />
    </Root>
  )


  // Find the fetchCOmments button and click it.
  wrapped.find('.fetch-comments').simulate('click');
  
  // // We need a tiny delay to handle the moxios request. 
  // setTimeout(()=> {
  //   //Running update because we simulated a click so we need to basically rerender the app.
  //   wrapped.update();
  //   expect(wrapped.find('li').length).toEqual(2)

  //   //Once done is called them jest knows this test is complete.
  //   done();
  //   // Cleaning up after creating an element with a mount function.
  //   wrapped.unmount();
  // },100);

  // We need a tiny delay to handle the moxios request. 
  moxios.wait(()=> {
    //Running update because we simulated a click so we need to basically rerender the app.
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(2)

    //Once done is called them jest knows this test is complete.
    done();
    // Cleaning up after creating an element with a mount function.
    wrapped.unmount();
  });

})