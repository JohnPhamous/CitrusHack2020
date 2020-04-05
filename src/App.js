import React from 'react';
import logo from './logo.svg';
import { Button, Icon } from 'antd';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Faq from './components/Faq/Faq';
import Sponsors from './components/Sponsors/Sponsors';
import Tracks from './components/Tracks/Tracks';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const footerBg = require('./components/assets/citrus-footer-new.svg');

function App() {
  return (
        <div className='app' style={{backgroundColor: '#ececee'}}>
          <img className="App__banner" src={"https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-black.svg"}></img>
          <Navbar />
          <div id="home"><Home /></div>
          <div id="about"><About /></div>
          <div id="tracks"><Tracks /></div>
          <div id="faq"><Faq /></div>
          <div id="sponsors"><Sponsors /></div>
          <div className="App__footer">
            <img className="App__footer_img" src={footerBg} />
          </div>
      </div>
  );
}
export default App;
