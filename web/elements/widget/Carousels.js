/**
 * Created by Administrator on 2016/3/3.
 */
import {React, ReactBootstrap} from "../core.js"

class Carousels extends React.Component {

    render () {
        let items = this.props.items.map(function(item) {
            return <ReactBootstrap.CarouselItem>
                <img width={900} height={500} alt="900x500" src={item.src}/>
                <div className="carousel-caption">
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
            </ReactBootstrap.CarouselItem>
        });
        return <ReactBootstrap.Carousel>
            {items}
        </ReactBootstrap.Carousel>
    }
}
