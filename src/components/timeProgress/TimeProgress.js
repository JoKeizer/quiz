import React, {Fragment, useState} from "react";
import ReactDOM from "react-dom";
import VisibilitySensor from "react-visibility-sensor";
import { animated, useSpring, config } from 'react-spring';


import './TimeProgress.css';

function TimeProgress ({percent, time, score}) {
    console.log(time)
    const scoreNumber = useSpring({ 
        from: { val: 0 }, to: { val: 100 },
        config: {duration: `${time}`}
    });

    const [isInView, setIsInView] = useState(false);
    const onVisibilityChange = isInView => setIsInView(isInView);

    const progressSpringStyleProps = useSpring({
        width: isInView ?  `0%` : `${percent}%`,
        config: { mass: 10, tension: 400, friction: 40, precision: 0.00001, duration: `${time}` },
      });

    
    return (
  
    <VisibilitySensor onChange={onVisibilityChange}>
      <div>
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


