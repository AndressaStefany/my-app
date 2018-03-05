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

// list
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';

// icons
import ActionHome from 'material-ui/svg-icons/action/home';

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
        this.handleClose = this.handleClose.bind(this);
    }
    handleToggle = () => this.setState({open: !this.state.open});

    // handleClose = () => this.setState({open: false});

    handleClose(){
        alert("teste");
        this.setState({open: false});
    };

    render() {
        return (<AppBar
            title="Title"
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

                <List>
                    <ListItem
                        leftAvatar={<Avatar icon={<FileFolder />} />}
                        rightIcon={<ActionInfo />}
                        primaryText="Photos"
                        secondaryText="Jan 9, 2014"
                        onClick={this.handleClose}
                    />
                    <ListItem
                        leftAvatar={<Avatar icon={<FileFolder />} />}
                        rightIcon={<ActionInfo />}
                        primaryText="Recipes"
                        secondaryText="Jan 17, 2014"
                        onClick={this.handleClose}
                    />
                    <ListItem
                        leftAvatar={<Avatar icon={<FileFolder />} />}
                        rightIcon={<ActionInfo />}
                        primaryText="Work"
                        secondaryText="Jan 28, 2014"
                        onClick={this.handleClose}
                    />
                </List>


                {/*<MenuItem onClick={this.handleClose}>*/}
                    {/*<IconButton>*/}
                        {/*<ActionHome/>*/}
                        {/*Home*/}
                    {/*</IconButton>*/}
                {/*</MenuItem>*/}
                {/*<MenuItem onClick={this.handleClose}>Banco de Questões</MenuItem>*/}
                {/*<MenuItem onClick={this.handleClose}>Banco de Provas</MenuItem>*/}
                {/*<MenuItem onClick={this.handleClose}>Avaliações</MenuItem>*/}
                {/*<MenuItem onClick={this.handleClose}>Turmas</MenuItem>*/}
                {/*<MenuItem onClick={this.handleClose}>Tags</MenuItem>*/}
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
