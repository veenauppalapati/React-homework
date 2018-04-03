import React, {Component} from 'react';
import './header.css';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container header">
                    <h1 className="display-4">NY Times</h1>
                    <p className="lead">It's time to save the articles you love </p>
                </div>
            </div>
        )
    }
}
export default Header;