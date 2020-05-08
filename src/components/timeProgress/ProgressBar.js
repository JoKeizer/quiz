import React, {useState, Fragment} from 'react';

import './ProgressBar.css';
import TimeProgress from '../timeProgress/TimeProgress';
import Filler from "./Filler";

function ProgressBar ({percentage}) {
    return (
        <div className="progress-bar">
            <Filler percentage={percentage}/>
        </div>
    );
}

export default ProgressBar


