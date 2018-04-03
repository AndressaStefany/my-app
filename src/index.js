import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, HashRouter, Link } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import App from './App'
import PageQuestion from './components/PageQuestion'
import ViewQuestions from './components/ViewQuestions'

import TopBar from './components/TopBar'

import 'material-grid/dist/css/material-grid.css'
import './index.css'

injectTapEventPlugin();

const Root = () => (
    <MuiThemeProvider >
        {/*<TopBar style={{zDepth:'6dp'}} title={<span className='titleStyles'>Title</span>}/>*/}
        {/*<Router>*/}
            {/*<div>*/}
                {/*<ul>*/}
                    {/*<li><Link to="/">Page</Link></li>*/}
                    {/*<li><Link to="/viewquestions">View</Link></li>*/}
                {/*</ul>*/}
                <HashRouter>
                    <Route  path="/" component={App} />
                    {/*<Route exact path="/" component={PageQuestion} />*/}
                    {/*<Route exact path="/viewquestions" component={ViewQuestions} />*/}
                </HashRouter>
            {/*</div>*/}
        {/*</Router>*/}
    </MuiThemeProvider>
);

ReactDOM.render(
    <Root />,
    document.getElementById('root')
);