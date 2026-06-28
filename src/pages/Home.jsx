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
import Trust from '../components/home/Trust'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Service/>
        <Chose/>
        <We/>
        <Process/>
        <Use/>
        <Price/>
        <Testominals/>
        <Stack/>
        <Trust/>
    </div>
  )
}

export default Home
