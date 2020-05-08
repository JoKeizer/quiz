import React, {Fragment, useState} from 'react';
import './App.css';
import Progress from './components/progress/Progress';
import Question from './components/question/Question';
import Answers from './components/answers/Answers';
import Header from './components/header/Header';
import Score from './components/score/Score';
import Media from './components/media/Media'
import TimeProgress from "./components/timeProgress/TimeProgress";


function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [stopTimer, setTimer] = useState(true);
  const [reset, resetTimer] = useState(false);
  const [finishQuiz, setFinishQuiz] = useState(true);
  const [userAnswersID, setUserAnswersID] = useState();


  const questions = [
    {
      id: 0,
      question: "Welke Feyenoorder speelde dit seizoen de meeste minuten onder Dick Advocaat?",
      answers: ["Leroy Fer", "Marcos Senesi", "Steven Berghuis", "Justin Bijlow"],
      image: "/../../../images/voetbal.jpg",
      video: "",
      correctAnswer: "Leroy Fer"
    },
    {
      id: 1,
      question: "From witch year is this picture? ",
      answers: ["1989", "1988 ", "1987", "1990"],
      video: "www.youtube.com/embed/25rv6hZK-1A",
      answer: "1988"
    },
    {
      id: 2,
      question: "The Hand of God goal from Diego Maradona was scored against?",
      answers: ["Brazil", "England", "Netherlands", "Spain"],
      image: "/../../../images/maradona.jpg",
      video: "",
      answer: "England"
    },
    // {
    //   id: 3,
    //   question: "Which Williams sister has won more Grand Slam titles?",
    //   answers: ["Serena Williams", "Venus Williams"],
    //   image: "",
    //   video: "",
    //   answer: "Serena Williams"
    // },
    // {
    //   id: 4,
    //   question: "What country won the very first FIFA World Cup in 1930?",
    //   answers: ["Spain", "Uruguay", "Germany", "Argentina"],
    //   image: "",
    //   video: "",
    //   answer: "Uruguay"
    // },
    // {
    //   id: 5,
    //   question: "In what year was the first ever Wimbledon Championship held?",
    //   answers: ["1910", "1887", "1877", "1904"],
    //   image: "",
    //   video: "",
    //   answer: "1877"
    // },
    // {
    //   id: 6,
    //   question: "Which racer holds the record for the most Grand Prix wins?",
    //   answers: ["Sebastian Vettel", "Lewis hamilton ", "Max Verstappen", "Michael Schumacher"],
    //   image: "",
    //   video: "",
    //   answer: "Michael Schumacher"
    // },
    // {
    //   id: 7,
    //   question: "Which of these events is NOT part of a decathlon?",
    //   answers: ["Javelin", "1500m", "Hammer throw", "Pole vault"],
    //   image: "",
    //   video: "",
    //   answer: "Hammer Throw"
    // },
  ];


  const resetQuiz= () => {
    setFinishQuiz(true);
    setCurrentQuestion(0);
    setUserAnswers([]);
    setTimer(true);
  }


  const question = questions[currentQuestion];

  //on question click
  const handleClick = (e) => {
    e.preventDefault();
    const questionIndex = parseInt(e.currentTarget.getAttribute('data-question-index'));

    const answerIndex = parseInt(e.target.value);
    setUserAnswersID(answerIndex);
    setUserAnswer(questionIndex, answerIndex);
    if (questionIndex + 1 < questions.length) {
      goToQuestion(questionIndex + 1);
    } else {
      setFinishQuiz(false);
    }
    stopTimerOnClick();
  };

  const setUserAnswer = (questionIndex, answerIndex) => {
    userAnswers[questionIndex] = answerIndex;
    setUserAnswers(userAnswers);
  };

  //Next question
  const goToQuestion = (questionIndex) => {
    if (questionIndex < questions.length) {
      setTimeout(() => {
        setUserAnswersID(null)
        console.log(userAnswersID, "onTIMEOUT?????")

        setCurrentQuestion(questionIndex)
        resetTimerOnNextQuestion();
      }, 1000);
    }
  };

const stopTimerOnClick = () => {
    setTimer(stopTimer => !stopTimer)
};

const resetTimerOnNextQuestion = () => {
  resetTimer(reset => !reset)
};

console.log("userAnswers", userAnswers)

  return (
      <Fragment>
        {finishQuiz ? (
            <Fragment>
              <div className="container">
                <Header title="Trivia"/>
                <div className="game-container">
                  <Progress currentQuestion={currentQuestion + 1} total={questions.length} active={true}/>
                  {question.video && question.image === '' ? null : <Media image={question.image} video={question.video}/>}
                  <Question question={question.question}/>
                  <Answers
                      currentQuestion={question}
                      currentQuestionIndex={currentQuestion}
                      userAnswerID={userAnswersID}
                      handleClick={handleClick}
                  />
                  <TimeProgress
                      percent={60}
                      time={30000}
                      stopTimerOnClick={stopTimer}
                      resetTimerOnNextQuestion={reset}
                  />

                  <Score
                      totalPoints={365}
                  />
                </div>
              </div>
            </Fragment>

        ) : (
            <Fragment>
              <div className="container">
                <Header title="Finish"/>
                <div className="game-container">
                  <ul className="answer-list">{userAnswers.map(item => (
                      <li>{item}</li>
                  ))}</ul>

                  <div className="total-time">Total time: 29sec</div>
                  <div className="total-ranking">Ranglijst: 2nd</div>

                  <Score
                      Score={365}
                  />
                  <button className="btn" onClick={() => resetQuiz()} >Play again</button>

                </div>
              </div>
            </Fragment>
        ) }

      </Fragment>


  );
}
export default App;

