import React, { Component } from 'react';
import CandyTypes from "./candyTypes";
import CandyItem from "./CandyItem";
import { withRouter } from 'react-router'


export default class CandyList extends Component {
    render() {
        return (
            <section className="candies">
                <div className="candyButton">
                    <button type="button" className="btn btn-success" onClick={() => {
                        this.props.history.push("/candies/new")
                    }}>Add Candy</button>
                </div>
                <h2>All Candies</h2>
                {
                    this.props.candies.map((item) => {
                        return <CandyItem key={item.id} candy={item} {...this.props} />
                    })
                }
            </section>
        )
    }
}
