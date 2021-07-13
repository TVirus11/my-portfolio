import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import Button from './Button';

const ContactBannerStyle = styled.div`
  padding: 10rem 0;
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyle>
      <div className="container">
        <div className="contactBanner__wrapper">
          <PText>Something in mind?</PText>
          <h3 className="contactBanner__heading">Let me help You!</h3>
          <Button btnText="Contact Now" btnLink="/contact" />
        </div>
      </div>
    </ContactBannerStyle>
  );
}
