import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PageQuestion from './components/PageQuestion';
import AppBarExampleTabs from './components/TopBar';

import 'material-grid/dist/css/material-grid.css';
import './index.css';

const styles = {
    noMargin: {
        margin:'0%'
    },
};

const AppTeste = () => (
    <MuiThemeProvider>
        <PageQuestion />
    </MuiThemeProvider>
);

// ========================================

ReactDOM.render(
    <AppTeste />,
    document.getElementById('root')
);