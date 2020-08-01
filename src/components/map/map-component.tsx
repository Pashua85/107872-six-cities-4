import React, {Dispatch} from 'react';
import {connect} from 'react-redux';
import leaflet, {Map, LayerGroup} from 'leaflet';
import ActionCreator from '../../store/action-creator/action-creator';
import {IPlace} from '../../types/place';
import {ICity} from '../../types/city';

interface MapProps {
  places: IPlace[],
  className: string,
  currentPlace: IPlace,
  onMarkerHover: (place: IPlace) => void,
  onMarkerUnhover: () => void
  city: ICity
}

class MapComponent extends React.PureComponent<MapProps> {
  map: Map
  mapRef: {
    current: HTMLElement
  }
  markerHoverHandler: (e: Event) => void
  activeMarker: LayerGroup<any>
  simpleMarkers: LayerGroup<any>


  constructor(props: MapProps) {
    super(props);

    this.mapRef = React.createRef();
    this.renderMarkers = this.renderMarkers.bind(this);
  }

  componentDidMount() {

    const {city} = this.props;
    const cityCoords: [number, number] = [city.location.latitude, city.location.longitude];
    const zoom = city.location.zoom;
    this.map = leaflet.map(this.mapRef.current, {
      center: cityCoords,
      zoom,
      zoomControl: false,
    });
    this.map.setView(cityCoords, zoom);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    this.activeMarker = leaflet.layerGroup().addTo(this.map);
    this.simpleMarkers = leaflet.layerGroup().addTo(this.map);

    this.renderMarkers();
  }

  renderMarkers() {
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

  handleMarkerHover(place) {
    this.props.onMarkerHover(place);
  }

  handleMarkerUnhover() {
    this.props.onMarkerUnhover();
  }

  componentDidUpdate(prevProps) {
    this.activeMarker.clearLayers();
    this.simpleMarkers.clearLayers();

    if (this.props.city.name !== prevProps.city.name) {
      const {city} = this.props;
      const cityCoords: [number, number] = [city.location.latitude, city.location.longitude];
      this.map.setView(cityCoords, city.location.zoom);
    }

    this.renderMarkers();
  }

  componentWillUnmount() {
    this.simpleMarkers.clearLayers();
    this.activeMarker.clearLayers();
    this.props.onMarkerHover(null);
  }

  render() {
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
