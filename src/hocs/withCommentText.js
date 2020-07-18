import React from 'react';
import {withRouter} from 'react-router';
import PropTypes from 'prop-types';

const withCommentText = (Component) => {
  class WithCommentText extends React.PureComponent {
    constructor(props) {
      super(props);
      this.checkIsDisabled = this.checkIsDisabled.bind(this);
      this.handleCommentTextChange = this.handleCommentTextChange.bind(this);
      this.handleRatingChange = this.handleRatingChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.clearForm = this.clearForm.bind(this);

      this.state = {
        commentText: ``,
        rating: 0,
        disabled: true,
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

    checkIsDisabled() {
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

    handleCommentTextChange(e) {
      this.setState({
        commentText: e.target.value
      }, () => {
        this.checkIsDisabled();
      });
    }

    handleRatingChange(e) {
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
          this.checkIsDisabled();
        });
      }
    }

    clearForm() {
      const newRadioButtons = this.state.radioButtons.map((rb) => ({
        value: rb.value,
        id: rb.id,
        checked: false
      }));
      this.setState({
        radioButtons: newRadioButtons,
        commentText: ``
      });
    }

    handleFormSubmit(e) {
      e.preventDefault();
      this.setState({
        disabled: true
      });
      setTimeout(() => {
        this.setState({disabled: false});
        this.clearForm();
      }, 5000);
    }

    render() {
      const {commentText, disabled} = this.state;
      return (
        <Component
          {...this.props}
          commentText={commentText}
          disabled={disabled}
          onCommentTextChange={this.handleCommentTextChange}
          onRatingChange={this.handleRatingChange}
          onFormSubmit={this.handleFormSubmit}
          radioButtons={this.state.radioButtons}
        />
      );
    }
  }
  return withRouter(WithCommentText);
};

export default withCommentText;

