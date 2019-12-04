import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import InsertForm from './InsertForm';
import AxiosInsertForm from './AxiosInsertForm';

class App extends Component{
	state = {
		postData : []
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
	//   let {postData} = this.state;
	//   if (postData.length < 0) {
	// 	return <h1 style={{textAlign: "center"}}> Data Loading... </h1>
	//   } else {
	// 	return (
	// 		<div className="container">
	// 			<InsertForm/>
	// 		</div>
	// 	)
	//   }
	  return(
		  <div className="container">
			  <AxiosInsertForm/>
		  </div>
	  )

  }
}

export default App;
