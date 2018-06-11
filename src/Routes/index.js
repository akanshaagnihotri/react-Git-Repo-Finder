import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { UserName, Projects} from '../Components';

const RootRouter = (props) => {
	return(
   		<BrowserRouter>
   			<Switch>
	   			<Route exact path='/ProjectsTotal'component={Projects}></Route>
	   			<Route path='/' render={() => <UserName updateName={props.updateName}/>}></Route>
   			</Switch>
   		</BrowserRouter>
	)
}
export default RootRouter;