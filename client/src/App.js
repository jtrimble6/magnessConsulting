import React, { Component } from 'react';
// import logo from './logo.svg';
import './Reset.css';
import './App.css';


class App extends Component {
  state = {
      data: null
    };
  
    componentDidMount() {
        // Call our fetch function below once the component mounts
      this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
        .catch(err => {
          console.log(err)
          // this.setState({ data: 'You are NOT connected to the server' })
        });
    }
      // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = async () => {
      const response = await fetch('/express_backend');
      const body = await response.json();
  
      if (response.status !== 200) {
        this.setState({ data: 'You are NOT connected to the server' })
        throw Error(body.message) 
      }
      return body;
    };
  
    render() {
      return (
        <div className="App">
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h1 className="App-title">Lets Kick Some Ass, Amirah!!</h1>
          </header>
          
          <p className="App-intro">{this.state.data}</p>
        </div>
      );
    }
  }

export default App;
