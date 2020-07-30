import React from 'react';
import PlaceCard from '../place-card/place-card';
import {IPlace} from '../../types/place';

interface CitiesPlaceCardProps {
  key: number,
  place: IPlace,
  onCardHover: (place: IPlace) => void,
  onCardUnhover: () => void,
  styleObject: object,
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
