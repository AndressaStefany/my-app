import React from 'react';
import logo from '../logo.svg';

import Grid from '../../node_modules/react-bootstrap/lib/Grid';
import Row from '../../node_modules/react-bootstrap/lib/Row';
import Col from '../../node_modules/react-bootstrap/lib/Col';

const gridHeader = (
    <Grid>
        <Row className="App-title">
            <Col md={1}>
                <img src={logo} className="logo_conf" alt="logo" />
            </Col>
            <Col md={1} className="padding-top1per"><a href="#">Home</a></Col>
            <Col md={1} className="padding-top1per"><a href="#">About</a></Col>
            <Col md={1} className="padding-top1per"><a href="#">Tests</a></Col>
        </Row>
    </Grid>
);

class Header extends React.Component {
    render () {
        return (
            <header className="App-header">
                {gridHeader}
            </header>
        )
    }
}
export default Header;