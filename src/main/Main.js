import React, {Component} from 'react';
import './Main.css';

class Main extends Component {
    render () {
        return (
            <div className="container demo">
                <div className="content">
                    <div id="large-header" className="large-header">
                    <canvas id="demo-canvas"></canvas>
                    <h1 className="main-title"><span className="thin">Coming Soon</span></h1>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount(){
        
    }
    
}

export default Main;