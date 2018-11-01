import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Foo from '../Foo';

describe('A suite', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<Foo />).contains(<div className="foo">Bar</div>)).toBe(true);
  });

  it('should be selectable by class "foo"', function() {
    expect(shallow(<Foo />).is('.foo')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<Foo />).find('.foo').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<Foo />).text()).toEqual('Bar');
  });
});


// import { shallow } from 'enzyme';
// import App from '../../client/src/components/App';

// describe('<DateMenu />', () => {
//   it('renders one DateMenu component', () => {
//     const wrapper = shallow(<DateMenu />);
//     expect(wrapper.find(App)).to.have.lengthOf(1);
//   });

// //   it('renders an `.icon-star`', () => {
// //     const wrapper = shallow(<MyComponent />);
// //     expect(wrapper.find('.icon-star')).to.have.lengthOf(1);
// //   });

// //   it('renders children when passed in', () => {
// //     const wrapper = shallow((
// //       <MyComponent>
// //         <div className="unique" />
// //       </MyComponent>
// //     ));
// //     expect(wrapper.contains(<div className="unique" />)).to.equal(true);
// //   });

// //   it('simulates click events', () => {
// //     const onButtonClick = sinon.spy();
// //     const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
// //     wrapper.find('button').simulate('click');
// //     expect(onButtonClick).to.have.property('callCount', 1);
// //   });
// });