import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ActionCreator from '../../store/action-creator/action-creator';
import {getCities} from '../../store/reducers/citiesReducer/selectors';
import {getCurrentCity} from '../../store/reducers/currentCityReducer/selectors';

const CitiesList = (props) => {
  const {cities, currentCity, onClick} = props;
  const list = cities.map((city) => {
    if (city === currentCity) {
      return (
        <li className="locations__item" key={city}>
          <a className="locations__item-link tabs__item tabs__item--active">
            <span>{city}</span>
          </a>
        </li>
      );
    } else {
      return (
        <li className="locations__item" key={city}>
          <a className="locations__item-link tabs__item" href="#" onClick={() => onClick(city)}>
            <span>{city}</span>
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

CitiesList.propTypes = {
  currentCity: PropTypes.string.isRequired,
  cities: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
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

