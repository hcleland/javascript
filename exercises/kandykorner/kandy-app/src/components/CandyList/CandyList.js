import React, { Component } from 'react'


class CandyList extends Component {
    render() {
        return (
            <section className="candies">
                {
                    this.props.candies.map(candy =>
                        <div key={candy.id}>
                            <p>{candy.name} - {candy.type}</p>
                        </div>
                    )
                }
            </section>
        )
    }
}

export default CandyList