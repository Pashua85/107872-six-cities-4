import React from 'react';
import PropsTypes from 'prop-types';
import {connect} from 'react-redux';
import {sortPlacesAction} from '../action-creators/action-creators';

const withSortingOptions = (Component) => {
  class WithSortingOptions extends React.PureComponent {
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
      return (
        <Component
          {...this.props}
          options={this.state.options}
          isOptionsVisible={this.state.isOptionsVisible}
          activeOption={this.state.activeOption}
          onOptionClick={this.handleOptionClick}
          toggleVisibility={this.toggleVisibility}
        />
      );
    }
  }


  WithSortingOptions.propTypes = {
    onOptionClick: PropsTypes.func.isRequired
  };

  const mapDispatchToProps = (dispatch) => ({
    onOptionClick: (option) => {
      dispatch(sortPlacesAction(option));
    }
  });
  WithSortingOptions.displayName = `WithSortingOptions(${getDisplayName(Component)})`;
  return connect(null, mapDispatchToProps)(WithSortingOptions);
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || `Component`;
}

export default withSortingOptions;

