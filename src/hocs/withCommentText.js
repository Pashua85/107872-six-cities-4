import React from 'react';
import PropTypes from 'prop-types';

const withCommentText = (Component) => {
  class WithCommentText extends React.PureComponent {
    constructor(props) {
      super(props);
      this.checkIsDisabled = this.checkIsDisabled.bind(this);
      this.handleCommentTextChange = this.handleCommentTextChange.bind(this);
      this.handleRatingChange = this.handleRatingChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);

      this.state = {
        commentText: ``,
        rating: 0,
        disabled: true
      };
    }

    checkIsDisabled() {
      if (this.state.commentText.length >= 50 && this.state.commentText.length <= 300) {
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
      });
      this.checkIsDisabled();
    }

    handleRatingChange(e) {
      if (e.target.checked) {
        this.setState({
          rating: parseInt(e.target.value, 10)
        });
      }
    }

    handleFormSubmit(e) {
      e.preventDefault();
      console.log(`form was submit`);
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
        />
      );
    }
  }
  return WithCommentText;
};

export default withCommentText;

