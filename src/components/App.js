import React from 'react';
import Grid from 'material-grid/dist/Grid/Grid';
import Cell from 'material-grid/dist/Grid/Cell';


class App extends React.Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={12}><div className="">12</div></Cell>
                </Grid>
                <Grid>
                    <Cell col={4} tablet={2} ><div className="box">4-2</div></Cell>
                    <Cell col={8} tablet={6} ><div className="box">8-6</div></Cell>
                </Grid>
                <Grid>
                    <Cell col={1} tablet={8} phone={4}><div className="box">1-8-4</div></Cell>
                    <Cell col={1} tablet={8} phone={4}><div className="box">1-8-4</div></Cell>
                    <Cell col={1} tablet={4} phone={4}><div className="box">1-8-4</div></Cell>
                    <Cell col={1} tablet={4} phone={4}><div className="box">1-8-4</div></Cell>
                    <Cell col={1}><div className="box">1</div></Cell>
                    <Cell col={1}><div className="box">1</div></Cell>
                    <Cell col={1}><div className="box">1</div></Cell>
                    <Cell col={1}><div className="box">1</div></Cell>
                    <Cell col={1}><div className="box">1</div></Cell>
                    <Cell col={1}><div className="box">1</div></Cell>
                    <Cell col={1}><div className="box">1</div></Cell>
                    <Cell col={1}><div className="box">1</div></Cell>
                </Grid>
            </div>
        )
    }
}

export default App;