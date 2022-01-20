let regex = /:\d\d/

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSessionDisplay: "25:59"
    }
    
    //this.countdown=this.countdown.bind(this)
    this.lowerSession=this.lowerSession.bind(this)
    this.raiseSession=this.raiseSession.bind(this)
    this.startStop=this.startStop.bind(this)
  }


  
  startStop() {
    let colonSeconds= this.state.currentSessionDisplay.match(regex)
    console.log(colonSeconds)
    //let secondsSplit= colonSeconds[0].split('')
    //secondsSplit.shift()
    //let seconds = secondsSplit.join('')
    //seconds-=1
    
    setInterval(this.startStop, 1000);
 
}


lowerSession() {
  let colonSeconds= this.state.currentSessionDisplay.match(regex)
  //console.log(colonSeconds)
  let secondsSplit= colonSeconds[0].split('')
  secondsSplit.shift()
  let seconds = secondsSplit.join('')


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
     
      <Session 
        lowerSession = {this.lowerSession}
        raiseSession = {this.raiseSession}
        currentSessionDisplay ={this.state.currentSessionDisplay}/>

        <button onClick={this.startStop}>Start/Stop</button>
  
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