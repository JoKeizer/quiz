import React, {Fragment, useState} from 'react';
import './Answers.css';
import Answer from '../answer/Answer'
function Answers({currentQuestion, currentQuestionIndex, userAnswerID, handleClick}) {
    let selectedValue = null;
    let userAnswer = null;
    const abs = ['A', 'B', 'C', 'D'];
    return (
        <Fragment>
            {(currentQuestion.answers).map((answer, index) => {
                    const selectedValue = index ;
                    let userAnswer = parseInt(userAnswerID)
                    return <Answer
                        key={index}
                        letter={abs[index]}
                        currentQuestionIndex={currentQuestionIndex}
                        valueId={selectedValue}
                        handleClick={handleClick}
                        answer={answer}
                        selected={ userAnswer === selectedValue }
                    />
                }
            )}
        </Fragment>
    );
}
export default Answers