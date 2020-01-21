import React, { Component } from 'react'
//import { Well } from 'react-bootstrap'

class Scorebox extends Component {
    render() {
        return (
            <>
                <center>
                    Question <strong>{this.props.current + 1}</strong> of <strong>{this.props.questions.length}</strong><br />
                    <strong>Score </strong><span className="score">{this.props.score}</span>
                </center>
            </>
        )
    }
}

export default Scorebox