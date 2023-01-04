import React, { useEffect, useState } from 'react'
import { Layout,Acomplishments,Section,Hero,BgAnimation,Projects,Technologies,Timeline, } from './components'
import BacktoTop from './components/BackTotopButton/BacktoTop'


const App = () => {

  

 

  // console.log(window.scrollY);

  
  
  return (
  

    <Layout >
      <Section grid>
     <Hero/>
     <BgAnimation/>
      </Section>
      <Projects/>
      <Technologies/>
      <Timeline/>
      <Acomplishments/>
      
        <BacktoTop/>
      

    </Layout>
   
  )
}

export default App