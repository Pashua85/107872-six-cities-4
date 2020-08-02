import React from 'react';
import {connect} from 'react-redux';
import CitiesPlaceCardList from '../cities-place-card-list/cities-place-card-list';
import CitiesMap from '../cities-map/cities-map';
import CitiesList from '../cities-list/cities-list';
import PlacesSorting from '../places-sorting/places-sorting';
import EmptyMain from '../empty-main/empty-main';
import Header from '../header/header';
import {getCurrentCity} from '../../store/reducers/current-city-reducer/selectors';
import {getCityOffers} from '../../store/reducers/offersReducer/selectors';
import {IPlace, ICity, IStore} from '../../types/types';

interface MainProps {
  places: IPlace[],
  city: ICity
}

const Main: React.FC<MainProps> = (props) => {
  const {places, city} = props;
  const placesAmount = places.length;

  return (
    <div className="page page--gray page--main">

      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList />
        </div>
        <div className="cities">
          {
            placesAmount > 0 &&
            (
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{placesAmount} places to stay in {city.name}</b>
                  <PlacesSorting />
                  <CitiesPlaceCardList />
                </section>
                <div className="cities__right-section">
                  <CitiesMap />
                </div>
              </div>
            )
          }
          {
            placesAmount === 0 &&
            (
              <EmptyMain />
            )
          }
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state: IStore) => ({
  places: getCityOffers(state),
  city: getCurrentCity(state)
});

export default connect(mapStateToProps)(Main);
export {Main};

