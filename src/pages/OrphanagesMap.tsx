import React from 'react';
import { Link } from 'react-router-dom';

import { Map, TileLayer, Marker } from 'react-leaflet';

import { FiArrowRight, FiPlus } from 'react-icons/fi';

import mapMarkerImg from '../assets/images/mapMarker.svg';

import {
  Container,
  Aside,
  StyledPopup as Popup,
} from '../styles/pages/orphanagesMap';
import mapIcon from '../utils/mapIcon';

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <Aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita :)</p>
        </header>

        <footer>
          <strong>Rio de Janeiro</strong>
          <span>Rio de Janeiro (RJ)</span>
        </footer>
      </Aside>

      <Map
        center={[-22.9131478, -44.006425]}
        zoom={9}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        <Marker position={[-22.880738, -43.329851]} icon={mapIcon}>
          <Popup closeButton={false} minWidth={240} maxWidth={240}>
            Lar das Pacas
            <Link to="/orphanages/1">
              <FiArrowRight size={20} color="#fff" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={24} color="#fff" />
      </Link>
    </Container>
  );
};

export default OrphanagesMap;
