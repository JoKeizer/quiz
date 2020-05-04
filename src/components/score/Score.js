import React, {useState, Fragment} from 'react';
import { animated, useTrail } from 'react-spring';

import './Score.css';
import TimeProgress from '../timeProgress/TimeProgress';

function Score ({totalPoints, time,}) {

    return (
        <Fragment>
           <TimeProgress percent={100} time={time} score={76}/>

            <p className="points">Totaal: {totalPoints}</p>

        </Fragment>
    );
}

export default Score


