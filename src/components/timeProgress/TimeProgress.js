import React, {Fragment, useRef, useState, useEffect} from "react";
import ReactDOM from "react-dom";
import VisibilitySensor from "react-visibility-sensor";
import { animated, useSpring, config } from 'react-spring';
import * as easings from 'd3-ease';


import './TimeProgress.css';

function TimeProgress ({percent, time, score}) {
  // const seconds = time / 1000;

  //Total time about a question
  let timeQuestion = null;

  const [seconds, setSeconds] = useState(0);
  const [delay, setDelay] = useState(time);
  const [timerOn, setTimerOn] = useState(true)


  useEffect(() => {
    const interval = setInterval(() => {
      if(timerOn) {
        setSeconds(seconds => seconds + 1);
        // console.log("timer on")
      } else {
        timeQuestion = seconds;
        console.log(timeQuestion, "total time about this question")
        clearInterval(seconds)
        setSeconds(timeQuestion)
      }
    }, 1000);
    return () => clearInterval(interval);

  }, [timerOn]);

    const scoreNumber = useSpring({
        from: { val: 100 }, to: { val: 0 },
        config: {duration: 30000, easing: easings.easeLinear}
    });

    const [isInView, setIsInView] = useState(false);
    const onVisibilityChange = isInView => setIsInView(isInView);

    const progressSpringStyleProps = useSpring({
        width: isInView ?  `0%` : `${percent}%`,
        config: { duration: 30000, easing: easings.easeLinear }
      });

  
      const stopTimer = () => setTimerOn(false)

    return (
  
    <VisibilitySensor onChange={onVisibilityChange}>
      <div>
      {seconds} seconds have elapsed since mounting.
      <button onClick={stopTimer}>pause interval</button>
    <p>Total score: {100 - seconds}</p>

        <animated.div>
       {scoreNumber.val.interpolate(val => Math.floor(val))}
    </animated.div>
        <div className={"progressbar"}>
          <animated.div
            className={"progressbar-active"}
            style={progressSpringStyleProps}
          />
        </div>
      </div>
    </VisibilitySensor>
    );

}



export default TimeProgress


