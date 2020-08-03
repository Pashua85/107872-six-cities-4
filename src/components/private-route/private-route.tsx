import React from 'react';
import {Route, Redirect, RouteProps} from 'react-router';
import {getAuthStatus} from '../../store/reducers/auth-status-reducer/selectors';
import {IStore, Status} from '../../types/types';
import {connect} from 'react-redux';
import {AUTH_STATUS} from '../../store/reducers/auth-status-reducer/auth-status-reducer';

interface PrivateRouteProps extends RouteProps {
  authStatus: Status,
  redirectPath: string
}

const PrivateRoute: React.FC<PrivateRouteProps> = (props) => (
  props.authStatus === AUTH_STATUS.AUTH ?
    <Route {...props} component={props.component} /> :
    <Redirect to={{pathname: props.redirectPath}} />
);

const mapStateToProps = (state: IStore) => ({
  authStatus: getAuthStatus(state)
});

export default connect(mapStateToProps)(PrivateRoute);
export {PrivateRoute};
