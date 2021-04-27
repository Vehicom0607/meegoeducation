import React, {Component} from 'react';
import classes from './Loading.module.css'

class Loading extends Component {
    render() {
        return (
            <div style={{display: 'flex', width: '100vw', height: '100vh'}}>
                <div style={{alignSelf: 'center', margin: 'auto'}}>
                    <p className="display-3" style={{color: '#82d8ff'}}>Loading...</p>
                    <div className={classes.loader}>Loading...</div>
                </div>
            </div>
        );
    }
}


export default Loading;
