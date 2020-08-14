import React from 'react';
import Slider from 'react-slick';

import slide_one from '../../resources/images/slide_one.jpg';
import slide_two from '../../resources/images/slide_two.jpg';
import slide_three from '../../resources/images/slide_three.jpg';

const Carrousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500
    }

    return (
        <div
            className="carrousel-wrapper"
            style={{
                height: `${window.innerWidth}px`,
                overflow: 'hidden'
            }}
        >
            <Slider {...settings}>
                <div>
                    <div 
                        className="carrousel-image"
                        style={{
                            background: `url(${slide_one})`,
                            height: `${window.innerWidth}px`
                        }}
                    />
                </div>
                <div>
                    <div 
                        className="carrousel-image"
                        style={{
                            background: `url(${slide_two})`,
                            height: `${window.innerWidth}px`
                        }}
                    />
                </div>
                <div>
                    <div 
                        className="carrousel-image"
                        style={{
                            background: `url(${slide_three})`,
                            height: `${window.innerWidth}px`
                        }}
                    />
                </div>
            </Slider>
        </div>
    );
};

export default Carrousel;