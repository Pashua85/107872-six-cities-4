import React, { Dispatch } from 'react';
import {connect} from 'react-redux';
import ActionCreator from '../store/action-creator/action-creator';

interface WithSortingOptionsProps {
  onOptionClickHOC: (option: string) => void
}

interface WithSortingOptionsState {
  isOptionsVisible: boolean,
  options: string[],
  activeOption: `Popular` | `Price: low to high` | `Price: high to low` | `Top rated first`
}

const withSortingOptions = (Component: React.ComponentType) => {
  class WithSortingOptions extends React.PureComponent<WithSortingOptionsProps, WithSortingOptionsState> {
    constructor(props: WithSortingOptionsProps) {
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

    handleOptionClick(option: `Popular` | `Price: low to high` | `Price: high to low` | `Top rated first`) {
      this.setState({
        activeOption: option
      });
      this.props.onOptionClickHOC(option);
      this.toggleVisibility();
    }

    render() {
      return (
        <Component
          options={this.state.options}
          isOptionsVisible={this.state.isOptionsVisible}
          activeOption={this.state.activeOption}
          onOptionClick={this.handleOptionClick}
          toggleVisibility={this.toggleVisibility}
          {...this.props as any}
        />
      );
    }
  }

  const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    onOptionClickHOC: (option: string) => {
      dispatch(ActionCreator.setSortingOption(option));
    }
  });

  return connect(null, mapDispatchToProps)(WithSortingOptions);
};

export default withSortingOptions;

