import React from 'react';
import {connect} from 'react-redux';
import MapComponent from '../map-component/map-component';
import {getCityOffers} from '../../store/reducers/offersReducer/selectors';
import {getActiveOffer} from '../../store/reducers/activeOfferReducer/selectors';
import {getCurrentCity} from '../../store/reducers/currentCityReducer/selectors';
import {IPlace} from '../../types/place';
import {ICity} from '../../types/city';
import {IStore} from '../../types/store';

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
