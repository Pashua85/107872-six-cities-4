import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeCityAction, getPlacesAction} from '../../action-creators/action-creators';

const CitiesList = (props) => {
  const {cityNames, city, onClick} = props;
  const list = cityNames.map((cityName) => {
    if (cityName === city) {
      return (
        <li className="locations__item" key={cityName}>
          <a className="locations__item-link tabs__item tabs__item--active">
            <span>{cityName}</span>
          </a>
        </li>
      );
    } else {
      return (
        <li className="locations__item" key={cityName}>
          <a className="locations__item-link tabs__item" href="#" onClick={() => onClick(cityName)}>
            <span>{cityName}</span>
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
  cityNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  city: state.city,
  cityNames: state.cityNames
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (city) => {
    dispatch(changeCityAction(city));
    dispatch(getPlacesAction(city));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
export {CitiesList};

