import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class Discount extends Component {
    state = {
        discountStart: 0,
        discountEnd: 30
    }

    porcentage = () => {
        if(this.state.discountStart < this.state.discountEnd) {
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.porcentage();
        }, 30)
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade
                        onReveal={() => this.porcentage()}
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before 20th OCTOBER</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, aperiam id eveniet accusamus inventore maiores ratione quisquam nisi dolorum dignissimos cupiditate ducimus dicta sed iste, pariatur esse?Architecto veniam nobis vel reiciendis suscipit exercitationem id eveniet sed, unde enim tempore ipsum, perferendis alias!</p>
                            <div>button</div>
                        </div>
                    </Slide>
                </div>
            </div>
        )
    }
}

export default Discount;
