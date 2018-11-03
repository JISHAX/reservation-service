/**
 * @jest-environment jsdom
*/
import React from 'react';
import { shallow, mount, render } from 'enzyme';
// import App from '../../client/src/components/App.jsx';
import PartySizeMenu from '../../client/src/components/PartySizeMenu'

describe("Testing PartySizeMenu component", function() {
// window.document.addEventListener = jest.fn();
  it("should render App component ", function() {
let mock = jest.fn()
    const wrapper = shallow(<PartySizeMenu onClick={mock}/>);
  jest.mock('../../client/src/components/PartySizeMenu');
  console.log(wrapper.debug())
    expect(wrapper.props().className).toBe('dd-list-item');
    
  });

});


// jest.mock('../client/APICalls.js');

// Review.prototype.checkReviewLength = jest.fn();





    // console.log(
    //   wrapper
    //     .find("#masterContainer")
    //     .children()
    //     .debug()
    // );