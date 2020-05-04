import React from 'react';
import './App.css';
import Progress from './components/progress/Progress'
import Question from './components/question/Question'
import Answers from './components/answers/Answers'
import Header from './components/header/Header'
import Score from './components/score/Score'


function App() {
  return (
    <div className="container">
      <Header title="Trivia"/>
      <div className="question-container">
        <Progress currentQuestion="1" total={10} active={true}/>
        <Question question="Welke Feyenoorder speelde dit seizoen de meeste minuten onder Dick Advocaat?"/>
        <Answers />
        <Score totalPoints={365} time={3000}/>

      </div>
    </div>
  );
}

export default App;
