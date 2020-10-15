import React from 'react';

import { useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import mapMarkerImg from '../assets/images/mapMarker.svg';

import { Aside } from '../styles/components/Sidebar';

const Sidebar: React.FC = () => {
  const { goBack } = useHistory();
  return (
    <Aside>
      <img src={mapMarkerImg} alt="Happy" />
      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </Aside>
  );
};

export default Sidebar;
