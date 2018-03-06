import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PageQuestion from './components/PageQuestion';
import AppBarExampleTabs from './components/TopBar';
import * as Colors from 'material-ui/styles/colors';

import 'material-grid/dist/css/material-grid.css';
import './index.css';

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
        <PageQuestion />
    </MuiThemeProvider>
);

// ========================================

ReactDOM.render(
    <AppTeste />,
    document.getElementById('root')
);