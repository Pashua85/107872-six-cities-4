import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Map from './map';
import places from '../../mock/test-offers';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`Map`, () => {
  it(`sould rendred correctly`, () => {
    const wrapper = mount(
        <Map places={places} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
