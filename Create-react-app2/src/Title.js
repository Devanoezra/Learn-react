import React from 'react';

class Title extends React.Component {
    constructor(){
        super();
        this.state = {
            title: "React Pertama",
            subTitle: "Dibuat dengan semangat!"
        }
    }

    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <p>{this.state.subTitle}</p>
            </div>
        );
    }
}

export default Title;