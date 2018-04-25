import React,{ Component }  from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Main from '../src/Main'
import ValidationExample from '../src/ValidationExample'


injectTapEventPlugin();
import {render} from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div className="app">

            </div>
        )
    }
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Main}/>
        <Route path="/ValidationExample" component={ValidationExample}/>
    </Router>,
    document.getElementById('root')
);

// class App extends Component {
//   render(){
//     return (
//       <h1>Hello World</h1>
//     );
//   }
// }
//
// render(<App />, document.getElementById('root'));