import React from 'react';
import PropTypes from 'prop-types';
import CitiesPlaceCard from '../cities-place-card/cities-place-card';
import NearPlaceCard from '../near-place-card/near-place-card';

class PlaceCardList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleCardHover = this.handleCardHover.bind(this);
    this.handleCardUnhover = this.handleCardUnhover.bind(this);

    this.state = {
      activeCard: null
    };
  }

  handleCardHover(place) {
    this.setState({
      activeCard: place
    });
  }

  handleCardUnhover() {
    this.setState({
      activeCard: null
    });
  }

  render() {
    const {places, className} = this.props;
    if (className === `cities__places-list`) {
      return (
        <div className={`${className} places__list tabs__content`}>
          {
            places.map((place) => (
              <CitiesPlaceCard
                key={place.id}
                place={place}
                onMouseEnter={this.handleCardHover}
                onMouseLeave={this.handleCardUnhover}
              />
            ))
          }
        </div>
      );
    } else if (className === `near-places__list`) {
      return (
        <div className={`${className} places__list`}>
          {
            places.map((place) => (
              <NearPlaceCard
                key={place.id}
                place={place}
                onMouseEnter={this.handleCardHover}
                onMouseLeave={this.handleCardUnhover}
              />
            ))
          }
        </div>
      );
    } else {
      return null;
    }
  }
}

PlaceCardList.propTypes = {
  places: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        propertyName: PropTypes.string.isRequired,
        propertyType: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]),
        propertyText: PropTypes.arrayOf(PropTypes.string),
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        isPremium: PropTypes.bool.isRequired,
        bedroomsAmount: PropTypes.number.isRequired,
        guestMax: PropTypes.number.isRequired,
        propertyItems: PropTypes.arrayOf(PropTypes.string),
        host: PropTypes.shape({
          name: PropTypes.string,
          avatar: PropTypes.string,
          isSuper: PropTypes.bool
        }).isRequired,
        titlePhoto: PropTypes.string.isRequired,
        photos: PropTypes.arrayOf(
            PropTypes.shape({
              title: PropTypes.string,
              id: PropTypes.string
            })
        ),
        reviews: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.string,
              userName: PropTypes.string,
              avatar: PropTypes.string,
              rating: PropTypes.number,
              text: PropTypes.string
            })
        ),
        coords: PropTypes.arrayOf(PropTypes.number).isRequired
      })
  ),
  className: PropTypes.string.isRequired
};

export default PlaceCardList;

