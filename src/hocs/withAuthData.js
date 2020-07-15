import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import UserOperation from '../store/operations/user-operation/user-operation';
import {getAuthStatus} from '../store/reducers/authStatusReducer/selectors';
import {AUTH_STATUS} from '../store/reducers/authStatusReducer/authStatusReducer';

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
      const {authStatus} = this.props;
      if (authStatus === AUTH_STATUS.AUTH) {
        return <Redirect to="/" />;
      }
      return (
        <Component
          {...this.props}
          email={this.state.email}
          password={this.state.password}
          onEmailChange={this.handleEmailChange}
          onPasswordChange={this.handlePasswordChange}
          onSignInClick={this.props.onSignInClick}
        />
      );
    }
  }

  WithAuthData.propTypes = {
    onSignInClick: PropTypes.func.isRequired,
    authStatus: PropTypes.string.isRequired
  };

  const mapStateToProps = (state) => ({
    authStatus: getAuthStatus(state)
  });

  const mapDispatchToProps = (dispatch) => ({
    onSignInClick: (authData) => {
      dispatch(UserOperation.login(authData));
    }
  });

  WithAuthData.displayName = `WithAuthData(${getDisplayName(Component)})`;
  return connect(mapStateToProps, mapDispatchToProps)(WithAuthData);
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || `Component`;
}

export default withAuthData;

