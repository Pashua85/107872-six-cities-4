import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ReviewForm} from './review-form';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`ReviewForm`, () => {
  it(`should render correctly`, () => {
    const wrapper = shallow(
        <ReviewForm
          commentText=""
          disabled={true}
          onCommentTextChange={() => {}}
          onRatingChange={() => {}}
          onFormSubmit={() => {}}
          radioButtons={[]}
          errorMessage=""
        />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
