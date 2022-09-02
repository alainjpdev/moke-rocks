import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>NEWS</h1>
      
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/jimmy.png'
              text_title="Posted on Aug 09, 2022"
              text="Tonight Show host Jimmy Fallon was spotted checking out our custom-wrapped Moke cruiser 
              behind the new Valentino store in East Hampton. 
              The electric Mokes were wrapped in the brands new..."
              label='Jimmy Fallon Checking Out The Moke'
              path='/services'
            />
            <CardItem
              src='images/f1.png'
              alt="Jimmy F"
              text_title="Posted on May 09, 2022"
              text="F1 MIAMI WINNER MAX VERSTAPPEN MADE HIS VICTORY LAP IN AN ELECTRIC MINI MOKE FROM MOKE 
              AMERICA Verstappens Ride Was Part Of A Fleet Of 20 Electric Mokes On-Site At..."
              label='Moke America At F1 Miami Grand Prix'
              path='/services'
            />
          </ul>
      
        </div>
      </div>
    </div>
  );
}

export default Cards;
