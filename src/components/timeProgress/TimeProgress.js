import React, {Fragment, useRef, useState, useEffect} from "react";
import ReactDOM from "react-dom";
import VisibilitySensor from "react-visibility-sensor";
import { animated, useSpring, config } from 'react-spring';
import * as easings from 'd3-ease';
import './TimeProgress.css';
import ProgressBar from "./ProgressBar";


function TimeProgress ({percent, time , stopTimerOnClick, resetTimerOnNextQuestion}) {
  let timeQuestion = null;

  const [seconds, setSeconds] = useState(0);
  let [percentRange, setProgress] = useState(60);


  useEffect(() => {
    const interval = setInterval(() => {
      if(stopTimerOnClick) {
        setSeconds(seconds => seconds + 1);
      } else {
        timeQuestion = seconds;
        clearInterval(seconds)
        setSeconds(timeQuestion)
      }
    }, 1000);
    return () => clearInterval(interval);

  }, [stopTimerOnClick]);


    return (
      <div>
      {seconds} seconds have elapsed since mounting.
          <p>Total score: {100 - seconds}</p>
        <ProgressBar
            percentage={percentRange}
        />
      </div>
    );

}



export default TimeProgress


