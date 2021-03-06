import React, { Component } from "react"
import Person from "./Person.svg"

export default class Employee extends Component {
    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="employee">
                <div key={this.props.employee.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={Person} className="icon--person" />
                        </h4>
                        <h4>
                            {this.props.employee.name}
                        </h4>
                        <button onClick={
                            () => {
                                this.setState(
                                    { saveDisabled: true },
                                    () => this.props.deleteEmployee(this.props.employee.id)
                                )
                            }
                        }
                            disabled={this.state.saveDisabled}
                            className="card-link">Delete</button>
                    </div>
                </div>
            </section>
        )
    }
}