import React,{useState} from 'react';
import './App.css';
import Progress from './components/progress/Progress'
import Question from './components/question/Question'
import Answers from './components/answers/Answers'
import Header from './components/header/Header'
import Score from './components/score/Score'
import {QuizData} from './data/Data'


function App() {

const [currentQuestion, setCurrentQuestion] = useState(0);
const [currentAnswer, setCurrentAnswer] = useState([]);
const [answers, setAnswers] = useState([]);
const [error, setError] = useState('')

const questions = [
  {
    id: 0,
    question: "Welke Feyenoorder speelde dit seizoen de meeste minuten onder Dick Advocaat?",
    answers: ["Leroy Fer", "Marcos Senesi", "Steven Berghuis", "Justin Bijlow"],
    image: "",
    correctAnswer: "Leroy Fer"
  },  
    {
      id: 1,
      question: "From witch year is this picture? ",
      answers: ["1989", "1988 ", "1987", "1990"],
      image: "/../../../images/voetbal.jpg",
      answer: "1988"
    },
    {
      id: 2,
      question: "The Hand of God goal from Diego Maradona was scored against?",
      answers: ["Brazil", "England", "Netherlands", "Spain"],
      image: "/../../../images/maradona.jpg",
      answer: "England"
    },
    {
      id: 3,
      question: "Which Williams sister has won more Grand Slam titles?",
      answers: ["Serena Williams", "Venus Williams"],
      image: "",
      answer: "Serena Williams"
    },
    {
      id: 4,
      question: "What country won the very first FIFA World Cup in 1930?",
      answers: ["Spain", "Uruguay", "Germany", "Argentina"],
      image: "",
      answer: "Uruguay"
    },
    {
      id: 5,
      question: "In what year was the first ever Wimbledon Championship held?",
      answers: ["1910", "1887", "1877", "1904"],
      image: "",
      answer: "1877"
    },
    {
      id: 6,
      question: "Which racer holds the record for the most Grand Prix wins?",
      answers: ["Sebastian Vettel", "Lewis hamilton ", "Max Verstappen", "Michael Schumacher"],
      image: "",
      answer: "Michael Schumacher"
    },
    {
      id: 7,
      question: "Which of these events is NOT part of a decathlon?",
      answers: ["Javelin", "1500m", "Hammer throw", "Pole vault"],
      image: "",
      answer: "Hammer Throw"
    },
]

const question = questions[currentQuestion];

const handleClick = e => {
  console.log("ONCLICK EVENT ", e.target.value)
  setCurrentAnswer(e.target.value)
//   console.log("IM RUNNING AFTER SETCURRENTANSWER?????")
 console.log("currentAnswer ", currentAnswer)

  nextQuestion()
}

const nextQuestion = () => {
  const answer ={questionId:question.id, answer: currentAnswer}

  answers.push(answer)
  setAnswers(answers)
  setCurrentAnswer(currentAnswer)
  console.log("currentAnswer nextQuestion", currentAnswer)
  console.log("answers", answers)

  if(currentQuestion + 1 < questions.length) {
    setCurrentQuestion(currentQuestion + 1)
    return;
  }

}

console.log("currentAnswer APP",currentAnswer)

  return (
    <div className="container">
      <Header title="Trivia"/>
      <div className="question-container">
        <Progress currentQuestion={currentQuestion + 1} total={questions.length} active={true}/>
        <Question question={question.question}/>
        <Answers 
          answers={question} 
          currentAnswer={currentAnswer}
          handleClick={handleClick}
          nextQuestion={nextQuestion}
        />
        <Score totalPoints={365} time={30000}/>

      </div>
    </div>
  );
}

export default App;
