import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
     Welcome to
      <br/>
      My Personal Portfolio   
      </SectionTitle>
      <SectionText>
      I am {" "}
      </SectionText>
      <SectionTitle center>
           Adams Abdul-Razak,
      </SectionTitle>
      <SectionText>
        a Front-End Web developer, Data Analyist and teacher.
        My experinces has allowed me to not only build websites, but also to effectively communicate technical concepts to a wide range of audiences. 
        Whether you are looking for a developer with a strong foundation in agribusiness, data analysis or a teacher who can bring web development to life, I am confident that I can add value to your team
      </SectionText>
      <a href="#about">
      <Button>
        Learn More
      </Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;