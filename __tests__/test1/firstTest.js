/*eslint-disable */

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../../client/src/components/App.jsx';
import PartySizeMenu from '../../client/src/components/PartySizeMenu'

describe("Testing App component", function() {
    const wrapper = shallow(<App />);
  it("should render App component ", function() {
    // console.log(
    //   wrapper
    //     .find("#masterContainer")
    //     .children()
    //     .debug()
    // );
    expect(wrapper.find("#masterContainer").children()).toHaveLength(2);
  });
  it('should have a className of menu-border', () => {
    expect(wrapper.hasClass('menu-border'));
  });
  it('should have a state Calendar', () => {
    expect(wrapper.state('Calendar')).toBe(false);
  });
});

describe('PartySizeMenu component', () => {
//   beforeEach(() => {
//     document = {
//       ...document,
//       addEventListener: () => { },
//       removeEventListener: () => { }
//     }
//   })
//   const wrapper = shallow(<PartySizeMenu />);
//     it("should render PartySizeMenu component ", function() {
//     expect(wrapper.hasClass('dd-list-item'));


// });
//
it("on component mount we set the keydown listener", () => {
        document.addEventListener = jest.fn();
        wrapper = shallow(<PartySizeMenu />);
        expect(document.addEventListener).toHaveBeenCalled();
    });
});































 



// import React from 'react';
// import {
//   shallow, mount, render
// } from 'enzyme';

// import App from './components/App';
// import Rating from './components/Rating';
// // import { getRating, loadReviews } from './components/ajax';

// describe('Testing App component', () => {
//   it('title bar should render', () => {
//     const wrapper = mount(<App />);
//     expect(wrapper.contains(<b>FAN REVIEWS</b>)).toBe(true);
//     expect(wrapper.find('.title-bar')).toHaveLength(1);
//   });
// });

// describe('Testing Rating component', () => {
//   const wrapper = shallow(<Rating stars={1.5}/>);
//   it('colored stars should render', () => {
//     expect(wrapper.find('span.checked')).toHaveLength(5);
//   });
//   it('all stars should render', () => {
//     expect(wrapper.find('span.fa-star')).toHaveLength(10);
//   });
// });