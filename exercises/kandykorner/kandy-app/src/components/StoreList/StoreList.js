import React, { Component } from 'react';
import StoreItem from "./StoreItem";
import { withRouter } from 'react-router'


export default class StoreList extends Component {
    render() {
        return (
            <section className="stores">
                <div className="storeButton">
                    <button type="button" className="btn btn-success" onClick={() => {
                        this.props.history.push("/stores/new")
                    }}>Add Store</button>
                </div>
                <h2>All Stores</h2>
                {
                    this.props.stores.map((item) => {
                        return <StoreItem key={item.id} store={item} {...this.props} />
                    })
                }
            </section>
        )
    }
}