import React, {useState, Fragment} from 'react';
import { animated, useTrail } from 'react-spring';

import './Progress.css';

function Progress ({currentQuestion, total, active}) {


    const trail = useTrail(total, {

        from: {
            opacity: 0,
            transform: 'scale(0.3)'
        },
        to: {
            opacity: 1,
            transform: 'scale(1)'

        }
    });

    return (
        <Fragment>
                <p className="question-title">Question {currentQuestion}/{total} </p>
                <div className="box-container">
                {trail.map(animation => (
                <animated.div className={active ? "box-active" : "box"} style={animation} />
            ))}
                </div>

       
        </Fragment>
    );
}

export default Progress


