import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem  target="_blank"href="tel:+233546514388">+233 546 514 388</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem target="_blank" href="mailto:bdulrazakadams28@gmail.com">
            abdulrazakadams28@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons target="_blank" href='https://github.com/zark28' >
        <AiFillGithub size='3rem' />
    </SocialIcons>
    <SocialIcons target="_blank" href='https://linkedin.com/in/abdul-razak-adams-93274376' >
        <AiFillLinkedin size='3rem' />
    </SocialIcons>
    <SocialIcons target="_blank" href='https://www.instagram.com/adamsabdulrazak28/' >
        <AiFillInstagram size='3rem' />
    </SocialIcons>
    <SocialIcons target="_blank" href='https://twitter.com/adamsabdulraza2' >
        <AiFillTwitterCircle size='3rem' />
    </SocialIcons>
    
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
