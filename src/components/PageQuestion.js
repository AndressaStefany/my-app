import React from 'react'
import ViewQuestions from './ViewQuestions'
import CreateQuestion from "./CreateQuestion";


class PageQuestion extends React.Component {
    constructor() {
        super();
        this.state = {
            pageCreate: false,
        };
    }

    handlePageCreate = (value) => {
        this.setState({pageCreate: value});
    };

    render(){
        return (
            <div>
                {this.state.pageCreate && <CreateQuestion />}
                {!(this.state.pageCreate) && <ViewQuestions page={this.handlePageCreate}/>}
            </div>
        )
    }
}

export default PageQuestion;
