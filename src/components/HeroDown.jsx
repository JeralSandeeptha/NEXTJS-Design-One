'use client'
import React, { useState } from 'react'
import '../styles/HeroDown/HeroDown.css';

const HeroDown = () => {

  const [boxes, setBoxes] = useState([
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    },
    {
      id: 4
    },
    {
      id: 5
    },
    {
      id: 6
    },
    {
      id: 7
    },
    {
      id: 8
    },
    {
      id: 9
    },
  ]);

  return (
    <div className='hero-down'>
        <div className='hero-down-inner'>
          <div className='top'>
            <h4>We advise leaders on strategy, <br /> marketing, organization and IT</h4>
            <button>
              LEARN MORE
            </button>
          </div>
          <div className='bottom'>
            {
              boxes.map( (box, index) => {
                return (
                  <div className='box' key={index}>
                    <div className='arrow'>
                      <img src="data:image/png;base64,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" alt="" />
                    </div>
                    <p><span>Sample text.</span> Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                  </div>
                )
              })
            }
          </div>
        </div>
    </div>
  )
}

export default HeroDown