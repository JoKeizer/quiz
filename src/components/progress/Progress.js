import React, {useState} from 'react';
import './Progress.css';

function Progress ({currentQuestion, total}) {
    return (
    <p className="question-title">Question {currentQuestion}/{total} </p>
    );
}

export default Progress


