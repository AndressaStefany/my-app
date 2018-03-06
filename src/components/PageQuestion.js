import React from 'react'
import Question from './Question'
import ChipExampleArray from './Tags'
import AppBarExampleTabs from './TopBar'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {GridList} from 'material-ui/GridList';
// Grid
import Grid from 'material-grid/dist/Grid/Grid';
import Cell from 'material-grid/dist/Grid/Cell';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

const styles = {
    center: {
        textAlign: 'center',
    },
    marginRight: 50,
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 800,
    },
    right: {
        textAlign: 'right'
    },
    propContainer: {
        width: 200,
        overflow: 'hidden',
        margin: '20px auto 0',
    },
    propToggleHeader: {
        margin: '20px auto 10px',
    },
};


class PageQuestion extends React.Component {

    state = {
        fixedHeader: true,
        fixedFooter: false,
        stripedRows: false,
        showRowHover: false,
        selectable: true,
        multiSelectable: false,
        enableSelectAll: false,
        deselectOnClickaway: true,
        showCheckboxes: false,
        height: 'auto',
    };

    render(){
        return (
            <div>
                <div className='paddingTop3percent' style={styles.center}>
                    <Grid>
                        <Cell col={4} tablet={2} >
                        </Cell>
                        <Cell col={8} tablet={6} >
                            <Grid>
                                <Cell col={1}>
                                    <p>Objetiva</p>
                                    <FloatingActionButton backgroundColor={'#4B315F'}>
                                        <ContentAdd />
                                    </FloatingActionButton>
                                </Cell>
                                <Cell col={1}>
                                    <p>V/F</p>
                                    <FloatingActionButton backgroundColor={'#4B315F'}>
                                        <ContentAdd />
                                    </FloatingActionButton>
                                </Cell>
                                <Cell col={1}>
                                    <p>Subjetiva</p>
                                    <FloatingActionButton backgroundColor={'#4B315F'}>
                                        <ContentAdd />
                                    </FloatingActionButton>
                                </Cell>
                                <Cell col={1}>
                                    <p>Associativa</p>
                                    <FloatingActionButton backgroundColor={'#4B315F'}>
                                        <ContentAdd />
                                    </FloatingActionButton>
                                </Cell>
                            </Grid>
                        </Cell>
                    </Grid>
                </div>

                <Grid>
                    <Cell col={4}>
                        <p style={styles.right}>Filtro:</p>
                    </Cell>
                    <Cell col={8}>
                        <ChipExampleArray />
                    </Cell>
                </Grid>

                <div className='paddingTop3percent' style={styles.root}>
                    <GridList
                        cols={1}
                        style={styles.gridList}
                    >
                        <Table
                            height={this.state.height}
                            fixedHeader={this.state.fixedHeader}
                            fixedFooter={this.state.fixedFooter}
                            selectable={this.state.selectable}
                            multiSelectable={this.state.multiSelectable}
                        >
                            <TableHeader
                                displaySelectAll={this.state.showCheckboxes}
                                adjustForCheckbox={this.state.showCheckboxes}
                                enableSelectAll={this.state.enableSelectAll}
                            >
                                <TableRow>
                                    <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{fontSize: '30px'}}>
                                        Questions
                                    </TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody
                                displayRowCheckbox={this.state.showCheckboxes}
                                deselectOnClickaway={this.state.deselectOnClickaway}
                                showRowHover={this.state.showRowHover}
                                stripedRows={this.state.stripedRows}
                            >
                                {tableData.map( (row, index) => (
                                <TableRow key={index}>
                                    <TableRowColumn className='whitespacenormal' style={{paddingTop:'5%', paddingBottom:'5%', textAlign: 'justify'}}>
                                        <Question />
                                    </TableRowColumn>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </GridList>
                </div>
            </div>
        )
    }
}

export default PageQuestion;


const tableData = [
    {
        name: 'John Smith',
        status: 'Employed',
    },
    {
        name: 'Randal White',
        status: 'Unemployed',
    },
    {
        name: 'Stephanie Sanders',
        status: 'Employed',
    },
    {
        name: 'Steve Brown',
        status: 'Employed',
    },
    {
        name: 'Joyce Whitten',
        status: 'Employed',
    },
    {
        name: 'Samuel Roberts',
        status: 'Employed',
    },
    {
        name: 'Adam Moore',
        status: 'Employed',
    },
];
