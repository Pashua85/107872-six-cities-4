import {v4 as uuidv4} from 'uuid';

export default [
  {
    id: uuidv4(),
    propertyName: `Beautiful luxurious apartment at great location`,
    propertyType: `apartment`,
    propertyText: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
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
    titlePhoto: `apartment-01.jpg`,
    photos: [
      {
        title: `room.jpg`,
        id: uuidv4()
      },
      {
        title: `apartment-01.jpg`,
        id: uuidv4()
      },
      {
        title: `apartment-02.jpg`,
        id: uuidv4()
      },
      {
        title: `apartment-03.jpg`,
        id: uuidv4()
      },
      {
        title: `studio-01.jpg`,
        id: uuidv4()
      },
      {
        title: `apartment-01.jpg`,
        id: uuidv4()
      }
    ]
  },
  {
    id: uuidv4(),
    propertyName: `Wood and stone place`,
    propertyType: `room`,
    propertyText: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
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
    titlePhoto: `room.jpg`,
    photos: [
      {
        title: `room.jpg`,
        id: uuidv4()
      },
      {
        title: `apartment-01.jpg`,
        id: uuidv4()
      },
      {
        title: `apartment-02.jpg`,
        id: uuidv4()
      },
      {
        title: `apartment-03.jpg`,
        id: uuidv4()
      },
      {
        title: `studio-01.jpg`,
        id: uuidv4()
      },
      {
        title: `apartment-01.jpg`,
        id: uuidv4()
      }
    ]
  },
  {
    id: uuidv4(),
    propertyName: `Canal View Prinsengracht`,
    propertyType: `apartment`,
    propertyText: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
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
    titlePhoto: `apartment-02.jpg`,
    photos: [
      {
        title: `room.jpg`,
        id: uuidv4()
      },
      {
        title: `apartment-01.jpg`,
        id: uuidv4()
      },
      {
        title: `apartment-02.jpg`,
        id: uuidv4()
      },
      {
        title: `apartment-03.jpg`,
        id: uuidv4()
      },
      {
        title: `studio-01.jpg`,
        id: uuidv4()
      },
      {
        title: `apartment-01.jpg`,
        id: uuidv4()
      }
    ]
  },
  {
    id: uuidv4(),
    propertyName: `Nice, cozy, warm big bed apartment`,
    propertyType: `apartment`,
    propertyText: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
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
    titlePhoto: `apartment-03.jpg`,
    photos: [
      {
        title: `room.jpg`,
        id: uuidv4()
      },
      {
        title: `apartment-01.jpg`,
        id: uuidv4()
      },
      {
        title: `apartment-02.jpg`,
        id: uuidv4()
      },
      {
        title: `apartment-03.jpg`,
        id: uuidv4()
      },
      {
        title: `studio-01.jpg`,
        id: uuidv4()
      },
      {
        title: `apartment-01.jpg`,
        id: uuidv4()
      }
    ]
  }
];
