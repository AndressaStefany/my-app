import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'

// Grid
import Grid from 'material-grid/dist/Grid/Grid'
import Cell from 'material-grid/dist/Grid/Cell'

// Paper
import Paper from 'material-ui/Paper'

import Enunciado from './Enunciado'
import ObjectiveAlternative from './ObjectiveAlternative'
import ViewTitle from "./ViewTitle";

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    paperStyle: {
        height: 'auto',
        width: '100%',
        margin: 20,
        textAlign: 'center',
        display: 'inline-block',
    }
};

export default class CreateQuestion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'obj',
        };
    }

    handleChange = (value) => {
        this.setState({
            value: value,
        });
    };

    render() {
        return (
            <div>
                <ViewTitle name={"Criação de Questão"}/>
                <Grid>
                    <Cell col={2} tablet={2} >
                    </Cell>
                    <Cell col={8} tablet={6} >
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            inkBarStyle={{background:'#4B315F'}}
                            tabItemContainerStyle={{background:'transparent'}}
                            style={{textColor:'#4B315F'}}
                        >
                            <Tab label="Objetiva" value="obj" style={{color:'#4B315F'}} className='tabsCreate'>
                                <Paper style={styles.paperStyle} zDepth={1} rounded={false}>
                                    <div className="paddingTop3percent">
                                        <Enunciado/>
                                        <ObjectiveAlternative/>
                                    </div>
                                </Paper>
                            </Tab>
                            <Tab label="Subjetiva" value="sub" style={{color:'#4B315F'}} className='tabsCreate'>
                                <Paper style={styles.paperStyle} zDepth={1} rounded={false}>
                                    <div className="paddingTop3percent">
                                        <Enunciado/>
                                    </div>
                                </Paper>
                            </Tab>
                            <Tab label="Verdadeira ou Falsa" value="vf" style={{color:'#4B315F'}} className='tabsCreate'>
                                <Paper style={styles.paperStyle} zDepth={1} rounded={false}>
                                    <div className="paddingTop3percent">
                                        <Enunciado/>
                                    </div>
                                </Paper>
                            </Tab>
                            <Tab label="Associativa" value="assoc" style={{color:'#4B315F'}} className='tabsCreate'>
                                <Paper style={styles.paperStyle} zDepth={1} rounded={false}>
                                    <div className="paddingTop3percent">
                                        <Enunciado/>
                                    </div>
                                </Paper>
                            </Tab>
                        </Tabs>
                    </Cell>
                    <Cell col={2} tablet={2} >
                    </Cell>
                </Grid>
            </div>
        );
    }
}