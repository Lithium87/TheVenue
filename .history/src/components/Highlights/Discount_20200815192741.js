import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class Discount extends Component {
    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade>
                        <div className="discount_porcentage">
                            <span>23%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    <div className="discount_description">
                        <h3>Purchase tickets before 20th OCTOBER</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, aperiam id eveniet accusamus inventore illum maiores ratione quisquam nisi dolorum dignissimos cupiditate ducimus dicta sed iste, consequatur laborum, pariatur esse?Architecto veniam nobis vel reiciendis suscipit exercitationem id eveniet sed, unde enim tempore ipsum, perferendis alias! Id nam ratione placeat consequatur fuga voluptates explicabo ullam nemo veritatis! Unde, quod maiores!</p>
                        <div>button</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Discount;
