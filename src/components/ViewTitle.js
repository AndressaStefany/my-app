import React from 'react'

class ViewTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title:props.name};
    }

    render(){
        return(
            <div className='titleViews'>
                {this.state.title}
                <div>
                    <span className='line'></span>
                </div>
            </div>
        )
    }
}

export default ViewTitle;