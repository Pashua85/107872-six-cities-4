import React, {Dispatch} from 'react';
import {connect} from 'react-redux';
import leaflet, {Map, LayerGroup} from 'leaflet';
import ActionCreator from '../../store/action-creator/action-creator';
import {IPlace, ICity} from '../../types/types';

interface MapComponentProps {
  places: IPlace[],
  className: string,
  currentPlace: IPlace,
  onMarkerHover: (place: IPlace) => void,
  onMarkerUnhover: () => void
  city: ICity
}

class MapComponent extends React.PureComponent<MapComponentProps> {
  private _map: Map
  mapRef: {
    current: HTMLElement
  }
  markerHoverHandler: (e: Event) => void
  activeMarker: LayerGroup<any>
  simpleMarkers: LayerGroup<any>


  constructor(props: MapComponentProps) {
    super(props);

    this.mapRef = React.createRef();
    this._renderMarkers = this._renderMarkers.bind(this);
  }

  componentDidMount(): void {

    const {city} = this.props;
    const cityCoords: [number, number] = [city.location.latitude, city.location.longitude];
    const zoom = city.location.zoom;
    this._map = leaflet.map(this.mapRef.current, {
      center: cityCoords,
      zoom,
      zoomControl: false,
    });
    this._map.setView(cityCoords, zoom);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    this.activeMarker = leaflet.layerGroup().addTo(this._map);
    this.simpleMarkers = leaflet.layerGroup().addTo(this._map);

    this._renderMarkers();
  }

  private _renderMarkers(): void {
    const {places, currentPlace} = this.props;

    const MarkerIcon: (new (...args: any[]) => any) = leaflet.Icon.extend({
      options: {
        iconSize: [27, 39],
        iconAnchor: [13.5, 39]
      }
    });

    places.forEach((place) => {
      const marker = leaflet
        .marker(place.coords, {icon: new MarkerIcon({iconUrl: `/img/pin.svg`})})
        .addTo(this.simpleMarkers);
      marker.addEventListener(`mouseover`, () => this.handleMarkerHover(place));
      marker.addEventListener(`mouseout`, () => this.handleMarkerUnhover());
    });
    if (currentPlace !== null) {
      const marker = leaflet
        .marker(currentPlace.coords, {icon: new MarkerIcon({iconUrl: `/img/pin-active.svg`})})
        .addTo(this.activeMarker);
      marker.addEventListener(`mouseout`, () => this.handleMarkerUnhover());
    }
  }

  handleMarkerHover(place: IPlace): void {
    this.props.onMarkerHover(place);
  }

  handleMarkerUnhover(): void {
    this.props.onMarkerUnhover();
  }

  componentDidUpdate(prevProps: MapComponentProps): void {
    this.activeMarker.clearLayers();
    this.simpleMarkers.clearLayers();

    if (this.props.city.name !== prevProps.city.name) {
      const {city} = this.props;
      const cityCoords: [number, number] = [city.location.latitude, city.location.longitude];
      this._map.setView(cityCoords, city.location.zoom);
    }

    this._renderMarkers();
  }

  componentWillUnmount(): void {
    this.simpleMarkers.clearLayers();
    this.activeMarker.clearLayers();
    this.props.onMarkerHover(null);
  }

  render(): React.ReactNode {
    const {className} = this.props;
    return (
      <section className={`${className} map`} ref={this.mapRef}></section>
    );
  }

}


const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onMarkerHover: (place: IPlace) => {
    dispatch(ActionCreator.setActiveOffer(place));
  },
  onMarkerUnhover: () => {
    dispatch(ActionCreator.setActiveOffer(null));
  }
});

export default connect(null, mapDispatchToProps)(MapComponent);
export {MapComponent};
