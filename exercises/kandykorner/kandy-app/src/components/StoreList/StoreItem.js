import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class StoreItem extends Component {

    state = {
        saveDisabled: false
    }

    handleClick = (event) => {
        console.log("click", event, this.props.store.id);
        this.setState({
            saveDisabled: true
        })
        this.props.deleteStore(this.props.store.id);
    }

    render() {
        return (
            <article>
                <h3>{this.props.store.name}</h3>
                <button onClick={this.handleClick} disabled={this.state.saveDisabled}>Delete</button>
                <Link to={`/stores/${this.props.store.id}`}>Details</Link>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => {
                        this.props.history.push(`/stores/${this.props.employee.id}/edit`);
                    }}>Edit</button>
            </article>
        )
    }
}

export default StoreItem;