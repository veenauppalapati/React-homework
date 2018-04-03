import React, {Component} from 'react';
import './API-response.css';
import API from '../../utils/API';
import DisplayResults from './display-results';

class Results extends Component {
    state = {
        results: []
    }

    componentDidMount() {
        this.testCall();
    }

    retrieveArticles = () => {
        API.search().then( res => {
            console.log(res.data.response.docs)
            this.setState({ results: res.data.response.docs }) 
        })
            
        .catch(err => console.log(err));
    }

    testCall = () => {
        API.test().then(response => {
            console.log(response);
        })
    }

    render() {
        
        return( 
            // the following component contains two properties that are being carried from this component.
            // it contains the results property that it needs to have the results 
            // it also containss the retrieveArticles function being passed to a prop which will carry the updated articles
            <DisplayResults results={this.state.results} retrieveArticles = {this.retrieveArticles}/>   
        ) // return        
    } //render
} //Component

export default Results;