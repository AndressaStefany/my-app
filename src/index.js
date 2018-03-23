import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PageQuestion from './components/PageQuestion'
import AppBarExampleTabs from './components/TopBar'
import CreateQuestion from './components/CreateQuestion'

import 'material-grid/dist/css/material-grid.css'
import './index.css'

const styles = {
    noMargin: {
        margin:'0%'
    },
    color:{
        color: '#FF5252'
    }
};

const titleStyles = {
    title: {
        cursor: 'pointer'

    },
};

const AppTeste = () => (
    <MuiThemeProvider >
        <AppBarExampleTabs style={{zDepth:'6dp'}} title={<span style={titleStyles.title}>Title</span>}/>
        <PageQuestion/>
    </MuiThemeProvider>
);

// ========================================

ReactDOM.render(
    <AppTeste />,
    document.getElementById('root')
);