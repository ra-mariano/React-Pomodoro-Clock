let secRegex = /:\d+/
let minRegex = /\d+:/

//CHANGE NOT SAVED
//Switchsolution

class Clock extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentSessionDisplay: "0:10",
      otherthingfortest: "Other",
      started: false,
      defaultSession: "25:00",
      defaultBreak: "5:00"
    }
    
    this.lowerSession=this.lowerSession.bind(this)
    this.raiseSession=this.raiseSession.bind(this)
    this.raiseBreak=this.raiseBreak.bind(this)
    this.lowerBreak=this.lowerBreak.bind(this)
    this.startStop=this.startStop.bind(this)
    this.myInterval=this.myInterval.bind(this)
    //this.switch=this.switch.bind(this)
  
  }
  
 
    
  componentDidMount() {
    document.getElementById("start_stop").addEventListener("click", this.startStop)
    }
  
  


componentWillUnmount() {
  clearInterval(this.timer)
}

startStop() {
 if (this.state.started===false) {
  this.setState ({
    started: true
  })
  this.timer = setInterval(this.myInterval,1000)
} 

else if (this.state.started===true) {
  this.setState ({
    started: false
  })
  clearInterval(this.timer)
 
  
}
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
  
    if (seconds >0) {
      seconds-=1
  }
    else if (seconds <= 0) {
        seconds=59;
        minutes--   
      }
      
      if (seconds >=10 && minutes >=10) {
      this.setState({
        currentSessionDisplay: minutes+":"+seconds,
      })
    }
    else if (minutes >=10 && seconds <10) {
      this.setState({
      currentSessionDisplay: minutes+":0"+seconds,
    })
  }
    else if (minutes <10 && seconds >=10) {
      this.setState({
        currentSessionDisplay: minutes+":"+seconds,
      })
    }
    else if (minutes <10 && seconds <10) {
      this.setState({
        currentSessionDisplay: minutes+":0"+seconds
      })
    }
    
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

lowerBreak() {
  this.setState({
    currentSessionDisplay: (parseInt(this.state.currentSessionDisplay) - 1 + ":00")
  })
}

raiseBreak() {
  this.setState({
    currentSessionDisplay: (parseInt(this.state.currentSessionDisplay) + 1 + ":00")
  })
}

render() {
 
  return (
    
    <div>

     <h1>25 + 5 Clock</h1>
     

     <button id="start_stop">Start/Stop</button>

     <button id="reset">Reset</button>

     
     
      <Session 
        lowerSession = {this.lowerSession}
        raiseSession = {this.raiseSession}
        currentSessionDisplay ={this.state.currentSessionDisplay}
        defaultSession={this.state.defaultSession}/>

      <Break
        lowerBreak = {this.lowerBreak}
        raiseBreak = {this.raiseBreak} 
        currentSessionDisplay ={this.state.currentSessionDisplay}
        defaultBreak= {this.state.defaultBreak}/>

  
    </div>
      );
    }
  }

/////////////////////////////////////////////

  class Session extends React.Component {
        constructor(props) {
          super(props);
    
          
  
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
                {this.props.currentSessionDisplay}
              <h1 id="session-label">Session Length</h1>
              <button id="session-decrement" onClick = {this.lowerSession}>Lower Session Time</button>
              <button id="session-increment" onClick = {this.raiseSession}>Raise Session Time</button>
              </div>
            )
          }
        }

class Break extends React.Component {
    constructor(props) {
      super(props);
  
    
      this.lowerBreak=this.lowerBreak.bind(this)
      this.raiseBreak=this.raiseBreak.bind(this)
      
      }
      
      
      lowerBreak() {
        this.props.lowerBreak()
      }
    
      raiseBreak() {
        this.props.raiseBreak()
      }

    
      render() {
        return (
          <div>
          <h1 id="break-label">Break Length</h1>
          <button id="break-decrement" onClick = {this.lowerBreak}>Lower Break Time</button>
          <button id="break-increment" onClick = {this.raiseBreak}>Raise Break Time</button>        
          </div>
        )
      }
    }


  
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

