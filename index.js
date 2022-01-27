let secRegex = /:\d+/
let minRegex = /\d+:/


class Clock extends React.Component {
  constructor(props) {
    super(props);
    
  }   
    
render() { 
  return (   
    <div>
     <h1>25 + 5 Clock</h1>
      <SessionBreak />
    </div>
      );
    }
  }


/////////////////////////////////////////////

  class SessionBreak extends React.Component {
        constructor(props) {
          super(props);
    
  this.state= {
    currentSessionLength: "02:00",
    currentSessionDisplay: "00:05",
    currentBreakLength: "05:00",
    currentBreakDisplay: "03:00",
    broken: true,
    started: false,
    reset: false

  }        
  
  this.lowerSession=this.lowerSession.bind(this)
  this.raiseSession=this.raiseSession.bind(this)
  this.lowerBreak=this.lowerBreak.bind(this)
  this.raiseBreak=this.raiseBreak.bind(this)
  this.startStop=this.startStop.bind(this)
  this.myInterval=this.myInterval.bind(this)
  this.reset=this.reset.bind(this)
}

lowerSession() {
  if (parseInt(this.state.currentSessionLength) >1 && parseInt(this.state.currentSessionLength)<=10) {
    this.setState ({
      currentSessionLength: ("0" + (parseInt(this.state.currentSessionLength) - 1) + ":00"),
      currentSessionDisplay: ("0" + (parseInt(this.state.currentSessionLength) - 1) + ":00")
    })
  }
    else if (parseInt(this.state.currentSessionLength) >=10) {
    return this.setState({
    currentSessionLength: (parseInt(this.state.currentSessionLength) - 1 + ":00"),
    currentSessionDisplay: (parseInt(this.state.currentSessionLength) - 1 + ":00")
  })
}

else return
}

raiseSession() {
  if (parseInt(this.state.currentSessionLength) >=1 && parseInt(this.state.currentSessionLength)<9) {
    this.setState ({
      currentSessionLength: ("0" + (parseInt(this.state.currentSessionLength) +1) + ":00"),
      currentSessionDisplay: ("0" + (parseInt(this.state.currentSessionLength) + 1) + ":00")
    })
  }
 else return this.setState({
    currentSessionLength: (parseInt(this.state.currentSessionLength) + 1 + ":00"),
    currentSessionDisplay: (parseInt(this.state.currentSessionLength) + 1 + ":00")
  })
}

lowerBreak() {
  if (parseInt(this.state.currentBreakLength) >1 && parseInt(this.state.currentBreakLength)<=10) {
    this.setState ({
      currentBreakLength: ("0" + (parseInt(this.state.currentBreakLength) - 1) + ":00"),
      currentBreakDisplay: ("0" + (parseInt(this.state.currentBreakLength) - 1) + ":00")
    })
  }
  else if (parseInt(this.state.currentBreakLength) >1) {
  this.setState({
    currentBreakLength: (parseInt(this.state.currentBreakLength) - 1 + ":00"),
    currentBreakDisplay: (parseInt(this.state.currentBreakLength) - 1 + ":00")
  })
}
else return
}

raiseBreak() {
  if (parseInt(this.state.currentBreakLength) >=1 && parseInt(this.state.currentBreakLength)<9) {
    this.setState ({
      currentBreakLength: ("0" + (parseInt(this.state.currentBreakLength) + 1) + ":00"),
      currentBreakDisplay: ("0" + (parseInt(this.state.currentBreakLength) + 1) + ":00")
    })
  }
  else return this.setState({
    currentBreakLength: (parseInt(this.state.currentBreakLength) + 1 + ":00"),
    currentBreakDisplay: (parseInt(this.state.currentBreakLength) + 1 + ":00"),
    
  })
}
  

componentDidMount() {
  document.getElementById("start_stop").addEventListener("click", this.startStop)
  document.getElementById("reset").addEventListener("click", this.reset)
  }

componentWillUnmount() {
clearInterval(this.timer)
}

startStop() {
if (this.state.started==false) {
this.setState ({
  started: true
})
this.timer = setInterval(this.myInterval,1000)
} 

else if (this.state.started==true) {
this.setState ({
  started: false
})
clearInterval(this.timer)
}
}


myInterval() {  
let sessionColonSeconds= this.state.currentSessionDisplay.match(secRegex)
let sessionSecondsSplit= sessionColonSeconds[0].split('')
sessionSecondsSplit.shift()
let sessionSeconds=sessionSecondsSplit.join('')
let sessionMinutesColon= this.state.currentSessionDisplay.match(minRegex)
let sessionMinutesSplit= sessionMinutesColon[0].split('')
sessionMinutesSplit.pop()
let sessionMinutes=sessionMinutesSplit.join('')  

//////////

let breakColonSeconds= this.state.currentBreakDisplay.match(secRegex)
let breakSecondsSplit= breakColonSeconds[0].split('')
breakSecondsSplit.shift()
let breakSeconds=breakSecondsSplit.join('')
let breakMinutesColon= this.state.currentBreakDisplay.match(minRegex)
let breakMinutesSplit= breakMinutesColon[0].split('')
breakMinutesSplit.pop()
let breakMinutes=breakMinutesSplit.join('')  


console.log(sessionMinutes)
console.log(sessionSeconds)
console.log(parseInt(breakMinutes))
console.log(breakSeconds)
console.log(typeof(sessionSeconds))



  if (parseInt(sessionMinutes)>=0 && sessionSeconds >0 && this.state.broken==true) {
    sessionSeconds-=1
    if (sessionSeconds<10) {
    this.setState(state=>({
      currentSessionDisplay: sessionMinutes+":0"+sessionSeconds
    }))
  }
  else if (sessionMinutesSplit.length<2 && sessionSeconds >0) {
    
   this.setState({
      currentSessionDisplay: "0"+sessionMinutes+":"+sessionSeconds
    })
  }
    else {
     this.setState({
      currentSessionDisplay: sessionMinutes+":"+sessionSeconds
    })
  }
}

  else if (sessionMinutes> 0 && sessionMinutes<=10 && sessionSeconds ==0 && this.state.broken==true) {
      sessionSeconds="59"
      sessionMinutes-- 
      this.setState({
        currentSessionDisplay: "0" + sessionMinutes+":"+sessionSeconds
      }) 
    }

    else if (sessionMinutes>= 10 && sessionSeconds ==0 && this.state.broken==true) {
      sessionSeconds="59"
      sessionMinutes-- 
      this.setState({
        currentSessionDisplay: sessionMinutes+":"+sessionSeconds
      }) 
    }
    
    else if (sessionMinutes== 0 && sessionSeconds ==0 && this.state.broken==true) {
      this.setState({
        currentBreakDisplay: this.state.currentBreakLength,
        broken: false
      })
      
    }

 else if (breakMinutes>=0 && breakSeconds >0 && this.state.broken==false) {
      breakSeconds-=1
      
      if (breakSeconds<10) {
      this.setState(state=>({
        currentBreakDisplay: breakMinutes+":0"+breakSeconds
      }))
    }
    else if (breakMinutesSplit.length<2 && breakSeconds >0) {
      this.setState({
        currentBreakDisplay: "0"+breakMinutes+":"+breakSeconds
      })
    }
   
      else {
        this.setState({
        currentBreakDisplay: breakMinutes+":"+breakSeconds
      })
    }
    }
    else if (breakMinutes>0 && breakMinutes<=10 && breakSeconds == 0 && this.state.broken==false) {
      console.log("this")
      breakSeconds="59"
      breakMinutes--  
      this.setState({
        currentBreakDisplay: "0"+breakMinutes+":"+breakSeconds
      })
  }
  else if (breakMinutes>=10 && breakSeconds == 0 && this.state.broken==false) {
    console.log("this")
    breakSeconds="59"
    breakMinutes--  
    this.setState({
      currentBreakDisplay: breakMinutes+":"+breakSeconds
    })
}
    else if (breakMinutes== 0 && breakSeconds == 0 && this.state.broken==false) {
      this.setState({
        currentSessionDisplay: this.state.currentSessionLength,
        broken: true
      })
    }

  else {console.log("other")}
}

reset() {
  this.setState(state=>({
    currentSessionDisplay: state.currentSessionLength,
    currentBreakDisplay: state.currentBreakLength,
    started: false
  }))
  clearInterval(this.timer)
  
}
 
render() {
  return (

    <div>
 <h1 id="session-label">Session Length</h1>
      {this.state.currentSessionLength}
      <button id="session-decrement" onClick = {this.lowerSession}>Lower Session Time</button>
      <button id="session-increment" onClick = {this.raiseSession}>Raise Session Time</button>

      <h1 id="break-label">Break Length</h1>
          {this.state.currentBreakLength}
      <button id="break-decrement" onClick = {this.lowerBreak}>Lower Break Time</button>
      <button id="break-increment" onClick = {this.raiseBreak}>Raise Break Time</button>

    <Display
    currentSessionLength= {this.state.currentSessionLength}
    currentSessionDisplay ={this.state.currentSessionDisplay}
    currentBreakLength= {this.state.currentBreakLength}
    currentBreakDisplay = {this.state.currentBreakDisplay}
    broken = {this.state.broken}
    />
</div>
  )
}

}
  

class Display extends React.Component {
    constructor(props) {
      super(props);

    }
    
   render() {
     let countdown
     if (this.props.broken==true) {
       countdown = this.props.currentSessionDisplay
     }
     else if (this.props.broken==false) {
       countdown = this.props.currentBreakDisplay
     }
        return (
          <div>
          <h2>Session Value {this.props.currentSessionDisplay}</h2>  
          <h2>Break Value {this.props.currentBreakDisplay}</h2> 
          <h1>{countdown}</h1> 
          <button id="start_stop">Start/Stop</button>  
          <button id="reset">Reset</button>
         </div>
  
        )
      }
    }



  ReactDOM.render(<Clock />, document.getElementById("app"))

