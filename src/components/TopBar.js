import React from 'react';
import AppBar from 'material-ui/AppBar';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

// list
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

// icons
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import MapsLocalOffer from 'material-ui/svg-icons/maps/local-offer';
import SocialGroup from 'material-ui/svg-icons/social/group';
import ActionDescription from 'material-ui/svg-icons/action/description';
import EditorBorderColor from 'material-ui/svg-icons/editor/border-color';

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
        backgroundColor: 'White'
    },
    tabs: {
        width: '100%',
    },
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

    handleClose(){
        this.setState({open: false});
    };

    render() {
        return (
            <AppBar
                title={<img src="MultiprovaUFRN.png" width={'15%'}/>}
                titleStyle={styles.buttonsAppBar}
                style={styles.appBar}
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonClick={this.handleToggle}
                iconStyleLeft={{background:'#b09b5b'}}
                iconElementRight={this.state.logged ? <Logged /> : <Login />}
            >

                <Drawer
                    docked={false}
                    width={260}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >

                    <List>
                        <ListItem
                            leftAvatar={<Avatar icon={<ActionHome />} backgroundColor={'#B09B5B'}/>}
                            primaryText="Home"
                            onClick={this.handleClose}
                        />
                        <ListItem
                            leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={'#B09B5B'} />}
                            primaryText="Banco de Questões"
                            onClick={this.handleClose}
                        />
                        <ListItem
                            leftAvatar={<Avatar icon={<ActionDescription />} backgroundColor={'#B09B5B'}/>}
                            primaryText="Banco de Provas"
                            onClick={this.handleClose}
                        />
                        <ListItem
                            leftAvatar={<Avatar icon={<EditorBorderColor />} backgroundColor={'#B09B5B'}/>}
                            primaryText="Avaliações"
                            onClick={this.handleClose}
                        />
                        <ListItem
                            leftAvatar={<Avatar icon={<SocialGroup />} backgroundColor={'#B09B5B'}/>}
                            primaryText="Turmas"
                            onClick={this.handleClose}
                        />
                        <ListItem
                            leftAvatar={<Avatar icon={<MapsLocalOffer />} backgroundColor={'#B09B5B'}/>}
                            primaryText="Tags"
                            onClick={this.handleClose}
                        />
                    </List>
                </Drawer>
            </AppBar>
        )
    }
}

export default AppBarExampleTabs;
