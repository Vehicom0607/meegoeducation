import './App.css';
import {Route, Switch} from "react-router-dom";
import IndexPage from "./Pages/index";
import CoursesPage from "./Pages/Courses/Courses";


function App() {
  return (
    <div className="App">
        <Switch>
            <Route path="/courses" component={CoursesPage} />
            <Route path="/" component={IndexPage} />
        </Switch>
    </div>
  );
}

export default App;
