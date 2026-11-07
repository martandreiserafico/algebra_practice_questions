import { useState } from 'react';
import './App.css';

const questionsData = [
  { id: 1, text: "A manufacturing company recently purchased $3000 worth of new equipment to offer new personalized stationery to its customers. The cost of producing a package is $3.00, and it is sold for $5.50. Find the number of packages that must be sold for the company to break even.", options: ["1100", "1200", "1300", "1000"], answer: "1200" },
  { id: 2, text: "The vertex angle of an isosceles triangle is 56°. Find the measure of each base angle.", options: ["62", "52", "42", "32"], answer: "62" },
  { id: 3, text: "If a certain number is subtracted from the numerator and added to the denominator of 9/19, the new fraction is equivalent to 1/3. Find the number.", options: ["1", "3", "2", "4"], answer: "2" },
  { id: 4, text: "A family drove to the Grand Canyon, averaging 45 mph. They returned using the same route, averaging 60 mph. If they spent a total of 7 hours of driving time, how far is their home from the Grand Canyon?", options: ["170 mi", "180 mi", "160 mi", "190 mi"], answer: "180 mi" },
  { id: 5, text: "Lynn Pike, a pharmacist, needs 70 liters of a 50% alcohol solution. She has available a 30% alcohol solution and an 80% alcohol solution. How many liters of 80% solution should she mix to obtain 70 liters of a 50% alcohol solution?", options: ["28", "26", "22", "25"], answer: "28" },
  { id: 6, text: "If the perimeter of an equilateral triangle is less than 15 feet, how long could each side be?", options: ["x > 5", "x < 5", "x <= 5", "x >= 5"], answer: "x < 5" },
  { id: 7, text: "Two cars leave Indianapolis, one traveling east and the other west. After 3 hours, they are 297 miles apart. If one car is traveling 5 mph faster than the other, what is the speed of the faster car?", options: ["52 mph", "25 mph", "55 mph", "22 mph"], answer: "52 mph" },
  { id: 8, text: "A car leaves Beloit, heading east at 50 mph. One hour later, a second car leaves Beloit, heading east at 65 mph. How long will it take for the second car to overtake the first car?", options: ["1.1 hr", "2.2 hr", "3.3 hr", "4.4 hr"], answer: "3.3 hr" },
  { id: 9, text: "In the United States, 7 out of every 25 homes are heated by electricity. At this rate, how many homes in a community of 36,000 homes would you predict are heated by electricity?", options: ["10080", "10090", "10070", "10060"], answer: "10080" },
  { id: 10, text: "Fancy cashews are not selling at $9 per pound, because they are too expensive. However, filberts are selling well at $6 per pound. How many pounds of filberts should be combined with 50 pounds of cashews to obtain a mixture that can be sold at $7 per pound?", options: ["100", "120", "130", "140"], answer: "100" },
  { id: 11, text: "A first number is 4 less than a second number. Four times the first number is 6 more than twice the second. Find the second number.", options: ["7", "5", "9", "11"], answer: "11" },
  { id: 12, text: "For 2010, the WNBA's top scorer was Diana Taurasi. She scored a total of 745 points during the regular season. The number of two-point field goals Taurasi made was 36 fewer than two times the number of three-point field goals she made. The number of free throws she made was 61 more than the number of two point field goals she made. Find how many free throws Diana Taurasi made during the 2010 regular season.", options: ["210", "201", "120", "102"], answer: "201" },
  { id: 13, text: "The perimeter of a square piece of land is twice the perimeter of an equilateral triangular lot. If one side of the square is 60 meters, find the length of a side of the triangle.", options: ["20", "50", "40", "30"], answer: "40" },
  { id: 14, text: "America's consumption of red meat has decreased most years since 2000, while consumption of poultry has increased. The function y = -8.56x + 113.6 approximates the annual pounds of red meat consumed per capita, where x is the number of years since 2000. The function y = 8.76x + 68.57 approximates the annual pounds of poultry consumed per capita, where x is also the number of years since 2000. If this trend continues, determine the year when the annual consumption of red meat and poultry will be equal.", options: ["34.41", "31.41", "34.11", "31.11"], answer: "31.41" },
  { id: 15, text: "Melissa Scarlatti can clean the house in 4 hours, whereas her husband, Zack, can do the same job in 5 hours. They have agreed to clean together so that they can finish in time to watch a movie on TV that starts in 2 hours. How long will it take them to clean the house together?", options: ["2.22", "1.11", "4.44", "3.33"], answer: "2.22" },
  { id: 16, text: "One integer is 5 less than another and their product is 84. Find the smaller integer.", options: ["7", "8", "6", "9"], answer: "7" },
  { id: 17, text: "You can design a Web site in 15 hours. Your friend can design the same site in 10 hours. How long will it take to design the Web site if you both work together?", options: ["4 hrs", "5 hrs", "6 hrs", "3 hrs"], answer: "6 hrs" },
  { id: 18, text: "An installer of underground irrigation systems wants to cut a 20-foot length of plastic tubing into two pieces. The longer piece is to be 2 feet longer than twice the shorter piece. Find the length of the longer piece.", options: ["10", "14", "16", "18"], answer: "14" },
  { id: 19, text: "Suppose a company that manufactures this invention has a fixed monthly cost of $1,000,000 and that it costs $5000 to produce each robotic system. How many robotic systems must be produced each month for the company to reach an average cost of $5500 per system?", options: ["1000", "2000", "1500", "2500"], answer: "2000" },
  { id: 20, text: "A wheelchair ramp with a length of 122 inches has a horizontal distance of 120 inches. What is the ramp's vertical distance?", options: ["20 in", "21 in", "22 in", "23 in"], answer: "22 in" },
  { id: 21, text: "A man budgets from $300 to $600 for trees and bushes to landscape his yard. After shopping around, he finds that good trees cost $150 and mature bushes cost $75. What is the maximum number of bushes can he afford to buy?", options: ["8", "9", "10", "7"], answer: "8" },
  { id: 22, text: "After designing your Web site, you and your friend decide to go into business setting up sites for others. With lots of practice, you can now work together and design a modest site in 4 hours. Your friend is still a faster worker. Working alone, you require 6 more hours than she does to design a site for a client. How many hours does it take your friend to design a Web site if she works alone?", options: ["5 hrs", "6 hrs", "7 hrs", "8 hrs"], answer: "6 hrs" },
  { id: 23, text: "Assume that a rectangle has an area of 52 square centimeters and that its length is 1 centimeter more than 3 times its width. Find the perimeter of the rectangle.", options: ["34", "44", "54", "24"], answer: "34" },
  { id: 24, text: "A ball is thrown vertically upward from the top of the Leaning Tower of Pisa (190 feet high) with an initial velocity of 96 feet per second. The function s(t) = -16t^2 + 96t + 190 models the ball's height above the ground, s(t), in feet, t seconds after it was thrown. During which time period will the ball's height exceed that of the tower?", options: ["between 0 and 6 seconds", "between 5 and 6 seconds", "between 6 and 12 seconds", "5 seconds"], answer: "between 0 and 6 seconds" },
  { id: 25, text: "When you use a spray can and press the valve at the top, you decrease the pressure of the gas in the can. This decrease of pressure causes the volume of the gas in the can to increase. Because the gas needs more room than is provided in the can, it expands in spray form through the small hole near the valve. In general, if the temperature is constant, the pressure of a gas in a container varies inversely as the volume of the container. The pressure of a gas sample in a container whose volume is 8 cubic inches is 12 pounds per square inch. If the sample expands to a volume of 22 cubic inches, what is the new pressure of the gas?", options: ["4 4/11", "1 1/44", "4 1/44", "1 4/11"], answer: "4 4/11" },
  { id: 26, text: "Tom has 150 feet of fencing to enclose a rectangular garden. If the length is to be 5 feet less than 3 times the width, find the area of the garden.", options: ["1200", "1000", "1300", "1100"], answer: "1100" },
  { id: 27, text: "A form of DDT pesticide (banned in 1972) has a half-life of approximately 15 years. If a storage unit had 400 pounds of DDT, find how much DDT is remaining after 72 years. Round to the nearest tenth of a pound.", options: ["11.1", "14.4", "13.3", "12.2"], answer: "14.4" },
  { id: 28, text: "Find an earthquake's magnitude on the Richter scale if a recording station measures an amplitude of 300 micrometers and 2.5 seconds between waves. Assume that B is 4.2. Approximate the solution to the nearest tenth.", options: ["5.3", "6.3", "7.3", "8.3"], answer: "6.3" },
  { id: 29, text: "The population size y of a community of lemmings varies according to the relationship y = yo * e^(0.15t). In this formula, t is time in months, and yo is the initial population at time 0. Estimate the population after 6 months if there were originally 5000 lemmings.", options: ["12300", "12200", "13300", "13200"], answer: "12300" },
  { id: 30, text: "The owner of a machine shop buys a lathe for $1,970 and expects it to last for ten years. It can then be sold as scrap for an estimated salvage value of $270. If y represents the value of the lathe after x years of use, and x and y are related by the equation of a line, find the value of the lathe after 2 years.", options: ["1455", "1554", "1545", "1445"], answer: "1545" },
  { id: 31, text: "The time it takes to build a highway varies directly with the length of the road, but inversely with the number of workers. If it takes 100 workers 4 weeks to build 2 miles of highway, how long will it take 80 workers to build 10 miles of highway?", options: ["20", "25", "27", "29"], answer: "25" },
  { id: 32, text: "Many camera lenses have an adjustable opening called the aperture, which controls the amount of light passing through the lens. The f-number of a lens is its focal length divided by the diameter of its circular aperture. A lens with a focal length of 12 centimeters and an aperture with a diameter of 6 centimeters has an f-number of 12/6 and is an f/2 lens. If the area of the aperture is reduced to admit half as much light, the f-number of the lens will change. Find the new f-number.", options: ["f/2.2", "f/2.8", "f/2.4", "f/2.6"], answer: "f/2.8" },
  { id: 33, text: "The apparent brightness B of a light source is directly proportional to the luminosity of the light source and inversely proportional to the square of the distance d from the light source. If the distance is cut in half and the luminosity is tripled, by what factor will the brightness change?", options: ["12 times", "13 times", "14 times", "15 times"], answer: "12 times" },
  { id: 34, text: "A dam is built on a river to create a reservoir. The water level f(t) in the reservoir at time is given by: f(t) = 4.5t + 28 where t is the number of years since the dam was constructed and f(t) is measured in feet. What is the slope of the graph?", options: ["3.5", "4.5", "2.5", "5.5"], answer: "4.5" },
  { id: 35, text: "A hockey team plays in an arena that has a seating capacity of 15,000 spectators. With the ticket price set at $14, average attendance at recent games has been 9500. A market survey indicates that for each dollar the ticket price is lowered, the average attendance increases by 1000. What ticket price is so high that no one attends and so no revenue is generated?", options: ["25.3", "32.5", "35.2", "23.5"], answer: "23.5" }
];

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

