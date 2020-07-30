import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';
import {IPlace} from '../../types/place';

interface NearPlaceCardProps {
  key: number,
  place: IPlace,
  onCardHover: () => void,
  onCardUnhover: () => void,
  styleObject: object
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
