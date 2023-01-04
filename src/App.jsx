import React from 'react'
import { Layout,Acomplishments,Section,Hero,BgAnimation,Projects,Technologies,Timeline, } from './components'


const App = () => {
  return (
  

    <Layout>
      <Section grid>
     <Hero/>
     <BgAnimation/>
      </Section>
      <Projects/>
      <Technologies/>
      <Timeline/>
      <Acomplishments/>

    </Layout>
   
  )
}

export default App