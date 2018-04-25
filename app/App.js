import React,{ Component }  from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from '../src/Main'
import APITest from '../src/APITest'
injectTapEventPlugin();
import {render} from 'react-dom';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Main}/>
        <Route path="/APITest" component={APITest}/>
    </Router>,
    document.getElementById('root')
);