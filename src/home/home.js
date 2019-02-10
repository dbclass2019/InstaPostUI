import React from 'react';
import ReactDOM from 'react-dom';
import ChatsDisplay from './chats-display'
import ContactsDisplay from './contacts-display'
import { BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import './home.css'
import NavTabs from '../materialize-components/tabs'
import ImageAvatars from '../materialize-components/avatar'

//// react-native
//import { NativeRouter } from 'react-router-native'
//// react-dom (what we'll use here)
//import { BrowserRouter } from 'react-router-dom'


class Home extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-body grid-container">
                        <div className='avi'><ImageAvatars/></div>
                        <div className='status'>@janedoe </div>
                        <div className='rest'>status / bio</div>
                    </div>
                </div>
                <NavTabs />
            </div>
        );
    }
}

export default Home;
//ReactDOM.render(<Home />, document.getElementById('root')