import React from 'react';
import {
    Table,
    TableBody,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';


class ObjectiveAlternative extends React.Component {
    render(){
        return (<Table>
            <TableBody>
                <TableRow>
                    <TableRowColumn>John Smith</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>Randal White</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>Stephanie Sanders</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>Steve Brown</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>Christopher Nolan</TableRowColumn>
                </TableRow>
            </TableBody>
        </Table>
        )
    }
}

export default ObjectiveAlternative;