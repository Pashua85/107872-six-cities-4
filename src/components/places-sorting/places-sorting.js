import React from 'react';
import PropsTypes from 'prop-types';
import {connect} from 'react-redux';
import {sortPlacesAction} from '../../action-creators/action-creators';

class PlacesSorting extends React.PureComponent {
  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);

    this.state = {
      isOptionsVisible: false,
      options: [`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`],
      activeOption: `Popular`
    };
  }

  toggleVisibility() {
    this.setState((prevState) => ({
      isOptionsVisible: !prevState.isOptionsVisible
    }));
  }

  handleOptionClick(option) {
    this.setState({
      activeOption: option
    });
    this.props.onOptionClick(option);
  }

  render() {
    const {isOptionsVisible, activeOption} = this.state;
    const listClassName = isOptionsVisible ? `places__options places__options--custom places__options--opened` : `places__options places__options--custom`;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex="0" onClick={this.toggleVisibility}>
          {activeOption}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use href="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={listClassName}>
          {
            this.state.options.map((op) => {
              if (op === activeOption) {
                return (
                  <li key={op} className="places__option places__option--active" tabIndex="0" onClick={() => this.handleOptionClick(op)}>{op}</li>
                );
              } else {
                return (
                  <li key={op} className="places__option" tabIndex="0" onClick={() => this.handleOptionClick(op)}>{op}</li>
                );
              }
            })
          }
        </ul>
      </form>
    );
  }
}

PlacesSorting.propTypes = {
  onOptionClick: PropsTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onOptionClick: (option) => {
    dispatch(sortPlacesAction(option));
  }
});

export default connect(null, mapDispatchToProps)(PlacesSorting);
export {PlacesSorting};
