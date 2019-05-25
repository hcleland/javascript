import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class EmployeeItem extends Component {

    state = {
        saveDisabled: false
    }

    handleClick = (event) => {
        console.log("click", event, this.props.employee.id);
        this.setState({
            saveDisabled: true
        })
        this.props.deleteEmployee(this.props.employee.id);
    }

    render() {
        return (
            <article>
                <h3>{this.props.employee.name}</h3>
                <button onClick={this.handleClick} disabled={this.state.saveDisabled}>Delete</button>
                <Link to={`/employees/${this.props.employee.id}`}>Details</Link>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => {
                        this.props.history.push(`/employees/${this.props.employee.id}/edit`);
                    }}>Edit</button>
            </article>
        )
    }
}

export default EmployeeItem;