import {v4 as uuidv4} from 'uuid';

export default [
  {
    id: uuidv4(),
    cityName: `Paris`,
    places: []
  },
  {
    id: uuidv4(),
    cityName: `Cologne`,
    places: []
  },
  {
    id: uuidv4(),
    cityName: `Brussels`,
    places: []
  },
  {
    id: uuidv4(),
    cityName: `Amsterdam`,
    places: [
      {
        id: uuidv4(),
        propertyName: `Beautiful luxurious apartment at great location`,
        propertyType: `apartment`,
        propertyText: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
        ],
        price: 120,
        rating: 3.9,
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
        ],
        reviews: [
          {
            id: uuidv4(),
            userName: `Max`,
            avatar: `img/avatar-max.jpg`,
            rating: 4,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`
          }
        ],
        coords: [52.3909553943508, 4.85309666406198]
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
        ],
        reviews: [],
        coords: [52.369553943508, 4.85309666406198]
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
        ],
        reviews: [],
        coords: [52.3909553943508, 4.929309666406198]
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
        ],
        reviews: [],
        coords: [52.3809553943508, 4.939309666406198]
      }
    ]
  },
  {
    id: uuidv4(),
    cityName: `Hamburg`,
    places: []
  },
  {
    id: uuidv4(),
    cityName: `Dusseldorf`,
    places: []
  }
];
