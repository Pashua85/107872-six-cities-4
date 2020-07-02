import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeCityAction, getPlacesAction} from '../../action-creators/action-creators';

const CitiesList = (props) => {
  const {cities, city, onClick} = props;
  const list = cities.map((c) => {
    if (c.cityName === city) {
      return (
        <li className="locations__item" key={c.id}>
          <a className="locations__item-link tabs__item tabs__item--active">
            <span>{c.cityName}</span>
          </a>
        </li>
      );
    } else {
      return (
        <li className="locations__item" key={c.id}>
          <a className="locations__item-link tabs__item" href="#" onClick={() => onClick(c.cityName)}>
            <span>{c.cityName}</span>
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
  city: PropTypes.string.isRequired,
  cities: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  city: state.city,
  cities: state.cities
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (city) => {
    dispatch(changeCityAction(city));
    dispatch(getPlacesAction(city));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
export {CitiesList};

