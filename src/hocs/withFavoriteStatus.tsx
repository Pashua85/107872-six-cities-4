import React, {Dispatch} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router';
import {getAuthStatus} from '../store/reducers/authStatusReducer/selectors';
import OffersOperation from '../store/operations/offers-operation/offers-operation';
import {IPlace} from '../types/place';
import {IStore} from '../types/store';

type WithFavoriteStatusProps = RouteComponentProps<any> & {
  place: IPlace,
  authStatus: string,
  onAddToFavorite: (id: string) => void,
  onDeleteFromFavorite: (id: string) => void
}

interface WithFavoriteStatusState {
  isFavorite: boolean
}

const withFavoriteStatus = (Component: React.ComponentType) => {
  class WithFavoriteStatus extends React.PureComponent<WithFavoriteStatusProps, WithFavoriteStatusState> {
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
          isFavorite={this.state.isFavorite}
          onFavoriteClick={this.handleFavoriteClick}
          {...this.props as any}
        />
      );
    }
  }

  const mapStateToProps = (state: IStore) => ({
    authStatus: getAuthStatus(state)
  });

  const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    onAddToFavorite: (id: string) => {
      dispatch(OffersOperation.addToFavorite(id));
    },
    onDeleteFromFavorite: (id: string) => {
      dispatch(OffersOperation.deleteFromFavorite(id));
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(withRouter(WithFavoriteStatus));
};

export default withFavoriteStatus;
