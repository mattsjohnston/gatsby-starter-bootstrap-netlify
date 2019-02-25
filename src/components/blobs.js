// @ts-nocheck
import React from 'react'

const Blobs = () => {
  return (
    <div class="blobs-container">
      <div class='blobs blobs-blue'>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
      </div>
      <div class='blobs blobs-yellow'>
        <div class="blob"></div>
        <div class="blob"></div>
      </div>
      <div class='blobs blobs-subtle'>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
      </div>
      <div class='blobs blobs-white'>
        <div class="blob"></div>
      </div>
      <div class='blobs blobs-orange'>
        <div class="blob"></div>
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
            <feColorMatrix in="blur-md" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 660 -209" />
            <feBlend in2="goo-md" in="SourceGraphic" result="mix" />
          </filter>

          <filter id="goo-lg">
            <feGaussianBlur in="SourceGraphic" stdDeviation="100" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 600 -190" />
            <feBlend in2="goo-lg" in="SourceGraphic" result="mix" />
          </filter>
        </defs>
      </svg>

    </div>
  )
}

export default Blobs
