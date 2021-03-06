import React, {Dispatch} from 'react';
import CitiesPlaceCard from '../cities-place-card/cities-place-card';
import NearPlaceCard from '../near-place-card/near-place-card';
import ActionCreator from '../../store/action-creator/action-creator';
import {getActiveOffer} from '../../store/reducers/active-offer-reducer/selectors';
import {connect} from 'react-redux';
import {IPlace, IStore} from '../../types/types';

interface PlaceCardListProps {
  places: IPlace[],
  className: string,
  onMouseEnter: (place: IPlace) => void,
  onMouseLeave: () => void,
  activeOffer: null | IPlace,
  onPageLeave: () => void
}

class PlaceCardList extends React.PureComponent<PlaceCardListProps> {
  componentWillUnmount(): void {
    this.props.onPageLeave();
  }

  render(): React.ReactNode {
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

const mapStateToProps = (state: IStore) => ({
  activeOffer: getActiveOffer(state)
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onMouseEnter: (place: IPlace) => {
    dispatch(ActionCreator.setActiveOffer(place));
  },
  onMouseLeave: () => {
    dispatch(ActionCreator.setActiveOffer(null));
  },
  onPageLeave: () => {
    dispatch(ActionCreator.setActiveOffer(null));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceCardList);
export {PlaceCardList};

