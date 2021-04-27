import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'
import CourseCard from "../../../Components/CourseCard/CourseCard";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
    }
};


const IndexCarousel = (props) => {
    return (
        <Carousel
            itemClass="image-item"
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            infinite
        >
            {props.courses.map(course => {
                let courseData = course[Object.keys(course)[0]]
                return (
                    <CourseCard title={courseData.title}
                                key={courseData.title}
                                minAge={courseData.minAge}
                                maxAge={courseData.maxAge}
                                description={courseData.description}
                                imgLink={courseData.imgLink}
                                path={courseData.path}
                    />
                )
            })}
        </Carousel>
    );
}

export default IndexCarousel;
