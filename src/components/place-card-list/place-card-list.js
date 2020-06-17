import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';


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
    const {places} = this.props;
    const list = places.map((place) => {
      return (
        <PlaceCard
          place={place}
          key={place.id}
          onMouseEnter={this.handleCardHover}
          onMouseLeave={this.handleCardUnhover}
        />
      );
    });
    return (
      <div className="cities__places-list places__list tabs__content">
        {list}
      </div>
    );
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

