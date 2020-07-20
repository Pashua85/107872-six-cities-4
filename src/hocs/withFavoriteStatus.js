import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {getAuthStatus} from '../store/reducers/authStatusReducer/selectors';

const withFavoriteStatus = (Component) => {
  class WithFavoriteStatus extends React.PureComponent {
    constructor(props) {
      super(props);
      this.handleFavoriteClick = this.handleFavoriteClick.bind(this);

      this.state = {
        isFavorite: this.props.place.isFavorite
      };
    }

    static getDerivedStateToProps(props, state) {
      if (props.place.isFavorite !== state.isFavorite) {
        return {
          isFavorite: props.place.isFavorite
        };
      }
      return null;
    }

    handleFavoriteClick() {
      if (this.props.authStatus === `AUTH`) {
        console.log(`Auth click`);
      } else {
        this.props.history.push(`/login`);
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          isFavorite={this.state.isFavorite}
          onFavoriteClick={this.handleFavoriteClick}
        />
      );
    }
  }

  WithFavoriteStatus.propTypes = {
    place: PropTypes.object.isRequired,
    authStatus: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired
  };

  const mapStateToProps = (state) => ({
    authStatus: getAuthStatus(state)
  });

  WithFavoriteStatus.displayName = `WithFavoriteStatus(${getDisplayName(Component)})`;
  return connect(mapStateToProps)(withRouter(WithFavoriteStatus));
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || `Component`;
}

export default withFavoriteStatus;
