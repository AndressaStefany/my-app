import React from 'react';
import AppBar from 'material-ui/AppBar';
import Tabs from 'material-ui/Tabs/Tabs';
import Tab from 'material-ui/Tabs/Tab';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class Login extends React.Component{
    static muiName = 'FlatButton';

    render() {
        return (
            <FlatButton {...this.props} label="Login" />
        );
    }
}

const styles = {
    appBar: {
        flexWrap: 'wrap',
    },
    tabs: {
        width: '100%',
    },
};

const Logged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
    </IconMenu>
);

Logged.muiName = 'IconMenu';

class AppBarExampleTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            logged: true // see false
        };
    }
    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        return (<AppBar
            title="Multiprova"
            style={styles.appBar}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonClick={this.handleToggle}
            iconElementRight={this.state.logged ? <Logged /> : <Login />}
        >

            <Drawer
                docked={false}
                width={300}
                open={this.state.open}
                onRequestChange={(open) => this.setState({open})}
            >
                <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
                <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
            </Drawer>
            {/*<Tabs style={styles.tabs}>*/}
            {/*<Tab label="ALL" />*/}
            {/*<Tab label="CAMERA" />*/}
            {/*<Tab label="RECENT" />*/}
            {/*</Tabs>*/}
        </AppBar>)
    }
}

export default AppBarExampleTabs;