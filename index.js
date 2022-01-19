class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDisplay: "25"
    }
    
    this.handleInputTimeChange=this.handleInputTimeChange.bind(this)
    this.lowerSession=this.lowerSession.bind(this)
  }

  handleInputTimeChange(e) {
    this.setState({
      currentDisplay: e
    }) 
  }

lowerSession() {
  this.setState({
    currentDisplay: (parseInt(this.state.currentDisplay) - 1)
  })
}

  render() {
    return (
      <div>
     <h1>25 + 5 Clock</h1>
     {this.state.currentDisplay}
     
      <Session 
        onInputTimeChange = {this.handleInputTimeChange} 
        lowerSession = {this.lowerSession}
        currentDisplay ={this.state.currentDisplay}/>
  
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
  this.handleInputTimeChange2=this.handleInputTimeChange2.bind(this)
  this.lowerSession=this.lowerSession.bind(this)
  
  }
  
  handleInputTimeChange2(e) {
    this.props.onInputTimeChange(e.target.value)
  

  }

  lowerSession() {
    this.props.lowerSession()
  }
  
          render() {
            return (
              <div>
              <h1>SESSION LENGTH</h1>
              <input onChange = {this.handleInputTimeChange2}/>
              <button onClick = {this.lowerSession}>Lower Session Time</button>
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