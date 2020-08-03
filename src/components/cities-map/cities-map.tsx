import React from 'react';
import {connect} from 'react-redux';
import MapComponent from '../map-component/map-component';
import {getCityOffers} from '../../store/reducers/offers-reducer/selectors';
import {getActiveOffer} from '../../store/reducers/active-offer-reducer/selectors';
import {getCurrentCity} from '../../store/reducers/current-city-reducer/selectors';
import {IPlace, ICity, IStore} from '../../types/types';

interface CitiesMapProps {
  places: IPlace[],
  activePlace: IPlace,
  currentCity: ICity
}

const CitiesMap: React.FC<CitiesMapProps> = (props) => {
  const {places, activePlace, currentCity} = props;
  const otherPlaces = places.filter((p) => p !== activePlace);

  return (
    <MapComponent className="cities__map" places={otherPlaces} currentPlace={activePlace} city={currentCity} />
  );
};

const mapStateToProps = (state: IStore) => ({
  places: getCityOffers(state),
  activePlace: getActiveOffer(state),
  currentCity: getCurrentCity(state)
});

export default connect(mapStateToProps)(CitiesMap);
export {CitiesMap};
