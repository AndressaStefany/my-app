import React from 'react';
import TextField from 'material-ui/TextField';

import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

class DocumentInput extends React.Component {
    render() {
        return (
            <div className='alternativesObj'>
                <TextField multiLine={true} fullWidth={true} underlineFocusStyle={{borderColor:'#b09b5b'}} />
            </div>
        );
    }
}


class ObjectiveAlternative extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            documents: []
        };

        this.add = this.add.bind(this);
    }

    add() {
        const documents = this.state.documents.concat(DocumentInput);
        this.setState({ documents });
    }

    render(){
        const documents = this.state.documents.map((Element, index) => {
            return <Element key={ index } index={ index } />
        });

        return (
            <div>
                {documents}
                <div style={{textAlign:'right'}}>
                    <FloatingActionButton
                        className='marginLeftRight3percent marginTopBottom3percent'
                        backgroundColor={'#4B315F'}
                        onClick={this.add}
                    >
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            </div>

        )
    }
}

export default ObjectiveAlternative;