import React, {Component} from 'react';

const initialState = {
    name : '',
    email : '',
    phone : ''
}
class InsertForm extends Component{
    constructor(){
        super();
        this.myFrom = React.createRef();
    }
    state = {...initialState};
    
    submitHandler = event => {
        event.preventDefault();
        console.log(this.state);
        
        //this portion for form clear
        this.myFrom.current.reset();
        this.setState({
            ...initialState
        });
    };

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <form ref={ this.myFrom } onSubmit={ this.submitHandler }>
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            name="name"
                            placeholder="Enter Your Name"
                            value={ this.state.name }
                            onChange={ this.changeHandler }
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            name="email"
                            placeholder="Enter Your Email"
                            value={ this.state.email }
                            onChange={ this.changeHandler }
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="phone" className="col-sm-2 col-form-label">Phone</label>
                    <div className="col-sm-10">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="phone" 
                            name="phone"
                            placeholder="Enter Your Phone"
                            value={ this.state.phone }
                            onChange={ this.changeHandler }
                        />
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        );
    }
}
export default InsertForm;