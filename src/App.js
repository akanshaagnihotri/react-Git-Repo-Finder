import React, { Component } from 'react';
import './App.css';
import RootRouter from './Routes'
import MyProvider from './Components/Provider'

class App extends Component {
	state={
   		name:""
  	}
  updateName = (name) => {
  	this.setState({name})
  }
  render() {
    return (
    	<MyProvider value={this.state.name}>
    		<RootRouter updateName={this.updateName.bind(this)}/>
    	</MyProvider>	
    );
  }
}

export default App;
