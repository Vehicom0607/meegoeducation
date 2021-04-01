import './App.css';
import {Route} from "react-router-dom";
import IndexPage from "./Pages/index";



function App() {
  return (
    <div className="App">
      <Route path="/" component={IndexPage} />
    </div>
  );
}

export default App;
