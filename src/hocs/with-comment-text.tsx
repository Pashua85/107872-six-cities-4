import React, {SyntheticEvent, Dispatch} from 'react';
import {RouteComponentProps, withRouter} from 'react-router';
import {connect} from 'react-redux';
import {getSendingComment} from '../store/reducers/sending-comment-reducer/selectors';
import {getCommentError} from '../store/reducers/comment-error-reducer/selectors';
import ActionCreator from '../store/action-creator/action-creator';
import CommentsOperation from '../store/operations/comments-operation/comments-operation';
import {IStore} from '../types/types';

type WithCommentTextProps = RouteComponentProps<any> & {
  sendingComment: boolean,
  commentError: null | {
    status: number
  },
  onFormSubmitHOC: (id: string, {comment: string, rating: number}) => void,
  match: {
    params: {
      id: string
    }
  },
}

interface IRadioButton {
  value: string,
  id: string,
  checked: boolean
}

interface WithCommentTextState {
  commentText: string,
  rating: number,
  disabled: boolean,
  errorMessage: string,
  radioButtons: IRadioButton[]
}

const withCommentText = (Component: React.ComponentType): React.ReactNode => {
  class WithCommentText extends React.PureComponent<WithCommentTextProps, WithCommentTextState> {
    constructor(props: WithCommentTextProps) {
      super(props);
      this._checkIsDisabled = this._checkIsDisabled.bind(this);
      this.handleCommentTextChange = this.handleCommentTextChange.bind(this);
      this.handleRatingChange = this.handleRatingChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this._clearForm = this._clearForm.bind(this);

      this.state = {
        commentText: ``,
        rating: 0,
        disabled: true,
        errorMessage: ``,
        radioButtons: [
          {
            value: `5`,
            id: `5-stars`,
            checked: false,
          },
          {
            value: `4`,
            id: `4-stars`,
            checked: false,
          },
          {
            value: `3`,
            id: `3-stars`,
            checked: false,
          },
          {
            value: `2`,
            id: `2-stars`,
            checked: false
          },
          {
            value: `1`,
            id: `1-star`,
            checked: false
          }
        ]
      };
    }

    componentDidUpdate(prevProps: WithCommentTextProps) {
      if (this.props.sendingComment !== prevProps.sendingComment && this.props.sendingComment === false) {
        if (this.props.commentError === null) {
          this._clearForm();
        } else {
          let errorMessage;
          switch (this.props.commentError.status) {
            case 401: {
              errorMessage = `Оставлять комментарии могут только авторизированные пользователи`;
              break;
            }
            case 404: {
              errorMessage = `Сервер не отвечает, попробуйте позже`;
              break;
            }
            default: {
              errorMessage = `Что-то пошло не так, попробуйте ещё раз`;
            }
          }

          this.setState({errorMessage});
        }
      }
    }

    private _checkIsDisabled() {
      if (this.state.commentText.length >= 50 && this.state.commentText.length <= 300 && this.state.rating > 0) {
        this.setState({
          disabled: false
        });
      } else {
        this.setState({
          disabled: true
        });
      }
    }

    handleCommentTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
      this.setState({
        commentText: e.target.value
      }, () => {
        this._checkIsDisabled();
      });
    }

    handleRatingChange(e: React.ChangeEvent<HTMLInputElement>) {
      if (e.target.checked) {
        const newRadioButtons = this.state.radioButtons.map((rb) => {
          if (rb.value === e.target.value) {
            return {
              value: rb.value,
              id: rb.id,
              checked: true,
            };
          } else {
            return {
              value: rb.value,
              id: rb.id,
              checked: false
            };
          }
        });
        this.setState({
          rating: parseInt(e.target.value, 10),
          radioButtons: newRadioButtons
        }, () => {
          this._checkIsDisabled();
        });
      }
    }

    private _clearForm() {
      const newRadioButtons = this.state.radioButtons.map((rb) => ({
        value: rb.value,
        id: rb.id,
        checked: false
      }));
      this.setState({
        radioButtons: newRadioButtons,
        commentText: ``,
        disabled: false
      });
    }

    handleFormSubmit(e: SyntheticEvent) {
      e.preventDefault();
      this.setState({
        disabled: true
      });
      this.props.onFormSubmitHOC(this.props.match.params.id, {
        comment: this.state.commentText,
        rating: this.state.rating
      });
    }

    render() {
      const {commentText, disabled} = this.state;

      return (
        <Component
          commentText={commentText}
          disabled={disabled}
          onCommentTextChange={this.handleCommentTextChange}
          onRatingChange={this.handleRatingChange}
          onFormSubmit={this.handleFormSubmit}
          radioButtons={this.state.radioButtons}
          errorMessage={this.state.errorMessage}
          {...this.props as any}
        />
      );
    }
  }

  const mapStateToProps = (state: IStore) => {
    return {
      sendingComment: getSendingComment(state),
      commentError: getCommentError(state),
    };
  };

  const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    onFormSubmitHOC: (id: string, commentData: { comment: string, rating: number}) => {
      dispatch(ActionCreator.setSendingComment(true));
      dispatch(CommentsOperation.sendComment(id, commentData));
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(withRouter(WithCommentText));
};


export default withCommentText;

