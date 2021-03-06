import React from 'react';
import PlaceCard from '../place-card/place-card';
import {IPlace} from '../../types/types';

interface FavoritesPlaceCardProps {
  key: number,
  place: IPlace,
  onCardHover: () => void,
  onCardUnhover: () => void
}

const FavoritesPlaceCard: React.FC<FavoritesPlaceCardProps> = (props) => {
  return (
    <PlaceCard
      cardClass="favorites__card"
      imageClass="favorites__image-wrapper"
      {...props}
    />
  );
};

export default FavoritesPlaceCard;


