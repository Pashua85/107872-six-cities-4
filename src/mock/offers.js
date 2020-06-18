import {v4 as uuidv4} from 'uuid';

export default [
  {
    propertyName: `Beautiful luxurious apartment at great location`,
    propertyType: `apartment`,
    price: 120,
    rating: 4,
    isPremium: true,
    picture: `apartment-01.jpg`,
    id: uuidv4()
  },
  {
    propertyName: `Wood and stone place`,
    propertyType: `room`,
    price: 80,
    rating: 4,
    isPremium: false,
    picture: `room.jpg`,
    id: uuidv4()
  },
  {
    propertyName: `Canal View Prinsengracht`,
    propertyType: `apartment`,
    price: 132,
    rating: 4,
    isPremium: false,
    picture: `apartment-02.jpg`,
    id: uuidv4()
  },
  {
    propertyName: `Nice, cozy, warm big bed apartment`,
    propertyType: `apartment`,
    price: 180,
    rating: 5,
    isPremium: true,
    picture: `apartment-03.jpg`,
    id: uuidv4()
  }
];

