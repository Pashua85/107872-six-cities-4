import React from 'react';
import {connect} from 'react-redux';
import PlaceCardList from '../place-card-list/place-card-list';
import {getSortedCityOffers} from '../../store/reducers/offersReducer/selectors';
import {getCurrentCity} from '../../store/reducers/currentCityReducer/selectors';
import {IPlace} from '../../types/place';
import {ICity} from '../../types/city';
import {IStore} from '../../types/store';

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
