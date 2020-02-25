import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Icon } from 'antd';
import AOS from 'aos';
import './Faq.css';

const dots3 = require('../assets/dots3.svg');

class Faq extends Component {
  render(){
    return(
      <div className="container-fluid Faq">
        <div className="row">
          <h1 className="Faq__header">FAQ</h1>
          <div className="col-4 Faq__col">
            <div className="Faq__inner_container" style={{animation: `moveUpDown ${Math.floor(Math.random() * 5) + 2}s linear infinite`}}>
              <h1 className="Faq__inner_title">What is a hackathon?</h1>
              <p className="Faq__inner_text">A hackathon is a place where you and hundreds of other people learn, build, and create new technologies over the course of one weekend! Hackathons let you try learning a new skill, commit to that crazy idea you've never had time for, or make new friendships and strengthen old ones.</p>
            </div>
            <div className="Faq__inner_container" style={{marginTop: '10%', animation: `moveUpDown ${Math.floor(Math.random() * 5) + 2}s linear infinite`}}>
              <h1 className="Faq__inner_title">Do I need a team?</h1>
              <p className="Faq__inner_text">Teams are not required, but are recommended. Teams are capped at 4 members and you will have an opportunity to form teams at the start of the event as well.</p>
            </div>
          </div>
          <div className="col-4 Faq__col">
            <div className="Faq__inner_container" style={{marginTop: '8%', animation: `moveUpDown ${Math.floor(Math.random() * 5) + 2}s linear infinite`}}>
              <h1 className="Faq__inner_title">Who can attend?</h1>
              <p className="Faq__inner_text">We welcome all undergraduate students from UCR, RCC, and CBU to attend. </p>
            </div>
            <div className="Faq__inner_container" style={{marginTop: '14%', animation: `moveUpDown ${Math.floor(Math.random() * 5) + 2}s linear infinite`}}>
              <h1 className="Faq__inner_title">Is Citrus Hack free?</h1>
              <p className="Faq__inner_text">Absolutely! There is no cost to attend, but do bring your own hacking device(s)!</p>
            </div>
          </div>
          <div className="col-4 Faq__col">
            <div className="Faq__inner_container" style={{animation: `moveUpDown ${Math.floor(Math.random() * 5) + 2}s linear infinite`}}>
              <h1 className="Faq__inner_title">Is there free food?</h1>
              <p className="Faq__inner_text">Yes! Meals, refreshments, and snacks will be provided throughout the event</p>
            </div>
            <div className="Faq__inner_container" style={{marginTop: '12%', animation: `moveUpDown ${Math.floor(Math.random() * 5) + 2}s linear infinite`}}>
              <h1 className="Faq__inner_title">What should I bring?</h1>
              <p className="Faq__inner_text">Student IDs are required. Consider bringing a hacking machine, headphones, and computer peripherals. Feel free to bring your own parts as well but note that soldering is not allowed at Citrus Hack.</p>
            </div>
            <img className="Faq__dots" src={dots3} />
          </div>
        </div>
      </div>
    )
  }
}

export default Faq;
