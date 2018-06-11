import React,{Component} from 'react';
import { LoginPageStyles as styles } from '../Styles'
import { Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom'
class UserName extends Component{

render(){
	return(
			<div style={styles.backgroundGradient}>
				<div style={styles.loginCard}>
					<div style={styles.flex}>
						<h1 style={styles.heading}>Enter github id</h1>
					</div>
					<div style={styles.flex}>
						<input style={styles.inputField} onChange={(event)=>this.props.updateName(event.target.value)}/>
					</div>
					<div style={styles.flex}>
					 	<Link to={'/ProjectsTotal/'}><Button  primary style={styles.joinButton}>SEE PROJECTS</Button></Link>
					</div>
				</div>
			</div>
	)
}
}
export default UserName;