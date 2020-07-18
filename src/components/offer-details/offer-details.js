import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ReviewsList from '../reviews-list/reviews-list';
import PropertyMap from '../property-map/property-map';
import NearPlaceCardList from '../near-place-card-list/near-place-card-list';
import Header from '../header/header';
import ReviewForm from '../review-form/review-form';
import {getOfferByParamsId} from '../../store/reducers/offersReducer/selectors';
import {getOffersNearby} from '../../store/reducers/offers-nearby-reducer/selectors';
import {getComments} from '../../store/reducers/commentsReducer/selectors';
import {getAuthStatus} from '../../store/reducers/authStatusReducer/selectors';
import {AUTH_STATUS} from '../../store/reducers/authStatusReducer/authStatusReducer';

const OfferDetails = (props) => {
  const {
    propertyName,
    photos,
    isPremium,
    rating,
    propertyType,
    bedroomsAmount,
    guestMax,
    price,
    propertyItems,
    host,
    propertyText,
  } = props.place;
  const {nearPlaces, place, reviews, authStatus} = props;

  const reviewsAmount = reviews.length;
  const ratingStyle = {
    width: `${Math.floor(rating) * 20}%`
  };
  let propertyTypeString;
  switch (propertyType) {
    case `room`:
      propertyTypeString = `Private room`;
      break;
    case `house`:
      propertyTypeString = `House`;
      break;
    case `hotel`:
      propertyTypeString = `Hotel`;
      break;
    default:
      propertyTypeString = `Apartment`;
  }

  return (
    <div className="page">

      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                photos.map((photo, i) => (
                  <div className="property__image-wrapper" key={i}>
                    <img className="property__image" src={`${photo}`} alt={photo} />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                isPremium ?
                  (
                    <div className="property__mark">
                      <span>Premium</span>
                    </div>
                  ) : null
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {propertyName}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use href="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={ratingStyle}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {propertyTypeString}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedroomsAmount} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {guestMax} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    propertyItems.map((item)=>(
                      <li className="property__inside-item" key={item}>
                        {item}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  {
                    host.isSuper ?
                      (
                        <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                          <img className="property__avatar user__avatar" src={`/${host.avatar}`} width="74" height="74" alt="Host avatar" />
                        </div>
                      ) : (
                        <div className="property__avatar-wrapper user__avatar-wrapper">
                          <img className="property__avatar user__avatar" src={`/${host.avatar}`} width="74" height="74" alt="Host avatar" />
                        </div>
                      )
                  }
                  <span className="property__user-name">
                    {host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {propertyText}
                  </p>

                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsAmount}</span></h2>
                {
                  reviews.length > 0 &&
                  <ReviewsList reviews={reviews} />
                }
                {/* {
                  authStatus === AUTH_STATUS.AUTH && */}
                <ReviewForm />
                {/* } */}
              </section>
            </div>
          </div>
          <div className="container">
            <PropertyMap currentPlace={place} city={place.city} places={nearPlaces} />
          </div>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <NearPlaceCardList places={nearPlaces} />
          </section>
        </div>
      </main>
    </div>
  );
};

OfferDetails.propTypes = {
  place: PropTypes.object.isRequired,
  nearPlaces: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
  authStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  place: getOfferByParamsId(state, ownProps.match.params.id),
  nearPlaces: getOffersNearby(state),
  reviews: getComments(state),
  authStatus: getAuthStatus(state)
});

export default connect(mapStateToProps)(OfferDetails);