function App() {
  const [currentView, setCurrentView] = useState('home'); 
  const [attempts, setAttempts] = useState([]);
  const [answers, setAnswers] = useState({});
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentResults, setCurrentResults] = useState(null);
  const [modalConfig, setModalConfig] = useState({ isOpen: false, title: '', message: '', onConfirm: null, confirmText: '', cancelText: '' });

  const showModal = (title, message, onConfirm, confirmText, cancelText) => {
    setModalConfig({ isOpen: true, title, message, onConfirm, confirmText, cancelText });
  };

  const closeModal = () => {
    setModalConfig(prev => ({ ...prev, isOpen: false }));
  };

  const startQuiz = () => {
    setShuffledQuestions(shuffleArray(questionsData));
    setCurrentIndex(0);
    setAnswers({});
    setCurrentResults(null);
    setCurrentView('quiz');
  };

  const handleOptionChange = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleNext = () => {
    setCurrentIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => prev - 1);
  };

  const processSubmit = () => {
    let score = 0;
    const details = shuffledQuestions.map(q => {
      const userAnswer = answers[q.id] || "";
      const isCorrect = userAnswer === q.answer;
      if (isCorrect) score += 1;
      return {
        id: q.id,
        text: q.text,
        userAnswer,
        correctAnswer: q.answer,
        isCorrect
      };
    });

    const percentage = ((score / shuffledQuestions.length) * 100).toFixed(2);
    
    const newAttempt = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      score,
      total: shuffledQuestions.length,
      percentage
    };

    setAttempts([newAttempt, ...attempts]);
    setCurrentResults({ score, total: shuffledQuestions.length, percentage, details });
    setCurrentView('results');
    window.scrollTo(0, 0);
  };

  const submitQuiz = () => {
    if (Object.keys(answers).length < shuffledQuestions.length) {
      showModal(
        "Unanswered Questions",
        "You have unanswered questions. Are you sure you want to submit?",
        processSubmit,
        "Submit Anyway",
        "Keep Answering"
      );
      return;
    }
    processSubmit();
  };

  const requestResetProgress = () => {
    showModal(
      "Reset Progress",
      "Are you sure you want to delete all progress? This action cannot be undone.",
      () => setAttempts([]),
      "Delete All",
      "Cancel"
    );
  };

  const requestQuitQuiz = () => {
    showModal(
      "Quit Quiz",
      "Are you sure you want to quit this attempt? Your current answers will be lost.",
      () => setCurrentView('home'),
      "Quit Quiz",
      "Cancel"
    );
  };

  return (
    <div className="container">
      {currentView === 'home' && (
        <div className="view-section text-center center-vertical">
          <h1>Practice Reviewer</h1>
          <p>Test your knowledge and track your algebraic progress.</p>
          <div className="button-group center-content mt-20">
            <button className="btn btn-gold" onClick={startQuiz}>Start Reviewing</button>
            <button className="btn btn-blue" onClick={() => setCurrentView('progress')}>View Progress</button>
          </div>
        </div>
      )}

      {currentView === 'quiz' && shuffledQuestions.length > 0 && (
        <div className="view-section">
          <h2>Practice Quiz</h2>
          <div className="progress-text">Question {currentIndex + 1} of {shuffledQuestions.length}</div>
          
          <div className="question-block">
            <p className="question-text"><strong>{shuffledQuestions[currentIndex].text}</strong></p>
            <div className="options">
              {shuffledQuestions[currentIndex].options.map(opt => (
                <label key={opt} className={`option-label ${answers[shuffledQuestions[currentIndex].id] === opt ? 'selected' : ''}`}>
                  <input 
                    type="radio" 
                    name={`question_${shuffledQuestions[currentIndex].id}`} 
                    value={opt}
                    onChange={() => handleOptionChange(shuffledQuestions[currentIndex].id, opt)}
                    checked={answers[shuffledQuestions[currentIndex].id] === opt}
                  /> {opt}
                </label>
              ))}
            </div>
          </div>

          <div className="button-group space-between mt-20">
            <button 
              type="button" 
              className="btn btn-blue" 
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >Previous</button>

            {currentIndex === shuffledQuestions.length - 1 ? (
              <button type="button" className="btn btn-gold" onClick={submitQuiz}>Submit Quiz</button>
            ) : (
              <button type="button" className="btn btn-gold" onClick={handleNext}>Next</button>
            )}
          </div>
          
          <div className="center-content mt-20">
            <button type="button" className="btn btn-text" onClick={requestQuitQuiz}>Quit Quiz</button>
          </div>
        </div>
      )}

      {currentView === 'results' && currentResults && (
        <div className="view-section">
          <h2>Quiz Results</h2>
          <div className="score-summary">
            <h3>You scored {currentResults.score} out of {currentResults.total}</h3>
            <p>Score Percentage: <strong>{currentResults.percentage}%</strong></p>
          </div>

          <div className="results-list">
            {currentResults.details.map((detail, idx) => (
              <div key={detail.id} className={`result-card ${detail.isCorrect ? 'correct' : 'wrong'}`}>
                <p><strong>Q{idx + 1}:</strong> {detail.text}</p>
                <div className="answer-feedback">
                  <p><strong>Your Answer:</strong> {detail.userAnswer || 'No answer'} - {detail.isCorrect ? '(Correct)' : '(Incorrect)'}</p>
                  {!detail.isCorrect && <p className="correct-text"><strong>Correct Answer:</strong> {detail.correctAnswer}</p>}
                </div>
              </div>
            ))}
          </div>

          <div className="button-group space-between mt-20">
            <button className="btn btn-gold" onClick={startQuiz}>Retake Quiz</button>
            <button className="btn btn-blue" onClick={() => setCurrentView('progress')}>View Progress</button>
          </div>
        </div>
      )}

      {currentView === 'progress' && (
        <div className="view-section">
          <h2>Your Progress Tracker</h2>
          <div className="table-responsive">
            <table className="progress-table">
              <thead>
                <tr>
                  <th>Try #</th>
                  <th>Date & Time</th>
                  <th>Score</th>
                  <th>Percentage</th>
                </tr>
              </thead>
              <tbody>
                {attempts.length === 0 ? (
                  <tr>
                    <td colSpan="4">No attempts recorded yet.</td>
                  </tr>
                ) : (
                  attempts.map((attempt, index) => (
                    <tr key={attempt.id}>
                      <td>{attempts.length - index}</td>
                      <td>{attempt.date}</td>
                      <td>{attempt.score} / {attempt.total}</td>
                      <td><strong>{attempt.percentage}%</strong></td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          
          <div className="button-group space-between mt-20">
            <button className="btn btn-blue" onClick={() => setCurrentView('home')}>Back to Home</button>
            <button className="btn btn-danger" onClick={requestResetProgress}>Reset Progress</button>
          </div>
        </div>
      )}

      {modalConfig.isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>{modalConfig.title}</h3>
            <p>{modalConfig.message}</p>
            <div className="modal-buttons">
              <button 
                className="btn btn-text" 
                onClick={closeModal}
              >
                {modalConfig.cancelText}
              </button>
              <button 
                className="btn btn-gold" 
                onClick={() => {
                  modalConfig.onConfirm();
                  closeModal();
                }}
              >
                {modalConfig.confirmText}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;