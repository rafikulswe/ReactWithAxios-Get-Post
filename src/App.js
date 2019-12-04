import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import InsertForm from './InsertForm';
import AxiosInsertForm from './AxiosInsertForm';

class App extends Component{
	state = {
		postData : [],
		isAxiosInsert: true //For see axios Get data please make it false.
	};
	componentDidMount(){
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then(response => {
			this.setState({
				postData : response.data
			})
			
		})
		.catch(error => console.log(error))
	}

  render(){
	  let {postData} = this.state;
	  if (this.state.isAxiosInsert) {
		return(
			<div className="container">
				<AxiosInsertForm/>
			</div>
		)
	  } else {
		  if (postData.length < 0) {
			return <h1 style={{textAlign: "center"}}> Data Loading... </h1>
		  } else {
			return (
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							{ postData.map(data => <li id={data.id} className="list-group">{data.title} </li>) }
						</div>
						<div className="col-md-6">
							<InsertForm/>
						</div>
					</div>
				</div>
			)
		  }
	  }
	  

  }
}

export default App;
