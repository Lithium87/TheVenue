import React, { Component } from 'react'

class Pricing extends Component {
    state = {
        prices: [100, 150, 200],
        position: ['Balcony', 'Medium', 'Star'],
        desc: [
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
            'Quae corporis error itaque labore tenetur? Mollitia delectus quas tempora.',
            'Eaque eligendi amet sint eius quisquam quibusdam velit facilis illum neque rerum?'
        ],
        linkto: ['http://sales/b', 'http://sales/m', 'http://sales/s']
    }

    showBoxes = () => (
        this.state.prices.map((box, i) => (
            <div className="pricing_item">
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>${this.state.prices[i]}</span>
                        <span>{this.state.positions[i]}</span>
                    </div>
                    <div className="pricing_description">
                        {this.state.desc[i]}
                    </div>
                    <div className="pricing_buttons">
                        button
                    </div>
                </div>
            </div>
        ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Pricing;
