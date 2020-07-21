import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {getAuthStatus} from '../store/reducers/authStatusReducer/selectors';
import OffersOperation from '../store/operations/offers-operation/offers-operation';


const withFavoriteStatus = (Component) => {
  class WithFavoriteStatus extends React.PureComponent {
    constructor(props) {
      super(props);
      this.handleFavoriteClick = this.handleFavoriteClick.bind(this);

      this.state = {
        isFavorite: this.props.place.isFavorite
      };
    }

    componentDidUpdate(prevPros) {
      if (this.props.place.isFavorite !== prevPros.place.isFavorite) {
        this.setState((prevState) => ({
          isFavorite: !prevState.isFavorite
        }));
      }
    }

    handleFavoriteClick(id) {
      if (this.props.authStatus === `AUTH`) {
        if (this.state.isFavorite) {
          this.props.onDeleteFromFavorite(id);
        }
        if (!this.state.isFavorite) {
          this.props.onAddToFavorite(id);
        }
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
    history: PropTypes.object.isRequired,
    onAddToFavorite: PropTypes.func.isRequired,
    onDeleteFromFavorite: PropTypes.func.isRequired
  };

  const mapStateToProps = (state) => ({
    authStatus: getAuthStatus(state)
  });

  const mapDispatchToProps = (dispatch) => ({
    onAddToFavorite: (id) => {
      dispatch(OffersOperation.addToFavorite(id));
    },
    onDeleteFromFavorite: (id) => {
      dispatch(OffersOperation.deleteFromFavorite(id));
    }
  });

  WithFavoriteStatus.displayName = `WithFavoriteStatus(${getDisplayName(Component)})`;
  return connect(mapStateToProps, mapDispatchToProps)(withRouter(WithFavoriteStatus));
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || `Component`;
}

export default withFavoriteStatus;
