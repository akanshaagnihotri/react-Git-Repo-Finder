import React, { Component } from 'react';
import axios from 'axios';
import { AutoSizer, List } from 'react-virtualized';
import {Feed} from 'semantic-ui-react';
import { ChatPageStyles as styles } from '../Styles';
import UserImage from '../Assets/Images/user.jpg';
import MyContext from './Context.js'

class Projects extends Component{
	constructor(props){
		super(props);
		this.state={
			list:[],
		}
	}
		componentDidMount(){
			const name = this.props.context;
			console.log(name);
			const urlForProjects= "https://api.github.com/users/"+name+"/repos";
			axios.get(urlForProjects).then((response)=>{
			console.log(response);
			this.setState({
				list:response.data
			})
		})
		}
		rowRenderer = ({style=styles, key, index}) => {
		return(
			<div style={styles.singleCard}>
				<Feed style={styles.singleCard}>
	        		<Feed.Event>
			          <Feed.Label image={UserImage}/>
			          <Feed.Content>
			            <Feed.Summary>
			              <a>{this.state.list[index].name}</a> 
			            </Feed.Summary>
			          </Feed.Content>
			        </Feed.Event>
		        </Feed>
		    </div>
		)
	}
		render(){
			return(
				<div>
	   			   	<div>
	   			   		<AutoSizer>{
							({width=300, height=600}) =>(
									<List
										width={900}
									    height={650}
									    rowCount={this.state.list.length}
									    rowHeight={60}
									    rowRenderer={this.rowRenderer}
									    autoheight
			 						/>
								)
							}
						</AutoSizer>
					</div>
				</div>
			)
		}
	
}
const MapElement = () => (
			<MyContext.Consumer>
				{
					val => <Projects context={val}/>
				}
			</MyContext.Consumer>
)
export {MapElement};
export default MapElement;