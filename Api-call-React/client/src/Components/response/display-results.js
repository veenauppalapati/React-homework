import React,{Component} from 'react';
import './API-response.css';

class DisplayResults extends Component {
    constructor (props){
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.results.map((articles, index) => 
                        <div className="col-md-6 individual" key = {index}>
                            <h1 id='headline'>
                                {articles.headline.main}
                            </h1>
                        
                            <img 
                            src = {"https://static01.nyt.com/" + articles.multimedia[1].url}
                            id='image' /><br />
                            
                            <a
                            href = {articles.web_url}
                            id="link">
                                Click here to read the article
                            </a>
                            
                            <div id='snippet'>
                                {articles.snippet}
                            </div>
                        </div>
                    )} 
                   
                    <button
                    type="button" 
                    className="btn btn-info" 
                    onClick={this.props.retrieveArticles}>SUBMIT
                    </button>  
                </div>
            </div>
        )
        
    }
    
}

export default DisplayResults;
 