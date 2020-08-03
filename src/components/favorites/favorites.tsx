import React, {Dispatch} from 'react';
import Header from '../header/header';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import FavoritesPlaceCard from '../favorites-place-card/favorites-place-card';
import OffersOperation from '../../store/operations/offers-operation/offers-operation';
import {getCitiesWithFavoriteOffers} from '../../store/reducers/favorite-offers-reducer/selectors';
import {ICityWithFavoriteOffers, IStore} from '../../types/types';

export interface FavoritesProps {
  citiesWithFavoriteOffers: ICityWithFavoriteOffers[],
  onComponentMount: () => void,
}


class Favorites extends React.PureComponent<FavoritesProps> {

  componentDidMount(): void {
    this.props.onComponentMount();
  }

  render(): React.ReactNode {
    const {citiesWithFavoriteOffers} = this.props;

    if (citiesWithFavoriteOffers.length === 0) {
      return (
        <div className="page page--favorites-empty">
          <Header />

          <main className="page__main page__main--favorites page__main--favorites-empty">
            <div className="page__favorites-container container">
              <section className="favorites favorites--empty">
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
                </div>
              </section>
            </div>
          </main>
          <footer className="footer">
            <a className="footer__logo-link" href="main.html">
              <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
            </a>
          </footer>
        </div>
      );
    }

    return (
      <div className="page">
        <Header />

        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {
                  citiesWithFavoriteOffers.map((c) => (
                    <li className="favorites__locations-items" key={c.city}>
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href="#">
                            <span>{c.city}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {
                          c.offers.map((of) => (
                            <FavoritesPlaceCard
                              key={of.id}
                              place={of}
                              onCardHover={() => {}}
                              onCardUnhover={() => {}}
                            />
                          ))
                        }
                      </div>

                    </li>
                  ))
                }

              </ul>
            </section>
          </div>
        </main>
        <footer className="footer container">
          <Link className="footer__logo-link" to="/">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
          </Link>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state: IStore) => ({
  citiesWithFavoriteOffers: getCitiesWithFavoriteOffers(state)
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onComponentMount: () => {
    dispatch(OffersOperation.loadFavoriteOffers());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
export {Favorites};
