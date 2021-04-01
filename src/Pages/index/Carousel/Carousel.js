import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};
const colors = ["red", "green", "blue", "orange", "yellow", "purple", "pink", "violet"];



const IndexCarousel = ({ deviceType }) => {
    return (
        <Carousel
            partialVisbile
            deviceType={deviceType}
            itemClass="image-item"
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile"]}
        >
            {colors.map(color => {
                return (
                    <div key={color} style={{ background: color, width: 300, height: 300 }}>
                        hello
                    </div>
                );
            })}
        </Carousel>
    );
};

export default IndexCarousel;
