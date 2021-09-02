import React from 'react';
import './Info.scss';

function Info() {
  return (
    <div className="info">
      <h1 className="info__name">Brian Sai</h1>
      <p className="info__summary">
        Welcome to my portfolio! I'm a Full Stack Developer based in San
        Francisco. Thanks for stopping by!
      </p>
      <div className="info__btn">
        <button>Learn More</button>
      </div>
    </div>
  );
}

export default Info;
