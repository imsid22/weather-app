import React from 'react';

const Weather = props => {
    return (
        <div className="container">
            <div className="cards pt-4">
                <h1>{props.query}</h1>
                <h5 className="py-4"> </h5>
                {displayWeather(props.state, props.min, props.max)}
            </div>
        </div>
    );

};

export default Weather;

function displayWeather(state, min, max) {
    if (max && min && state) {
      return (
        <h3>
          <span className="px-4">{state};</span>
          <span className="px-4">{min}&deg;</span>
          <span className="px-4">{max}&deg;</span>
        </h3>
      );
    }
  }