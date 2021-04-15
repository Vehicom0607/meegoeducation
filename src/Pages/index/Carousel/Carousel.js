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
const courses = [
    {
        title: 'Java Beginner',
        imgLink: 'https://meegoimages.s3.us-east-2.amazonaws.com/scratch1.png',
        minAge: 8,
        maxAge: 12,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        uid: 1,
        path: '/courses/JavaBeginner'
    },
    {
        title: 'Java Beginner',
        imgLink: 'https://meegoimages.s3.us-east-2.amazonaws.com/scratch1.png',
        minAge: 8,
        maxAge: 12,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        uid: 1,
        path: '/courses/JavaBeginner'
    },
    {
        title: 'Java Beginner',
        imgLink: 'https://meegoimages.s3.us-east-2.amazonaws.com/scratch1.png',
        minAge: 8,
        maxAge: 12,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        uid: 1,
        path: '/courses/JavaBeginner'
    },
    {
        title: 'Java Beginner',
        imgLink: 'https://meegoimages.s3.us-east-2.amazonaws.com/scratch1.png',
        minAge: 8,
        maxAge: 12,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        uid: 1,
        path: '/courses/JavaBeginner'
    },
    {
        title: 'Java Beginner',
        imgLink: 'https://meegoimages.s3.us-east-2.amazonaws.com/scratch1.png',
        minAge: 8,
        maxAge: 12,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        uid: 1,
        path: '/courses/JavaBeginner'
    },
    {
        title: 'Java Beginner',
        imgLink: 'https://meegoimages.s3.us-east-2.amazonaws.com/scratch1.png',
        minAge: 8,
        maxAge: 12,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        uid: 1,
        path: '/courses/JavaBeginner'
    },
    {
        title: 'Java Beginner',
        imgLink: 'https://meegoimages.s3.us-east-2.amazonaws.com/scratch1.png',
        minAge: 8,
        maxAge: 12,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        uid: 1,
        path: '/courses/JavaBeginner'
    }
];



const IndexCarousel = ({ deviceType }) => {
    return (
        <Carousel
            deviceType={deviceType}
            itemClass="image-item"
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            infinite
        >
            {courses.map(course => {
                return (
                    <CourseCard title={course.title}
                                key={course.uid}
                                minAge={course.minAge}
                                maxAge={course.maxAge}
                                description={course.description}
                                imgLink={course.imgLink}
                                path={course.path}
                                />
                )
            })}
        </Carousel>
    );
}

export default IndexCarousel;
