import React from 'react'
import Background3 from '../images/model3.jpeg'
import BackgroundY from '../images/modely.jpeg'
import BackgroundS from '../images/models.jpeg'
import CarSection from '../components/CarSection'

function Home() {

  return (
    <>
      <CarSection
        back = {Background3}
        title = "Model 3">
      </CarSection>
      <CarSection
        back = {BackgroundY}
        title = "Model Y">
      </CarSection>
      <CarSection
        back = {BackgroundS}
        title = "Model S">  
      </CarSection>
    </>
  )
}

export default Home