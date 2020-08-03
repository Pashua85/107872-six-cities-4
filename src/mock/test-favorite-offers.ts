const appartmentType: `apartment` | `room` | `house` | `hotel` = `apartment`;
const roomType: `apartment` | `room` | `house` | `hotel` = `room`;

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
    title: `Beautiful luxurious apartment at great location`,
    type: appartmentType,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    price: 120,
    rating: 4.8,
    is_premium: true,
    bedrooms: 3,
    max_adults: 4,
    goods: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    host: {
      name: `Angelina`,
      avatar_url: `avatar-angelina.jpg`,
      is_pro: true,
      id: 3
    },
    preview_image: `img/apartment-01.jpg`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    location: {
      latitude: 56.23425232,
      longitude: 4.53645345,
      zoom: 9
    },
    is_favorite: true
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
    title: `Wood and stone place`,
    type: roomType,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. 
    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    price: 80,
    rating: 4.6,
    is_premium: false,
    bedrooms: 1,
    max_adults: 2,
    goods: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    host: {
      name: `Angelina`,
      avatar_url: `avatar-angelina.jpg`,
      is_pro: true,
      id: 3
    },
    preview_image: `img/room.jpg`,
    images: [`img/room.jpg`, `apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `studio-01.jpg`, `apartment-01.jpg`],
    location: {
      latitude: 56.23425232,
      longitude: 4.53645345,
      zoom: 9
    },
    is_favorite: true
  },
];
