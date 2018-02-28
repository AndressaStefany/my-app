import React from 'react';
import Subheader from 'material-ui/Subheader';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 800,
    },
    spaceLines:{
        lineHeight: '130%'
    },
};

class Question extends React.Component {
    render(){
        return (
            <div>
                <Subheader style = {styles.spaceLines}>
                    One of the things that made an incredible impression on me in the film was
                    Frida’s comfort in and celebration of her own unique beauty. She didn’t try to
                    fit into conventional ideas or images about womanhood or what makes someone or
                    something beautiful. Instead, she fully inhabited her own unique gifts, not
                    particularly caring what other people thought. She was magnetic and beautiful
                    in her own right. She painted for years, not to be a commercial success or to
                    be discovered, but to express her own inner pain, joy, family, love and culture.
                    She absolutely and resolutely was who she was. The trueness of her own unique
                    vision and her ability to stand firmly in her own truth was what made her
                    successful in the end.
                    <br/>
                    HUTZLER, L. Disponível em: www.etbscreenwriting.com. Acesso em: 6 maio 2013.
                </Subheader>
            </div>
        )
    }
}

export default Question;