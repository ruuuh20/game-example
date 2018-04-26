import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import _ from 'lodash'

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

const bgColors = {
playing: '#ccc',
won: 'green',
lost: 'red',
};

const randomNumberBetween = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

  
class Number extends React.Component {
  render() {
    return <div className="number">{this.props.value}</div>;
  }
}

class Game extends React.Component {


  state = {
  gameStatus: 'new', // new, playing, won, lost
  remainingSeconds: this.props.initialSeconds,
  selectedIds: [],
};

  challengeNumbers = Array
    .from({ length: this.props.challengeSize })
    .map(() => randomNumberBetween(...this.props.challengeRange));
    target = _.sum(
   	_.sampleSize(this.challengeNumbers, this.props.answerSize)
 	);

  render() {
    return (
      <div className="game">
        <div className="help">
          Pick 4 numbers that sum to the target in 15 seconds
        </div>
        <div className="target">42</div>
        <div className="challenge-numbers">
        {this.challengeNumbers.map((value, index) =>
            <Number key={index} value={value} />
           )}
        </div>
        <div className="footer">
          <div className="timer-value">15</div>
          <button>Start</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Game
  challengeRange={[2, 9]}
  challengeSize={6}
  answerSize={4}
  initialSeconds={15}
  />, document.getElementById('root'));
