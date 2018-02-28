import React from 'react';
import TextField from 'material-ui/TextField';

class SubjectiveAlternative extends React.Component {
    render(){
        return (
            <div>
                <br />
                <TextField
                    hintText="Content"
                    floatingLabelText="Your worlds"
                    multiLine={true}
                    fullWidth={true}
                /><br />
            </div>
        )
    }
}

export default SubjectiveAlternative;