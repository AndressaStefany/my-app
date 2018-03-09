import React from 'react';
import TextField from 'material-ui/TextField';

class Enunciado extends React.Component {
    render(){
        return (
            <div className="marginLeftRight3percent">
                <TextField
                    hintText="Enunciado"
                    multiLine={true}
                    fullWidth={true}
                    rows={3}
                    underlineFocusStyle={{borderColor:'#b09b5b'}}
                /><br />
            </div>
        )
    }
}

export default Enunciado;