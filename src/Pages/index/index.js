import React, {Component} from 'react';
import MeeGoNavbar from "../../Components/Navbar/Navbar";
import classes from './index.module.css'
class IndexPage extends Component {

    componentDidMount() {
        document.title = "MeeGo Education"
    }


    render() {
        return (
            <div>
                <div className={classes.BgHeader}>
                    <MeeGoNavbar />
                </div>
            </div>
        );
    }
}


export default IndexPage;
