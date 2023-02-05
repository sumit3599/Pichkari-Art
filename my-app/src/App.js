import React from 'react';
import './App.css';
import Home from './components/home'
class App extends React.Component {
  componentDidMount(){
    console.log("dome is created")
  }
  render(){
  return (
    <div className="App">
      <Home></Home>
      
    </div>
  );
  }
}

export default App;
