import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
//import * as serviceWorker from './serviceWorker';

class ChatsDisplay extends React.Component {

    constructor () {
        super();

        this.testHTTP = this.testHTTP.bind(this)
    }

    testHTTP () {

    axios.get('http://localhost:5000/api/test')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className='item'>
                <h3>CHATS DISPLAY</h3>

                <button className="btn btn-danger" onClick={this.testHTTP}>CLICK ME</button>
            </div>

        );
    }
}


//ReactDOM.render( 'chats-display.html', document.getElementById('root'));

export default ChatsDisplay;