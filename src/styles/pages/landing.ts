import styled from 'styled-components';

import landingImg from '../../assets/images/landing.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
`;

export const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 680px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  background: url(${landingImg}) no-repeat 80% center;

  main {
    max-width: 350px;

    h1 {
      font-size: 76px;
      font-weight: 900;
      line-height: 70px;
    }

    p {
      margin-top: 40px;
      font-size: 24px;
      line-height: 34px;
    }
  }

  .location {
    position: absolute;
    top: 0;
    right: 0;

    font-size: 24px;
    line-height: 34px;

    display: flex;
    flex-direction: column;

    text-align: right;

    strong {
      font-weight: 800;
    }
  }

  .enter-app {
    position: absolute;
    bottom: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 80px;
    height: 80px;
    background: #ffd666;

    border-radius: 30px;

    transition: background-color 0.2s;

    &:hover {
      background: #97feff;
    }
  }
`;
