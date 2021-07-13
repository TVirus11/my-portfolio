import React from 'react';
import { MdCode, MdDesktopMac, MdPhoneAndroid } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle heading="Services" subheading="What I can do for you" />

        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Software Development"
            desc="qwiyihakjdhaisdhkjdbaskudgaks kajhsdkasdakus y  awdhakjda iudgakdb"
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Website Development"
            desc="kjashdk asudgajdg awjtdawj a yakj gda kvud"
          />
          <ServicesSectionItem
            icon={<MdPhoneAndroid />}
            title="Android Development"
            desc="kdhas asidhakudh aiudtqw dAMDJTGA IU AVADSJ A"
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
