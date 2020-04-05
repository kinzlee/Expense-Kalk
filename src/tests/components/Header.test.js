import React from 'react';
import {shallow} from 'enzyme';
// import ReactShallowRenderer from 'react-test-renderer/shallow'
import Header from '../../components/Header';

test('should render header appropriately', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();


    // expect(wrapper.find('h1').text()).toBe('Expense Kalk');
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header/>);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});