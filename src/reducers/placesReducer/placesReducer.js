import {GET_PLACES, SORT_PLACES} from '../../actions/actions';

function placesReducer(wholeState, action) {
  switch (action.type) {
    case GET_PLACES: {
      const cityIndex = wholeState.cities.findIndex(
          (c) => c.cityName === action.city
      );
      return wholeState.cities[cityIndex].places;
    }
    case SORT_PLACES: {
      if (action.option === `Popular`) {

        const cityIndex = wholeState.cities.findIndex(
            (c) => c.cityName === wholeState.city
        );
        return wholeState.cities[cityIndex].places;

      } else if (action.option === `Price: low to high`) {

        const placesCopy = wholeState.places.slice();
        return placesCopy.sort((p1, p2) => p1.price - p2.price);

      } else if (action.option === `Price: high to low`) {

        const placesCopy = wholeState.places.slice();
        return placesCopy.sort((p1, p2) => p2.price - p1.price);

      } else if (action.option === `Top rated first`) {

        const placesCopy = wholeState.places.slice();
        const result = placesCopy.sort((p1, p2) => p2.rating - p1.rating);
        console.log(result);
        return result;
      } else {
        return wholeState.places;
      }
    }
    default: {
      return wholeState.places;
    }
  }
}

export default placesReducer;
