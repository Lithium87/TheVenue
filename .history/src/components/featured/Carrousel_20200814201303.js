import React from 'react';
import Slider from 'react-slick';

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
            
        </div>
    );
};

export default Carrousel;