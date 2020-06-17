import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';


class PlaceCardList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };
  }

  render() {
    const {places} = this.props;
    const list = places.map((place) => {
      return (
        <PlaceCard place={place} key={place.id} onCardHover={() => {}}/>
      );
    });
    return list;
  }
}

PlaceCardList.propTypes = {
  places: PropTypes.arrayOf(
      PropTypes.shape({
        propertyName: PropTypes.string.isRequired,
        propertyType: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        isPremium: PropTypes.bool.isRequired,
        picture: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
      })
  )
};

export default PlaceCardList;

