import React from 'react';
import PropsTypes from 'prop-types';
import withSortingOpgions from '../../hocs/withSortingOptions';

const PlacesSorting = (props) => {
  const {isOptionsVisible, activeOption, options, onOptionClick, toggleVisibility} = props;
  const listClassName = isOptionsVisible ? `places__options places__options--custom places__options--opened` : `places__options places__options--custom`;


  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0" onClick={toggleVisibility}>
        {activeOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use href="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={listClassName}>
        {
          options.map((op) => {
            if (op === activeOption) {
              return (
                <li key={op} className="places__option places__option--active" tabIndex="0" onClick={() => onOptionClick(op)}>{op}</li>
              );
            } else {
              return (
                <li key={op} className="places__option" tabIndex="0" onClick={() => onOptionClick(op)}>{op}</li>
              );
            }
          })
        }
      </ul>
    </form>
  );
};

PlacesSorting.propTypes = {
  onOptionClick: PropsTypes.func.isRequired,
  isOptionsVisible: PropsTypes.bool.isRequired,
  activeOption: PropsTypes.string.isRequired,
  options: PropsTypes.arrayOf(PropsTypes.string).isRequired,
  toggleVisibility: PropsTypes.func.isRequired
};

export default withSortingOpgions(PlacesSorting);
export {PlacesSorting};
