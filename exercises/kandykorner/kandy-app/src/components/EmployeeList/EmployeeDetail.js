import React, { Component } from "react"
import Person from "./Person.png"

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
                            <img src={Person} className="icon--employee" />
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