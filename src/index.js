import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor (props) {
        super(props);
        //This is the only time we do direct assignment to this.state
        this.state = {
            lat: null,
            errorMessage: ""
        }
        
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat: position.coords.latitude})
            },

            err => this.setState({errorMessage : err.message})
        );
    }

    componentDidUpdate() {
        console.log("My component was jut updated- it rerendered!")
    }


    render() {
        if (this.state.errorMessage && !this.state.lat){
            return (<>
            <div>Error:{this.state.errorMessage}</div>
            <br/>
            </>)
        } if (!this.state.errorMessage && this.state.lat){
            return(<>
            <div>Latitude: {this.state.lat}</div>
            </>)
        } else {
            return "Loading..."
        }
    }
}

ReactDOM.render( < App /> , document.querySelector("#root"))