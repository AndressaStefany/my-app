import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PageQuestion from './components/PageQuestion'
import TopBar from './components/TopBar'

import 'material-grid/dist/css/material-grid.css'
import './index.css'

const AppTeste = () => (
    <MuiThemeProvider >
        <TopBar style={{zDepth:'6dp'}} title={<span className='titleStyles'>Title</span>}/>
        <PageQuestion/>
    </MuiThemeProvider>
);

ReactDOM.render(
    <AppTeste />,
    document.getElementById('root')
);