'use client'
import React, { useState } from 'react'
import '../styles/Features/Features.css';

const Features = () => {

  const [boxes, setBoxes] = useState([
    {
      id: 1,
      color: 'black',
      bgColor: '#20F255',
      mainText: '50%',
      subText: 'Sample text. Click to select the text box.'
    },
    {
      id: 2,
      color: 'white',
      bgColor: '#404040',
      mainText: '36%',
      subText: 'Click again or double.'
    },
    {
      id: 3,
      color: 'black',
      bgColor: '#F2F2F2',
      mainText: '20%',
      subText: 'Click again or double click to start editing the text.'
    },
  ]);

  return (
    <div className='features'>
      <div className="features-inner">
        <h2 className='header'>Together we can envision, inspire and <br /> transform your business</h2>
        <div className="bottom">
          {
            boxes.map( (box, index) => {
              return (
                <div className="box" key={box.id} style={{
                  backgroundColor: box.bgColor,
                }}>
                  <h3 className='main' style={{ color: box.color }}>{box.mainText}</h3>
                  <h5 className='sub' style={{ color: box.color }}>{box.subText}</h5>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Features
