import React, {Component} from 'react';
import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com';
const initialState = {
    title: '',
    body: '',
    userId: '',
    isSubmit: false,
    error: false
};

class AxiosInsertForm extends Component{
    constructor(){
        super();
        this.myFrom = React.createRef();
    }
    state = {...initialState};
    submitHandler = (event) => {
        event.preventDefault();
        
        axios.post(`${baseUrl}/posts`, {
            title: this.state.title,
            body: this.state.body,
            userId: this.state.userId
        })
        .then(res => {
            this.setState({
                isSubmit: true
            });
            console.log(res);
        })
        .catch(error => {
            this.setState({
                error: true
            })
            console.log(error);
        })

        this.myFrom.current.reset();
        this.setState({
            ...initialState
        });
    };
    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    
    render(){
        return(
            <form ref={ this.myFrom } onSubmit={ this.submitHandler }>
                { this.state.isSubmit && <div class="alert alert-primary" role="alert">Successfully Inserted. <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div> }
                { this.state.error && <div class="alert alert-primary" role="alert">Submition Failed!!! 
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div> }
                <div className="form-group row">
                    <label htmlFor="userId" className="col-sm-2 col-form-label">User Id</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="userId"
                            name="userId"
                            placeholder="Enter Student Id"
                            value={this.state.userId}
                            onChange={ this.changeHandler }
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="title" 
                            name="title"
                            placeholder="Enter Your Title"
                            value={ this.state.title }
                            onChange={ this.changeHandler }
                        />
                    </div>
                </div>
                
                <div className="form-group row">
                    <label htmlFor="body" className="col-sm-2 col-form-label">Body</label>
                    <div className="col-sm-10">
                        <textarea
                            type="text"
                            className="form-control"
                            id="body"
                            name="body"
                            value={this.state.body}
                            onChange={ this.changeHandler }
                        />
                    </div>
                </div>
                <button className="btn btn-success" type="submit">Submit</button>
                
            </form>
        )
    }
}

export default AxiosInsertForm;