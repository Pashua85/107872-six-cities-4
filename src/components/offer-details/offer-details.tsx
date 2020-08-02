import React, { Dispatch } from 'react';
import {RouteComponentProps, withRouter} from 'react-router';
import {connect} from 'react-redux';
import ReviewsList from '../reviews-list/reviews-list';
import PropertyMap from '../property-map/property-map';
import NearPlaceCardList from '../near-place-card-list/near-place-card-list';
import Header from '../header/header';
import ReviewForm from '../review-form/review-form';
import {getOfferByParamsId} from '../../store/reducers/offersReducer/selectors';
import {getOffersNearby} from '../../store/reducers/offers-nearby-reducer/selectors';
import {getComments} from '../../store/reducers/commentsReducer/selectors';
import {getAuthStatus} from '../../store/reducers/auth-status-reducer/selectors';
import {AUTH_STATUS} from '../../store/reducers/auth-status-reducer/auth-status-reducer';
import OffersOperation from '../../store/operations/offers-operation/offers-operation';
import CommentsOperation from '../../store/operations/comments-operation/comments-operation';
import {IPlace, IReview, IStore} from '../../types/types';
import ActionCreator from '../../store/action-creator/action-creator';


type OfferDetailsProps = RouteComponentProps<any> & {
  place: null | IPlace,
  nearPlaces: IPlace[],
  reviews: IReview[],
  authStatus: string,
  onComponentMount: (id: string) => void,
  onComponentUpdate: (id: string) => void,
  onComponentUnmount: () => void
}

class OfferDetails extends React.PureComponent<OfferDetailsProps> {
  componentDidMount() {
    this.props.onComponentMount(this.props.match.params.id);
  }

  componentDidUpdate(prevProps: OfferDetailsProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.onComponentUpdate(this.props.match.params.id);
    }
  }

  componentWillUnmount() {
    this.props.onComponentUnmount();
  }

  render() {
    if (this.props.place === null) {
      return (<div></div>);
    }

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
    } = this.props.place;
    const {place, reviews, authStatus} = this.props;

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
                  {
                    authStatus === AUTH_STATUS.AUTH &&
                  <ReviewForm />
                  }
                </section>
              </div>
            </div>
            <div className="container">
              <PropertyMap currentPlace={place} city={place.city} />
            </div>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <NearPlaceCardList />
            </section>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state: IStore, ownProps: RouteComponentProps<any>) => ({
  place: getOfferByParamsId(state, ownProps.match.params.id),
  nearPlaces: getOffersNearby(state),
  reviews: getComments(state),
  authStatus: getAuthStatus(state)
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onComponentMount: (id: string) => {
    dispatch(OffersOperation.loadOffersNearby(id));
    dispatch(CommentsOperation.loadComments(id));
  },
  onComponentUpdate: (id: string) => {
    dispatch(OffersOperation.loadOffersNearby(id));
    dispatch(CommentsOperation.loadComments(id));
  },
  onComponentUnmount: () => {
    dispatch(ActionCreator.deleteOffersNearby());
    dispatch(ActionCreator.deleteComments());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OfferDetails));
export {OfferDetails};

