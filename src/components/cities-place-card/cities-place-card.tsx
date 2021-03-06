import React from 'react';
import PlaceCard from '../place-card/place-card';
import {IPlace} from '../../types/types';

interface CitiesPlaceCardProps {
  key: number,
  place: IPlace,
  onCardHover: (place: IPlace) => void,
  onCardUnhover: () => void,
  styleObject: {opacity?: string},
}

const CitiesPlaceCard: React.FC<CitiesPlaceCardProps> = (props) => {
  return (
    <PlaceCard
      cardClass="cities__place-card"
      imageClass="cities__image-wrapper"
      {...props}
    />
  );
};

export default CitiesPlaceCard;
