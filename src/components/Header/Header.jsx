
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons ,Span} from './HeaderStyles';

const Header = () =>  (
<Container id='header'>
  <Div1>
    
      <a href='/'  style={{display:"flex",alignItems:'center',color: 'white',marginBottom:'20px' }} >
              <DiCssdeck size='3rem'/> <Span>Portfolio</Span>
      </a>
  
  </Div1>
  <Div2>
    <li>
     
        <NavLink href="#projects" >Projects</NavLink>
      
    </li>
    <li>
    
        <NavLink href="#tech" >Technologies</NavLink>
      
    </li>
    <li>
      
        <NavLink href="#about" > About</NavLink>
      
    </li>
  </Div2>
  <Div3>
  
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
  </Div3>
</Container>
);

export default Header;
