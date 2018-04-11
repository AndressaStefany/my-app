import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import FlatButton from 'material-ui/FlatButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

// pages
import Home from "./components/Home"
import PageQuestion from "./components/PageQuestion"
import Turmas from "./components/Turmas"
import Avaliacoes from "./components/Avaliacoes"
import BancoProvas from "./components/BancoProvas"
import Tags from "./components/Tags"

// list
import {List, ListItem} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'

// icons
import ActionHome from 'material-ui/svg-icons/action/home'
import ActionAssignment from 'material-ui/svg-icons/action/assignment'
import MapsLocalOffer from 'material-ui/svg-icons/maps/local-offer'
import SocialGroup from 'material-ui/svg-icons/social/group'
import ActionDescription from 'material-ui/svg-icons/action/description'
import EditorBorderColor from 'material-ui/svg-icons/editor/border-color'

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
                        // title="Title"
                        title={<img src="MultiprovaUFRN.png" width={'15%'}/>}
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
                            // title="Title"
                            title={<img src="MultiprovaUFRN.png" width={'150%'}/>}
                            titleStyle={styles.buttonsAppBar}
                            className='appBar'
                            onLeftIconButtonClick={this.toggleDrawer}
                            iconStyleLeft={{background:'#C7B98C'}}
                        />
                        {/*d8d4d4 B09B5B bfaf7b*/}

                        <List component="nav" className='content'>
                            <ListItem
                                containerElement={<Link to="/"/>}
                                leftAvatar={<Avatar icon={<ActionHome />} backgroundColor={'#ccc9c9'}/>}
                                primaryText="Home"
                                onClick={this.toggleDrawer}
                                button
                            />
                            <ListItem
                                containerElement={<Link to="/pagequestion"/>}
                                leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={'#ccc9c9'} />}
                                primaryText="Banco de Questões"
                                onClick={this.toggleDrawer}
                            />
                            <ListItem
                                containerElement={<Link to="/bancoprovas"/>}
                                leftAvatar={<Avatar icon={<ActionDescription />} backgroundColor={'#ccc9c9'}/>}
                                primaryText="Banco de Provas"
                                onClick={this.toggleDrawer}
                            />
                            <ListItem
                                containerElement={<Link to="/avaliacoes"/>}
                                leftAvatar={<Avatar icon={<EditorBorderColor />} backgroundColor={'#ccc9c9'}/>}
                                primaryText="Avaliações"
                                onClick={this.toggleDrawer}
                            />
                            <ListItem
                                containerElement={<Link to="/turmas"/>}
                                leftAvatar={<Avatar icon={<SocialGroup />} backgroundColor={'#ccc9c9'}/>}
                                primaryText="Turmas"
                                onClick={this.toggleDrawer}
                            />
                            <ListItem
                                containerElement={<Link to="/tags"/>}
                                leftAvatar={<Avatar icon={<MapsLocalOffer />} backgroundColor={'#ccc9c9'}/>}
                                primaryText="Tags"
                                onClick={this.toggleDrawer}
                            />
                        </List>
                    </Drawer>

                    <div style={{ textAlign: 'center' }}>
                        {this.props.children}
                    </div>

                    <Route exact path='/' component={Home}/>
                    <Route path='/pagequestion' component={PageQuestion}/>
                    <Route path='/tags' component={Tags}/>
                    <Route path='/turmas' component={Turmas}/>
                    <Route path='/avaliacoes' component={Avaliacoes}/>
                    <Route path='/bancoprovas' component={BancoProvas}/>

                </div>
            </Router>
        )
    }
}

export default App;