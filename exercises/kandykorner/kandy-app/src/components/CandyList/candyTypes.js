import React, { Component } from 'react'


class CandyTypes extends Component {
    render() {
        return (
            <section className="candyTypes">
                {
                    this.props.candyTypes.map(type =>
                        <div key={type.id}>
                            {type.name}
                        </div>
                    )
                }
            </section>
        )
    }
}

export default CandyTypes