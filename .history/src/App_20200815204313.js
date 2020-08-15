import React from 'react';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
import Highlight from './components/Highlights';
import Pricing from './components/pricing';

import './resources/styles.css';

function App() {
  return (
    <div className="App" style={{height: '1500px'}}>
      <Header />
      <Featured />
      <VenueNfo />
      <Highlight />
      <Pricing />
    </div>
  );
}

export default App;
