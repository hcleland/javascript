import React, { Component } from "react"
import Shop from "./Shop.svg"

export default class Store extends Component {
    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="store">
                <div key={this.props.store.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={Shop} className="icon--store" />
                        </h4>
                        <h4>
                            {this.props.store.name}
                        </h4>
                        <button onClick={
                            () => {
                                this.setState(
                                    { saveDisabled: true },
                                    () => this.props.deleteStore(this.props.store.id)
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