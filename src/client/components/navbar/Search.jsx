import React from 'react';
import axios from 'axios';
import states from './data';

export default function Search() {

  // fetch('/states.json')
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);
  //   })


  return (
    <>
      <h2>Search</h2>
      <div>
        {states.map(state => {
          const { name, abbreviation } = state;

          return (
            <div>
              <p>color: {name}</p>
              <p>value: {abbreviation}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}
