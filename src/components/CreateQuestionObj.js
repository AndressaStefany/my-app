import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import {GridList} from 'material-ui/GridList'

// Grid
import Grid from 'material-grid/dist/Grid/Grid'
import Cell from 'material-grid/dist/Grid/Cell'

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table'

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};

export default class CreateQuestionObj extends React.Component {

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
                                <div>
                                    <h2 style={styles.headline}>Controllable Tab A</h2>
                                    <p>
                                        Objetiva
                                    </p>
                                </div>
                            </Tab>
                            <Tab label="Subjetiva" value="sub" style={{color:'#4B315F'}} className='tabsCreate'>
                                <div>
                                    <h2 style={styles.headline}>Controllable Tab B</h2>
                                    <p>
                                        Subjetiva
                                    </p>
                                </div>
                            </Tab>
                            <Tab label="Verdadeira ou Falsa" value="vf" style={{color:'#4B315F'}} className='tabsCreate'>
                                <div>
                                    <h2 style={styles.headline}>Controllable Tab B</h2>
                                    <p>
                                        Verdadeira ou falsa.
                                    </p>
                                </div>
                            </Tab>
                            <Tab label="Associativa" value="assoc" style={{color:'#4B315F'}} className='tabsCreate'>
                                <div>
                                    <h2 style={styles.headline}>Controllable Tab B</h2>
                                    <p>
                                        Associativa.
                                    </p>
                                </div>
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