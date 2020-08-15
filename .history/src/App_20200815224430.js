import React from 'react'
import { Element } from 'react-scroll'

import Header from './components/header_footer/Header'
import Featured from './components/featured'
import VenueNfo from './components/venueNfo'
import Highlight from './components/Highlights'
import Pricing from './components/pricing'
import Location from './components/location'
import Footer from './components/header_footer/Footer'

import './resources/styles.css'

function App () {
  return (
    <div className='App' style={{ height: '1500px' }}>
      <Header />
      <Featured />
      <VenueNfo />

      <Element name='highlights'>
        <Highlight />
      </Element>

      <Pricing />
      <Location />
      <Footer />
    </div>
  )
}

export default App
