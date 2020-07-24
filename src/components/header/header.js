import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAuthStatus} from '../../store/reducers/authStatusReducer/selectors';
import {getUser} from '../../store/reducers/userReducer/selectors';
import {AUTH_STATUS} from '../../store/reducers/authStatusReducer/authStatusReducer';

const Header = (props) => {
  const {authStatus, user} = props;

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

Header.propTypes = {
  authStatus: PropTypes.string.isRequired,
  user: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.object])
};

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
  user: getUser(state)
});

export default connect(mapStateToProps)(Header);
export {Header};
