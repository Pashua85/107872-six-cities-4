import React from 'react';
import PlaceCard from '../place-card/place-card';
import {IPlace} from '../../types/types';

interface NearPlaceCardProps {
  key: number,
  place: IPlace,
  onCardHover: () => void,
  onCardUnhover: () => void,
  styleObject: {opacity?: string}
}

const NearPlaceCard: React.FC<NearPlaceCardProps> = (props) => {
  return (
    <PlaceCard
      cardClass="near-places__card"
      imageClass="near-places__image-wrapper"
      {...props}
    />
  );
};


export default NearPlaceCard;
