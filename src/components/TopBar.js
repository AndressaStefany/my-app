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
import {blue500, yellow600} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';

// icons
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import MapsLocalOffer from 'material-ui/svg-icons/maps/local-offer';
import SocialGroup from 'material-ui/svg-icons/social/group';
import ActionDescription from 'material-ui/svg-icons/action/description';
import EditorBorderColor from 'material-ui/svg-icons/editor/border-color';

import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


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
        color: '#000000',
        fill: '#000000'
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
        iconStyle={{ fill: '#000000' }}
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
        alert("teste");
        this.setState({open: false});
    };

    render() {
        return (
            <AppBar
                title="Title"
                titleStyle={styles.buttonsAppBar}
                style={styles.appBar}
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonClick={this.handleToggle}
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
                            // leftAvatar={<ActionHome />}
                            leftAvatar={<Avatar icon={<ActionHome />} backgroundColor={'#B09B5B'}/>}
                            // rightIcon={<ActionInfo />}
                            primaryText="Home"
                            // secondaryText="Dashboard Estatístico"
                            onClick={this.handleClose}
                        />
                        <ListItem
                            leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={'#B09B5B'} />}
                            // rightIcon={<ActionInfo />}
                            primaryText="Banco de Questões"
                            // secondaryText="Jan 17, 2014"
                            onClick={this.handleClose}
                        />
                        <ListItem
                            leftAvatar={<Avatar icon={<ActionDescription />} backgroundColor={'#B09B5B'}/>}
                            // rightIcon={<ActionInfo />}
                            primaryText="Banco de Provas"
                            // secondaryText="Jan 28, 2014"
                            onClick={this.handleClose}
                        />
                        <ListItem
                            leftAvatar={<Avatar icon={<EditorBorderColor />} backgroundColor={'#B09B5B'}/>}
                            // rightIcon={<ActionInfo />}
                            primaryText="Avaliações"
                            // secondaryText="Jan 28, 2014"
                            onClick={this.handleClose}
                        />
                        <ListItem
                            leftAvatar={<Avatar icon={<SocialGroup />} backgroundColor={'#B09B5B'}/>}
                            // rightIcon={<ActionInfo />}
                            primaryText="Turmas"
                            // secondaryText="Jan 28, 2014"
                            onClick={this.handleClose}
                        />
                        <ListItem
                            leftAvatar={<Avatar icon={<MapsLocalOffer />} backgroundColor={'#B09B5B'}/>}
                            // rightIcon={<ActionInfo />}
                            primaryText="Tags"
                            // secondaryText="Jan 28, 2014"
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
            </AppBar>
        )
    }
}

export default AppBarExampleTabs;
