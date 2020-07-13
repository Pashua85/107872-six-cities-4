const initialState = [
  {
    name: `Paris`,
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: `Cologne`,
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  {
    name: `Brussels`,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  {
    name: `Amsterdam`,
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  {
    name: `Hamburg`,
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  {
    name: `Dusseldorf`,
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  }
];

const citiesReducer = (state = initialState) => state;

// Реализация редьюсера на случай динамического формирования массива с городами исходя из полученных данных

// import {LOAD_OFFERS} from '../../action-types/action-types';
// let tmpArray = [];
// function checkOffer(offer) {
//   if (tmpArray.find((of) => of.city.name === offer.city.name) === undefined) {
//     tmpArray.push(offer);
//     return true;
//   }
//   return false;
// }
// function citiesReducer(state = [], action) {
//   switch (action.type) {
//     case LOAD_OFFERS: {
//       const offersWithUniqueCity = action.payload.filter((offer) => checkOffer(offer));
//       return offersWithUniqueCity.map((of) => of.city);
//     }
//   }
//   return state;
// }

export default citiesReducer;
