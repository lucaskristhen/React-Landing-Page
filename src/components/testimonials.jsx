import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


class ImageGallaryComponent extends React.Component {
    render() {
        return (
          <div className="container">
          <div className="section-title text-center">
            <h2>Nossos Clientes</h2>
                <Carousel className="carrosel" autoPlay interval="500" transitionTime="500">
                    <div>
                        <img src="https://picsum.photos/700/400?img=1" />
                        <p className="legend">My Classic Still 1</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/700/400?img=2" />
                        <p className="legend">My Classic Still 2</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/700/400?img=3" />
                        <p className="legend">My Classic Still 3</p>
                    </div>
                </Carousel>
            </div>
            </div>
        )
    };
}

export default ImageGallaryComponent;
