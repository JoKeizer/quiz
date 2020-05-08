import React, {useState, Fragment} from 'react';

import './Score.css';
import TimeProgress from '../timeProgress/TimeProgress';

function Score ({totalPoints}) {
    return (
        <Fragment>
            <p className="points">Totaal: {totalPoints}</p>
        </Fragment>
    );
}

export default Score


