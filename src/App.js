import './App.css';
import {Route, Switch} from "react-router-dom";
import IndexPage from "./Pages/index";
import CoursesPage from "./Pages/Courses/Courses";
import * as StartupActions from './store/actions/StartupActions'
import {useEffect} from "react";
import {connect} from "react-redux";
import Loading from "./Containers/Loading/Loading";

const App = props => {

    useEffect(() => {
            props.onStartUp()
        },
        []
    )

    let website
    if (props.loading) {
        website = <Loading />
    } else if (props.error) {
        website = <p>error</p>
    } else {
        website = (
            <Switch>
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
        paths: state.courses.paths,
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
