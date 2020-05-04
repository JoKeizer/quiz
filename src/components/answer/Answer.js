import React, {useState} from 'react';
import './Answer.css';


function Answer ({id, answer}) {
    return (
        <button className="btn-answer" value={id}><div className="answer-id">{id}</div>
        {answer}
        </button>
    
    );
}

export default Answer


