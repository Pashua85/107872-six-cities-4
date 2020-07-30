import React from 'react';
import {connect} from 'react-redux';
import ActionCreator from '../../store/action-creator/action-creator';
import {getCities} from '../../store/reducers/citiesReducer/selectors';
import {getCurrentCity} from '../../store/reducers/currentCityReducer/selectors';
import {ICity} from '../../types/city';

interface CitiesListProps {
  cities: ICity[],
  currentCity: ICity,
  onClick: (city: ICity) => void
}

const CitiesList: React.FC<CitiesListProps> = (props) => {
  const {cities, currentCity, onClick} = props;

  const list = cities.map((city) => {
    if (city.name === currentCity.name) {
      return (
        <li className="locations__item" key={city.name}>
          <a className="locations__item-link tabs__item tabs__item--active">
            <span>{city.name}</span>
          </a>
        </li>
      );
    } else {
      return (
        <li className="locations__item" key={city.name}>
          <a className="locations__item-link tabs__item" href="#" onClick={() => onClick(city)}>
            <span>{city.name}</span>
          </a>
        </li>
      );
    }
  });
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {list}
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => ({
  currentCity: getCurrentCity(state),
  cities: getCities(state)
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (city) => {
    dispatch(ActionCreator.setCurrentCity(city));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
export {CitiesList};
