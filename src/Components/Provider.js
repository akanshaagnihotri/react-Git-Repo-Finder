import MyContext from './Context'
import React, { Component } from 'react'
export default class MyProvider extends Component{
   state={
   	name:""
   }
   componentWillReceiveProps(nextProps){
      if(this.state.name !== nextProps.value) {
         this.setState({name: nextProps.value});
      }
   }
   render(){
   	return(
   		<MyContext.Provider value = { this.state.name } >
   		 {this.props.children}
   		</MyContext.Provider>
   		)
   }
}
