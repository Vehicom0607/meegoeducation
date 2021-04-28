import './App.css';
import {Route, Switch} from "react-router-dom";
import IndexPage from "./Pages/index";
import CoursesPage from "./Pages/Courses/Courses";
import * as StartupActions from './store/actions/StartupActions'
import {useEffect} from "react";
import {connect} from "react-redux";
import Loading from "./Containers/Loading/Loading";

const App = props => {
    const paths = []
    props.courseData.forEach((course, index) => {
            let courseData = course[Object.keys(course)[index]]
            paths.push(courseData)
        }
    )
    let courseRoutes = paths.map((course => {
        console.log(course.description)
        return <Route path={course.path} key={course.path} render={(course) => <p>work in progress</p>} />
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
        website = <p>{props.error}</p>
        alert(`${props.error}. Email elvisxiang06@gmail.com if this error persists.`)
    } else {
        website = (
            <Switch>
                {courseRoutes}
                <Route path="/courses" component={CoursesPage} />
                <Route path="/" component={IndexPage} />
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
        courseData: state.courses.courseData,
        error: state.courses.error,
        loading: state.courses.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onStartUp: () => dispatch(StartupActions.getCourses())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
