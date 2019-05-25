import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class CandyItem extends Component {

    state = {
        saveDisabled: false
    }

    handleClick = (event) => {
        console.log("click", event, this.props.candy.id);
        this.setState({
            saveDisabled: true
        })
        this.props.deleteCandy(this.props.candy.id);
    }

    render() {
        return (
            <article>
                <h3>{this.props.candy.name}</h3>
                <button onClick={this.handleClick} disabled={this.state.saveDisabled}>Delete</button>
                <Link to={`/candies/${this.props.candy.id}`}>Details</Link>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => {
                        this.props.history.push(`/candies/${this.props.candy.id}/edit`);
                    }}>Edit</button>
            </article>
        )
    }
}

export default CandyItem;