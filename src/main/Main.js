import React, {Component} from 'react';
import './Main.css';

class Main extends Component {
    render () {
        return (
            <div></div>
        );
    }

    componentDidMount(){
        console.log("mounted");
        document.getElementById('large-header').style.height = 200+"px";
    }
    
}

export default Main;