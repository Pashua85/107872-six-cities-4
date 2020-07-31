import React, {SyntheticEvent} from 'react';
import withCommentText from '../../hocs/withCommentText';

interface IRadioButton {
  value: string,
  id: string,
  checked: boolean
}

interface ReviewFormProps {
  commentText: string,
  disabled: boolean,
  onCommentTextChange: (e: SyntheticEvent) => void,
  onRatingChange: (e: SyntheticEvent) => void,
  onFormSubmit: (e: SyntheticEvent) => void,
  radioButtons: IRadioButton[],
  errorMessage: string
  match: {
    params: {
      id: string
    }
  }
}

const ReviewForm: React.FC<ReviewFormProps> = (props) => {
  const {commentText, disabled, onCommentTextChange, onRatingChange, onFormSubmit, radioButtons, errorMessage} = props;

  return (
    <form
      className="reviews__form form"
      onSubmit={onFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          radioButtons.map((rb) => (
            <React.Fragment key={rb.id}>
              <input className="form__rating-input visually-hidden" name="rating" value={rb.value} id={rb.id} type="radio" onChange={onRatingChange} checked={rb.checked} />
              <label htmlFor={rb.id} className="reviews__rating-label form__rating-label" title="perfect">
                <svg className="form__star-image" width="37" height="33">
                  <use href="#icon-star"></use>
                </svg>
              </label>
            </React.Fragment>
          ))
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={commentText}
        onChange={onCommentTextChange}
      >
      </textarea>
      {
        errorMessage.length > 0 &&
        <p className="reviews__help" style={{color: `firebrick`}}>
          {errorMessage}
        </p>
      }
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={disabled}>Submit</button>
      </div>
    </form>
  );
};

export default withCommentText(ReviewForm);
export {ReviewForm};


