import React from 'react';
import ReactDOM from 'react-dom';
import ChatsDisplay from './chats-display'
import ContactsDisplay from './contacts-display'
import { BrowserRouter, Link, Route, Switch} from 'react-router-dom';

//import * as serviceWorker from './serviceWorker';

//// react-native
//import { NativeRouter } from 'react-router-native'
//// react-dom (what we'll use here)
//import { BrowserRouter } from 'react-router-dom'

class Home extends React.Component {

    render() {
        return (

            <div className=''>
                <ChatsDisplay />
                <ContactsDisplay />
            </div>
        );
    }
}

//const Home = () => (
//  <BrowserRouter>
//    <div>
//      <nav><Link to="/chat">ChatsDisplay</Link></nav>
//      <Route path="/chat" component={ChatsDisplay}/>
//
//    </div>
//    </BrowserRouter>
//);

export default Home;
//ReactDOM.render(<Home />, document.getElementById('root')