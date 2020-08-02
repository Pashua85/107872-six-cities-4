import React, { Dispatch } from 'react';
import {RouteComponentProps} from 'react-router';
import {connect} from 'react-redux';
import UserOperation from '../store/operations/user-operation/user-operation';
import {getAuthStatus} from '../store/reducers/auth-status-reducer/selectors';
import {AUTH_STATUS} from '../store/reducers/auth-status-reducer/auth-status-reducer';
import {IStore} from '../types/store';

type WithAuthDataProps = RouteComponentProps<any> & {
  onSignInClick: (authData: {email: string, password: string}) => void,
  authStatus: string
}

interface WithAuthDataState {
  email: string,
  password: string
}

const withAuthData = (Component: React.ComponentType) => {
  class WithAuthData extends React.PureComponent<WithAuthDataProps, WithAuthDataState> {
    constructor(props: WithAuthDataProps) {
      super(props);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);

      this.state = {
        email: ``,
        password: ``
      };
    }

    handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
      e.preventDefault();
      this.setState({
        email: e.target.value
      });
    }

    handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
      e.preventDefault();
      this.setState({
        password: e.target.value
      });
    }

    render() {
      const {authStatus, history} = this.props;
      if (authStatus === AUTH_STATUS.AUTH) {
        history.push(`/`);
      }
      return (
        <Component
          email={this.state.email}
          password={this.state.password}
          onEmailChange={this.handleEmailChange}
          onPasswordChange={this.handlePasswordChange}
          onSignInClick={this.props.onSignInClick}
          {...this.props as any}
        />
      );
    }
  }

  const mapStateToProps = (state: IStore) => ({
    authStatus: getAuthStatus(state)
  });

  const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    onSignInClick: (authData: {email: string, password: string}) => {
      dispatch(UserOperation.login(authData));
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithAuthData);
};

export default withAuthData;

