import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import MapComponent from './map-component';
import offers from '../../mock/test-offers';
import cities from '../../mock/test-cities';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`Map`, () => {
  it(`sould rendred correctly`, () => {
    const mockStore = configureStore([]);
    const store = mockStore({});

    const wrapper = mount(
        <Provider store={store}>
          <MapComponent
            places={offers}
            className={`ities__map`}
            currentPlace={null}
            onMarkerHover={() => {}}
            onMarkerUnhover={() => {}}
            city={cities[1]}
          />
        </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
