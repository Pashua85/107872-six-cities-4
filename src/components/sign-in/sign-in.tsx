import React, {SyntheticEvent} from 'react';
import PropTypes from 'prop-types';
import withAuthData from '../../hocs/with-auth-data';
import Header from '../header/header';

interface SignInProps {
  email: string,
  password: string,
  onEmailChange: (e: SyntheticEvent) => void,
  onPasswordChange: (e: SyntheticEvent) => void,
  onSignInClick: (autData: {email: string, password: string}) => void
}

const SignIn: React.FC<SignInProps> = (props) => {
  const {email, password, onEmailChange, onPasswordChange, onSignInClick} = props;

  return (
    <div className="page page--gray page--login">

      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required value={email} onChange={onEmailChange} />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required value={password} onChange={onPasswordChange} />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  onSignInClick({
                    email,
                    password
                  });
                }}
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

SignIn.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onSignInClick: PropTypes.func.isRequired
};

export default withAuthData(SignIn);
export {SignIn};


