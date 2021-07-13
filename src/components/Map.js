import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import MapImg from '../assets/images/map.png';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat center / cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background-color: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here I am</h3>
          <PText>Tamando, Bhubaneswar, Odisha</PText>
          <a
            href="https://www.google.com/maps/place/ADINATH+APARTMENT/@20.2245586,85.7384588,17z/data=!3m1!4b1!4m5!3m4!1s0x3a19a8f120a009ad:0xfcc05dc666e96d75!8m2!3d20.2245586!4d85.7384588"
            target="_blank"
            rel="noreferrer"
            className="map__card__link"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
