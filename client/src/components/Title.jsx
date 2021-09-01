import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Title.scss';

function Title() {
  const { ref, inView } = useInView({ threshold: 0 });

  const titleInView = inView ? 'title__headline' : null;
  return (
    <div ref={ref} className="title">
      {/* <div className="title__container"> */}
      {/* <div className={titleInView}></div> */}
      {/* <div className=""> */}
      Potatos
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}

export default Title;
