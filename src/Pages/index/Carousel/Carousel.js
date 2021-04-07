import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'
import CourseCard from "../../../Components/CourseCard/CourseCard";

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
const courses = [
    {
        title: 'Java Beginner',
        minAge: 8,
        maxAge: 12,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        uid: 1
    }
];



const IndexCarousel = ({ deviceType }) => {
    return (
        <Carousel
            style={{display: 'flex', flexDirection: 'row'}}
            partialVisbile
            deviceType={deviceType}
            itemClass="image-item"
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile"]}
        >
            {courses.map(course => {
                return (
                    <CourseCard title={course.title}
                                path={''} key={course.uid}
                                minAge={course.minAge}
                                maxAge={course.maxAge}
                                description={course.description}

                                />
                )
            })}
        </Carousel>
    );
}

export default IndexCarousel;
