import './App.css';
import {Route, Switch} from "react-router-dom";
import IndexPage from "./Pages/index";
import CoursesPage from "./Pages/Courses/Courses";
import * as StartupActions from './store/actions/CoursesActions'
import {useEffect} from "react";
import {connect} from "react-redux";
import Loading from "./Containers/Loading/Loading";
import Course from "./Pages/Course/Course";
import AuthPage from "./Pages/Auth/Signup";
import MeeGoCard from "./Components/Card/Card";

const App = props => {
    const paths = []
    props.courseData.forEach((course, index) => {
            let courseData = course[Object.keys(course)[index]]
            paths.push(courseData)
        }
    )

    let courseRoutes = paths.map((course => {
        return (
            <Route path={course.path} key={course.path}>
                <Course courseData={course} />
            </Route>
        )
    }))

    useEffect(() => {
            props.onStartUp()
        },
        []
    )

    let website
    if (props.loading) {
        website = <Loading />
    } else if (props.error) {
        website = <p>{props.error.message}</p>
        alert(`${props.error}. Email elvisxiang06@gmail.com if this error persists.`)
    } else {
        website = (
            <Switch>
                {courseRoutes}
                <Route path="/courses"><CoursesPage /></Route>
                <Route path="/login"><AuthPage /></Route>
                <Route path="/test"><MeeGoCard /></Route>
                <Route path="/"><IndexPage /></Route>
            </Switch>
        )
    }

  return (
    <div className="App">
        {website}
    </div>
  );
}

const mapStateToProps = state => {
    return {
        courseData: state.courses.courses.courseData,
        error: state.courses.courses.error,
        loading: state.courses.courses.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onStartUp: () => dispatch(StartupActions.getCourses())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
