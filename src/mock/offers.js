import {v4 as uuidv4} from 'uuid';

export default [
  {
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    id: 1,
    propertyName: `Beautiful luxurious apartment at great location`,
    propertyType: `apartment`,
    propertyText:
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    price: 120,
    rating: 4.8,
    isPremium: true,
    bedroomsAmount: 3,
    guestMax: 4,
    propertyItems: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    host: {
      name: `Angelina`,
      avatar: `avatar-angelina.jpg`,
      isSuper: true
    },
    titlePhoto: `img/apartment-01.jpg`,
    photos: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    reviews: [
      {
        id: uuidv4(),
        userName: `Max`,
        avatar: `img/avatar-max.jpg`,
        rating: 4,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`
      }
    ],
    coords: [52.3909553943508, 4.85309666406198],
    isFavorite: true
  },
  {
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    id: 2,
    propertyName: `Wood and stone place`,
    propertyType: `room`,
    propertyText: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. 
    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    price: 80,
    rating: 4.6,
    isPremium: false,
    bedroomsAmount: 1,
    guestMax: 2,
    propertyItems: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    host: {
      name: `Angelina`,
      avatar: `avatar-angelina.jpg`,
      isSuper: true
    },
    titlePhoto: `img/room.jpg`,
    photos: [`img/room.jpg`, `apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `studio-01.jpg`, `apartment-01.jpg`],
    reviews: [],
    coords: [52.369553943508, 4.85309666406198]
  },
  {
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    id: 3,
    propertyName: `Canal View Prinsengracht`,
    propertyType: `apartment`,
    propertyText: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. 
    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    price: 132,
    rating: 4.7,
    isPremium: false,
    bedroomsAmount: 3,
    guestMax: 4,
    propertyItems: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    host: {
      name: `Angelina`,
      avatar: `avatar-angelina.jpg`,
      isSuper: true
    },
    titlePhoto: `img/apartment-02.jpg`,
    photos: [`img/room.jpg`, `apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `studio-01.jpg`, `apartment-01.jpg`],
    reviews: [],
    coords: [52.3909553943508, 4.929309666406198],
    isFavorite: false
  },
  {
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    id: 4,
    propertyName: `Nice, cozy, warm big bed apartment`,
    propertyType: `apartment`,
    propertyText: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. 
    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    price: 180,
    rating: 5,
    isPremium: true,
    bedroomsAmount: 4,
    guestMax: 5,
    propertyItems: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    host: {
      name: `Angelina`,
      avatar: `avatar-angelina.jpg`,
      isSuper: true
    },
    titlePhoto: `img/apartment-03.jpg`,
    photos: [`img/room.jpg`, `apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `studio-01.jpg`, `apartment-01.jpg`],
    reviews: [],
    coords: [52.3809553943508, 4.939309666406198],
    isFavorite: false
  }
];
