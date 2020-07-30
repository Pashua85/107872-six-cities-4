import React from 'react';
import PlaceCard from '../place-card/place-card';
import {IPlace} from '../../types/place';

interface FavoritesPlaceCardProps {
  key: number,
  place: IPlace,
  onCardHover: () => void,
  onCardUnhover: () => void
}

const FavoritesPlaceCard: React.FC = (props) => {
  return (
    <PlaceCard
      cardClass="favorites__card"
      imageClass="favorites__image-wrapper"
      {...props}
    />
  );
};

export default FavoritesPlaceCard;


