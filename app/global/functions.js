import React from 'react';

// Get random int from 'min' to 'max'
export default function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}