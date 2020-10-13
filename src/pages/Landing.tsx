import React from 'react';

import { FiArrowRight } from 'react-icons/fi';

import logoImg from '../assets/images/logo.svg';

import { Container, ContentWrapper } from '../styles/pages/landing';

const Landing: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <img src={logoImg} alt="Happy Logo" />
        {/* <img src={landingImg} alt="Landing" /> */}

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Rio de Janeiro</strong>
          <span>Rio de Janeiro (RJ)</span>
        </div>

        <a href="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </a>
      </ContentWrapper>
    </Container>
  );
};

export default Landing;
