import React from 'react';
// import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
// import ActionCreator from '../store/action-creator/action-creator';

const withAuthData = (Component) => {
  class WithAuthData extends React.PureComponent {
    constructor(props) {
      super(props);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);

      this.state = {
        email: ``,
        password: ``
      };
    }

    handleEmailChange(e) {
      e.preventDefault();
      this.setState({
        email: e.target.value
      });
    }

    handlePasswordChange(e) {
      e.preventDefault();
      this.setState({
        password: e.target.value
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          email={this.state.email}
          password={this.state.password}
          onEmailChange={this.handleEmailChange}
          onPasswordChange={this.handlePasswordChange}
        />
      );
    }
  }

  WithAuthData.displayName = `WithAuthData(${getDisplayName(Component)})`;
  return WithAuthData;
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || `Component`;
}

export default withAuthData;

