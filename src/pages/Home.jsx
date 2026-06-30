import React from 'react'
import Hero from '../components/home/Hero'
import Service from '../components/home/Service'
import Chose from '../components/home/Chose'
import We from '../components/home/we'
import Process from '../components/home/Process'
import Use from '../components/home/Use'
import Price from '../components/home/Price'
import Testominals from '../components/home/Testominals'
import Stack from '../components/home/Stack'


const Home = () => {
  return (
    <div>
        <Hero/>
        <Service/>
        
        <We/>
        <Process/>
        <Use/>
        <Price/>
        <Chose/>
        <Testominals/>
        <Stack/>
       
    </div>
  )
}

export default Home
