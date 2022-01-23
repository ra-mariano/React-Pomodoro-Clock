let secRegex = /:\d+/
let minRegex = /\d\d:/


class Clock extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentSessionDisplay: "25:59",
      otherthingfortest: "Other",
      started: false
    }
    
    this.lowerSession=this.lowerSession.bind(this)
    this.raiseSession=this.raiseSession.bind(this)
    this.myInterval=this.myInterval.bind(this)
    this.startStop=this.startStop.bind(this)
  
    
   
  }
  
    
componentDidMount() {
  
  if (this.state.started===true) {
setInterval(this.myInterval,1000)
}
} 


componentDidMount() {
  document.getElementById("start_stop").addEventListener("click", this.startStop)
   
 
  if (this.state.started===true) {
    setInterval(this.myInterval,1000)
    }

}

componentWillUnmount() {
  clearInterval();
}

startStop() {
 
  this.setState ({
    started: true
  })
  console.log(this.state.started)
}  
  


myInterval() {  
  let colonSeconds= this.state.currentSessionDisplay.match(secRegex)
  let secondsSplit= colonSeconds[0].split('')
  secondsSplit.shift()
  let seconds=secondsSplit.join('')
  let minutesColon= this.state.currentSessionDisplay.match(minRegex)
  let minutesSplit= minutesColon[0].split('')
  minutesSplit.pop()
  let minutes=minutesSplit.join('')  
  
      console.log(minutes)
      console.log(seconds)
      seconds-=1
      if (seconds < 0) {
        seconds=59;
        minutes--   
      }
      this.setState({
        currentSessionDisplay: minutes+":"+seconds,
        started: true
      })
  }


lowerSession() {
  this.setState({
    currentSessionDisplay: (parseInt(this.state.currentSessionDisplay) - 1 + ":00")
  })
}

raiseSession() {
  this.setState({
    currentSessionDisplay: (parseInt(this.state.currentSessionDisplay) + 1 + ":00")
  })
}

render() {
 
  return (
    
    <div>

     <h1>25 + 5 Clock</h1>
     {this.state.currentSessionDisplay}

     <button id="start_stop">Start/Stop</button>

     
     
      <Session 
        lowerSession = {this.lowerSession}
        raiseSession = {this.raiseSession}
        currentSessionDisplay ={this.state.currentSessionDisplay}/>

  
    </div>
      );
    }
  }

/////////////////////////////////////////////

  class Session extends React.Component {
        constructor(props) {
          super(props);
      
  this.state = {
    sessionLength: "25"
    
  }

  this.lowerSession=this.lowerSession.bind(this)
  this.raiseSession=this.raiseSession.bind(this)
  
  }
  
  
  lowerSession() {
    this.props.lowerSession()
  }

  raiseSession() {
    this.props.raiseSession()
  }
  
          render() {
            return (
              <div>
              <h1 id="session-label">Session Length</h1>
              <button id="session-decrement" onClick = {this.lowerSession}>Lower Session Time</button>
              <button id="session-increment" onClick = {this.raiseSession}>Raise Session Time</button>
              </div>
            )
          }
        }

/*class Break extends React.Component {
    constructor(props) {
      super(props);
  
     this.state = {
       breakLength: "5"
     }
      }

    
      render() {
        return (
          <div>
          <h1>BREAK LENGTH</h1>
          <button></button>
          {this.state.breakLength}          
          </div>
        )
      }
    }*/


  
  /*class StartStopReset extends React.Component {
          constructor(props) {
            super(props);
        
            }
            render() {
              return (
                <div>
                <button>Start/Stop</button>
                <button>Reset</button>
                </div>
              )
            }
          }*/


  ReactDOM.render(<Clock/>, document.getElementById("app"))

