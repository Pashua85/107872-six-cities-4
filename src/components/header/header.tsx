import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAuthStatus} from '../../store/reducers/auth-status-reducer/selectors';
import {getUser} from '../../store/reducers/user-reducer/selectors';
import {AUTH_STATUS} from '../../store/reducers/auth-status-reducer/auth-status-reducer';
import {IUser, IStore} from '../../types/types';

interface HeaderProps {
  authStatus: string,
  user: null | IUser
}

const Header: React.FC<HeaderProps> = ({authStatus, user}) => {

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to="/">
              <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {
                  authStatus === AUTH_STATUS.NO_AUTH &&
                  (
                    <Link className="header__nav-link header__nav-link--profile" to="/login">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  )
                }
                {
                  authStatus === AUTH_STATUS.AUTH && user !== null &&
                  (
                    <Link className="header__nav-link header__nav-link--profile" to="/favorites">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">{user.email}</span>
                    </Link>
                  )
                }
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state: IStore) => ({
  authStatus: getAuthStatus(state),
  user: getUser(state)
});

export default connect(mapStateToProps)(Header);
export {Header};
