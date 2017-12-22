import React from 'react';
import '../index.css';

class Content extends React.Component {
    render () {
        return (
            <div>
                <div className="background222">
                    <br />
                    Bem vindos!
                </div>
                <div className="sect sectFirst">
                    <span className="content"></span>
                </div>
                <div className="subSection">
                    <span className="content">Teste Segundo</span>
                </div>
                <div className="sect sectSecond">
                    <span className="content"></span>
                </div>
                <div className="subSection">
                    <span className="content">Teste Segundo</span>
                </div>
            </div>
        )
    }
}
export default Content;