export interface IPlace {
  bedroomsAmount: number,
  city: {
    location: {
      latitude: number,
      longitude: number,
      zoom: number
    },
    name: string
  },
  id: number,
  propertyName: string,
  propertyType: string,
  propertyText: string,
  price: number,
  rating: number,
  isPremium: boolean,
  guestMax: number,
  propertyItems: string[],
  host: {
    name: string,
    avatar: string,
    isSuper: boolean
  },
  titlePhoto: string,
  photos: string[],
  coords: [number, number],
  isFavorite: boolean
}
