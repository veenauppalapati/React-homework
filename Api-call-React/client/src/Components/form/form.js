import React, {Component} from 'react';
import './form.css';

class Form extends Component {
    state = {
        genre: '',
        beginningDate: '',
        endDate: ''
    }
    //=========================
    handleInputChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value})
    }

    render () {
        return (
            <div className="container">
                <form>
                    {/* ======================================== */}
                    <div className="wrapper">
                        <div className="form-group row">
                        <div 
                        className="col-md-12 label">
                            <label 
                            htmlFor="genre" 
                            className="col-form-label">
                                <h3>Genre</h3>
                            </label>
                        </div> 
                        
                        <div className="col-12">
                            <input 
                                className="form-control"
                                name="genre"
                                type="text" 
                                value={this.state.genre}
                                onChange={this.handleInputChange} />
                        </div>
                    </div>
                    {/* ======================================== */}

                    <div className="form-group row">
                        <div 
                        className="col-md-12 label">
                            <label 
                            htmlFor="beginningDate" 
                            className="col-form-label">
                                <h3>Beginning Date</h3>
                            </label>
                        </div> 
                        
                        <div className="col-12">
                            <input 
                                className="form-control"
                                type="date" 
                                value={this.state.beginningDate} />
                        </div>
                    </div>

                    {/* ======================================== */}
  
                    <div className="form-group row">
                        <div 
                        className="col-md-12 label">
                            <label 
                            htmlFor="beginningDate" 
                            className="col-form-label">
                                <h3>End Date</h3>
                            </label>
                        </div> 
                        
                        <div className="col-12">
                            <input 
                                className="form-control"
                                type="date" 
                                value={this.state.endDate} />
                        </div>
                    </div>

                    {/* ======================================== */}
                    </div>
                    
                </form>
            </div>    
        )
    }
}

export default Form;
