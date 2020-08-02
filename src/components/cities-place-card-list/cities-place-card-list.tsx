import React from 'react';
import {connect} from 'react-redux';
import PlaceCardList from '../place-card-list/place-card-list';
import {getSortedCityOffers} from '../../store/reducers/offersReducer/selectors';
import {getCurrentCity} from '../../store/reducers/current-city-reducer/selectors';
import {IPlace, ICity, IStore} from '../../types/types';

interface CititesPlaceCardListProps {
  places: IPlace[],
  city: ICity
}

const CitiesPlaceCardList: React.FC<CititesPlaceCardListProps> = (props) => {
  return (
    <PlaceCardList className="cities__places-list" {...props} />
  );
};

const mapStateToProps = (state: IStore) => ({
  city: getCurrentCity(state),
  places: getSortedCityOffers(state)
});

export default connect(mapStateToProps)(CitiesPlaceCardList);
export {CitiesPlaceCardList};
