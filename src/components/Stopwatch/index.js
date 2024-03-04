import './index.css'

import {Component} from 'react'

class Stopwatch extends Component {
  state = {seconds: 0}

  onStart = () => {
    this.timerId = setInterval(this.onSeconds, 1000)
  }

  onSeconds = () => {
    this.setState(prevState => ({seconds: prevState.seconds + 1}))
  }

  onStop = () => {
    clearInterval(this.timerId)
  }

  onReset = () => {
    this.setState({seconds: 0})
    clearInterval(this.timerId)
  }

  secondCall = () => {
    const {seconds} = this.state
    const sec = Math.floor(seconds % 60)
    if (sec < 10) {
      return `0${sec}`
    }
    return sec
  }

  minuteCall = () => {
    const {seconds} = this.state
    const min = Math.floor(seconds / 60)
    if (min < 10) {
      return `0${min}`
    }
    return min
  }

  render() {
    const time = `${this.minuteCall()}:${this.secondCall()}`
    return (
      <div className="background-con">
        <h1 className="heading">Stopwatch</h1>
        <div className="card-con">
          <div className="timer-header">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p>Timer</p>
          </div>
          <h1 className="time">{time}</h1>
          <div className="btn-con">
            <button className="start-btn" type="button" onClick={this.onStart}>
              Start
            </button>
            <button className="stop-btn" type="button" onClick={this.onStop}>
              Stop
            </button>
            <button className="reset-btn" type="button" onClick={this.onReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
