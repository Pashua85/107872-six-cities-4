import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Review from './review';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`Review`, () => {
  const review = {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 1,
    rating: 4,
    user: {
      // eslint-disable-next-line
      avatar_url: `img/1.png`,
      id: 4,
      // eslint-disable-next-line
      is_pro: false,
      name: `Max`
    }
  };

  it(`should render correctly`, () => {
    const wrapper = shallow(<Review review={review} />);
    expect(wrapper).toMatchSnapshot();
  });
});
