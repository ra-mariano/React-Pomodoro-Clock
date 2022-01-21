let secRegex = /:\d\d/
let minRegex = /\d\d:/


class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSessionDisplay: "25:10"
    }
    
    //this.countdown=this.countdown.bind(this)
    this.lowerSession=this.lowerSession.bind(this)
    this.raiseSession=this.raiseSession.bind(this)
    this.startStop=this.startStop.bind(this)

    

  }
  

  startStop() {
    
    let colonSeconds= this.state.currentSessionDisplay.match(secRegex)
    let secondsSplit= colonSeconds[0].split('')
    secondsSplit.shift()
    let seconds=secondsSplit.join('')
    let minutesColon= this.state.currentSessionDisplay.match(minRegex)
    let minutesSplit= minutesColon[0].split('')
    minutesSplit.pop()
    let minutes=minutesSplit.join('')

      console.log(minutes)
      console.log(seconds);
      //console.log(typeof(seconds))
      if (seconds < 0) {
        seconds=59;
        minutes--
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

render() {
  let colonSeconds= this.state.currentSessionDisplay.match(secRegex)
  let secondsSplit= colonSeconds[0].split('')
  secondsSplit.shift()
  let seconds=secondsSplit.join('')
  let minutesColon= this.state.currentSessionDisplay.match(minRegex)
  let minutesSplit= minutesColon[0].split('')
  minutesSplit.pop()
  let minutes=minutesSplit.join('')


/*
var counter = 10;
setInterval(function(){
  console.log(counter);
  counter--
  if (counter === 0) {
    console.log("HAPPY NEW YEAR!!");
  }
}, 1000); */
    return (
      
      <div>

        

{setInterval(this.startStop, 1000)}



     <h1>25 + 5 Clock</h1>
     {this.state.currentSessionDisplay}
     
     
      <Session 
        lowerSession = {this.lowerSession}
        raiseSession = {this.raiseSession}
        currentSessionDisplay ={this.state.currentSessionDisplay}/>

        <button>Start/Stop</button>
  
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