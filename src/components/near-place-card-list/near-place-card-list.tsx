import React from 'react';
import {connect} from 'react-redux';
import {getOffersNearby} from '../../store/reducers/offers-nearby-reducer/selectors';
import PlaceCardList from '../place-card-list/place-card-list';
import {IPlace, IStore} from '../../types/types';

interface NearPlaceCardListProps {
  places: IPlace[]
}

const NearPlaceCardList: React.FC<NearPlaceCardListProps> = (props) => {
  return (
    <PlaceCardList className="near-places__list" {...props} />
  );
};

const mapStateToProps = (state: IStore) => ({
  places: getOffersNearby(state)
});

export default connect(mapStateToProps)(NearPlaceCardList);
export {NearPlaceCardList};
