import React from 'react';
import {connect} from 'react-redux';
import {getOffersNearby} from '../../store/reducers/offers-nearby-reducer/selectors';
import MapComponent from '../map-component/map-component';
import {IPlace, ICity, IStore} from '../../types/types';

interface PropertyMapProps {
  places: IPlace[],
  currentPlace: IPlace,
  city: ICity
}

const PropertyMap: React.FC<PropertyMapProps> = (props) => {
  const {places, currentPlace, city} = props;

  return (
    <MapComponent className="property__map" places={places} currentPlace={currentPlace} city={city} />
  );
};

const mapStateToProps = (state: IStore) => ({
  places: getOffersNearby(state)
});

export default connect(mapStateToProps)(PropertyMap);
export {PropertyMap};

