export interface ICity {
  location: {
    latitude: number,
    longitude: number,
    zoom: number
  },
  name: string
}

export interface ICityWithFavoriteOffers {
  city: string,
  offers: IPlace[]
} 

export interface IOffer {
  bedrooms: number,
  city: ICity,
  description: string,
  goods: string[],
  host: {
    avatar_url: string,
    id: number,
    is_pro: boolean,
    name: string
  },
  id: number,
  images: string[],
  is_favorite: boolean,
  is_premium: boolean;
  location: {
    latitude: number,
    longitude: number,
    zoom: number
  },
  max_adults: number,
  preview_image: string,
  price: number,
  rating: number,
  title: string,
  type: `apartment` | `room` | `house` | `hotel`
}

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

export interface IReview {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: {
    avatar_url: string,
    id: number,
    is_pro: boolean,
    name: string
  }
}

export type SortingOption = `Popular` | `Price: low to high` | `Price: high to low` | `Top rated first`;
export type Status = `AUTH` | `NO_AUTH`;

export interface IStore {
  ACTIVE_OFFER: null | IPlace,
  CITIES: ICity[],
  CURRENT_CITY: ICity,
  OFFERS: IOffer[],
  SORTING_OPTION: SortingOption,
  AUTH_STATUS: Status,
  USER: null | IUser,
  OFFERS_NEARBY: IOffer[],
  COMMENTS: IReview[],
  SENDING_COMMENT: boolean,
  COMMENT_ERROR: object,
  FAVORITE_OFFERS: IOffer[]
}

export interface IUser {
  id: number,
  email: string,
  name: string,
  avatar_url: string,
  is_pro: boolean
}