// @ts-nocheck
import React from 'react'

const Blobs = () => {
  return (
    <div className="blobs-container">
      <div className='blobs blobs-blue'>
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
      </div>
      <div className='blobs blobs-yellow'>
        <div className="blob"></div>
        <div className="blob"></div>
      </div>
      <div className='blobs blobs-subtle'>
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
      </div>
      <div className='blobs blobs-white'>
        <div className="blob"></div>
        <div className="blob"></div>
      </div>
      <div className='blobs blobs-orange'>
        <div className="blob"></div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 480 -152" />
            <feBlend in2="goo" in="SourceGraphic" result="mix" />
          </filter>

          <filter id="goo-md">
            <feGaussianBlur in="SourceGraphic" stdDeviation="60" result="blur-md" />
            <feColorMatrix in="blur-md" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 480 -152" />
            <feBlend in2="goo-md" in="SourceGraphic" result="mix" />
          </filter>

          <filter id="goo-lg">
            <feGaussianBlur in="SourceGraphic" stdDeviation="60" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 300 -70" />
            <feBlend in2="goo-lg" in="SourceGraphic" result="mix" />
          </filter>
        </defs>
      </svg>

    </div>
  )
}

export default Blobs
