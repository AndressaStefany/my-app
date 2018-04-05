import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import FlatButton from 'material-ui/FlatButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import RaisedButton from 'material-ui/RaisedButton'
import PageQuestion from "./components/PageQuestion";
import Home from "./components/Home";

class Login extends React.Component{
    static muiName = 'FlatButton';

    render() {
        return (
            <FlatButton {...this.props} label="Login" />
        );
    }
}

const styles = {
    buttonsAppBar: {
        color: '#b09b5b',
        fill: '#b09b5b',
        fontFamily: 'Open Sans,Arial,Helvetica,Sans-Serif',
        paddingLeft: '50px',
    }
};

const Logged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        iconStyle={{ fill: '#b09b5b' }}
    >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
    </IconMenu>
);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            logged: true // see false
        }
    }

    toggleDrawer = () => this.setState({ open: !this.state.open });

    render() {
        return (
            <Router>
                <div>
                    <AppBar
                        title="Title"
                        titleStyle={styles.buttonsAppBar}
                        className='appBar'
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        onLeftIconButtonClick={this.toggleDrawer}
                        iconStyleLeft={{background:'#b09b5b'}}
                        iconElementRight={this.state.logged ? <Logged /> : <Login />}
                    />

                    <Drawer
                        docked={false}
                        width={260}
                        onRequestChange={this.toggleDrawer}
                        open={this.state.open}
                    >
                        <AppBar
                            title="Title"
                            titleStyle={styles.buttonsAppBar}
                            className='appBar'
                            onLeftIconButtonClick={this.toggleDrawer}
                            iconStyleLeft={{background:'#b09b5b'}}
                        />
                        <MenuItem
                            primaryText="Home"
                            containerElement={<Link to="/" />}
                            onClick={() => {
                                this.toggleDrawer()
                            }}
                        />
                        <MenuItem
                            primaryText="pagequestion"
                            containerElement={<Link to="/pagequestion" />}
                            onClick={() => {
                                this.toggleDrawer()
                            }}
                        />
                    </Drawer>

                    <div style={{ textAlign: 'center' }}>
                        {this.props.children}
                    </div>

                    <Route exact path='/' component={Home}/>
                    <Route path='/pagequestion' component={PageQuestion}/>

                </div>
            </Router>
        )
    }
}

export default App;