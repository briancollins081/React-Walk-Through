import React from 'react';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            gameOver: false
        };
    }
    
    render() {
        return (
            <div>
                <h1>Your Score Is: {this.state.id}</h1>
            </div>
        )
    }
}

export default Game;