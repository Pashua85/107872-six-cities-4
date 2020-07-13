import React from 'react';
import PropTypes from 'prop-types';
import CitiesPlaceCard from '../cities-place-card/cities-place-card';
import NearPlaceCard from '../near-place-card/near-place-card';
import ActionCreator from '../../store/action-creator/action-creator';
import {getActiveOffer} from '../../store/reducers/activeOfferReducer/selectors';
import {connect} from 'react-redux';

class PlaceCardList extends React.PureComponent {
  componentWillUnmount() {
    this.props.onMouseLeave();
  }

  render() {
    const {places, className, onMouseEnter, onMouseLeave, activeOffer} = this.props;
    if (className === `cities__places-list`) {
      return (
        <div className={`${className} places__list tabs__content`}>
          {
            places.map((place) => {
              if (place === activeOffer) {
                return (
                  <CitiesPlaceCard
                    key={place.id}
                    place={place}
                    onCardHover={onMouseEnter}
                    onCardUnhover={onMouseLeave}
                    styleObject={{opacity: `.6`}}
                  />
                );
              } else {
                return (
                  <CitiesPlaceCard
                    key={place.id}
                    place={place}
                    onCardHover={onMouseEnter}
                    onCardUnhover={onMouseLeave}
                    styleObject={{}}
                  />
                );
              }
            })
          }
        </div>
      );
    } else if (className === `near-places__list`) {
      return (
        <div className={`${className} places__list`}>
          {
            places.map((place) => {
              if (place === activeOffer) {
                return (
                  <NearPlaceCard
                    key={place.id}
                    place={place}
                    onCardHover={() => {}}
                    onCardUnhover={() => {}}
                    styleObject={{opacity: `.6`}}
                  />
                );
              } else {
                return (
                  <NearPlaceCard
                    key={place.id}
                    place={place}
                    onCardHover={() => {}}
                    onCardUnhover={() => {}}
                    styleObject={{}}
                  />
                );
              }
            })
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
  className: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  activeOffer: PropTypes.object
};

const mapStateToProps = (state) => ({
  activeOffer: getActiveOffer(state)
});

const mapDispatchToProps = (dispatch) => ({
  onMouseEnter: (place) => {
    dispatch(ActionCreator.setActiveOffer(place));
  },
  onMouseLeave: () => {
    dispatch(ActionCreator.setActiveOffer(null));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceCardList);
export {PlaceCardList};

