import React, { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import './App.css'
import MailList from './components/mailList/MailList'
import Footer from './components/Footer'
import Featured from './components/Featured'
import HostingType from './components/HostingType'

export default function App() {
  return (
    <div className='homeContainer'>
      <Navbar />
      <div className='headerpar'>
        <Header />
        <div className='searchabs'>
          <SearchBar />
        </div>
        
      </div>
      <Featured />
      {/* <h1 className="homeTitle"> Browse by City:</h1>
      <HostingType /> */}
      <Footer />

    </div>
    
  );
}



