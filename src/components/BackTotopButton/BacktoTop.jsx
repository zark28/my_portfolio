import React from 'react'
import styled from 'styled-components'
import { AiOutlineArrowUp } from 'react-icons/ai'
const BacktoTop = () => {

    
  return (
    <BacktoTopButton>
        <a href="#header">
        <AiOutlineArrowUp size="3rem" color='#fff'/>
        </a>
    </BacktoTopButton>
  )
}
const BacktoTopButton=styled.button`
z-index:999;
display:flex;
background:var(--color-primary1);
object-fit:contain;
position:fixed;
right:20px;
bottom:50px;
transition:.5s ease:
`
export default BacktoTop