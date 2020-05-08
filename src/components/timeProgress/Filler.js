import React, {useState, Fragment} from 'react';

import './ProgressBar.css';

function Filler ({percentage}) {
    return (
        <div className="filler" style={{ width: `${percentage}%`}}></div>
    );
}

export default Filler