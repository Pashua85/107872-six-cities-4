import React from 'react';
import {RouteComponentProps, withRouter} from 'react-router';
import withFavoriteStatus from '../../hocs/with-favorite-status';
import {IPlace} from '../../types/types';

type PlaceCardProps = RouteComponentProps<any> & {
  place: IPlace,
  onCardHover: (place?: IPlace) => void,
  onCardUnhover: () => void,
  cardClass: string,
  imageClass: string,
  styleObject: object,
  onFavoriteClick: (id: string) => void,
}

const PlaceCard: React.FC<PlaceCardProps> = (props) => {
  const {propertyName, propertyType, price, isPremium, titlePhoto, rating, id, isFavorite} = props.place;
  const {onCardHover, onCardUnhover, cardClass, imageClass, styleObject, onFavoriteClick, history} = props;
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

  const ratingStyle = {
    width: `${Math.floor(rating) * 20}%`
  };

  const buttonClass = isFavorite ? `place-card__bookmark-button place-card__bookmark-button--active button` : `place-card__bookmark-button button`;
  const infoClass = cardClass === `favorites__card` ? `favorites__card-info place-card__info` : `place-card__info`;
  const imageWidth = cardClass === `favorites__card` ? `150` : `260`;
  const imageHeight = cardClass === `favorites__card` ? `110` : `200`;

  return (
    <article
      className={`${cardClass} place-card`}
      onMouseEnter={() => {
        onCardHover(props.place);
      }}
      onMouseLeave={() => {
        onCardUnhover();
      }}
      style={styleObject}
      onClick={() => {
        history.push(`/offer/${id}`);
      }}
    >
      {
        cardClass === `cities__place-card` && isPremium ? (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        ) : null
      }
      <div className={`${imageClass} place-card__image-wrapper`}>
        <img className="place-card__image" src={titlePhoto} width={imageWidth} height={imageHeight} alt="Place image" />
      </div>
      <div className={infoClass}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={buttonClass}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onFavoriteClick(id.toString());
            }}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={ratingStyle}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          {propertyName}
        </h2>
        <p className="place-card__type">{propertyTypeString}</p>
      </div>
    </article>
  );
};

export default withFavoriteStatus(withRouter(PlaceCard));
export {PlaceCard};


