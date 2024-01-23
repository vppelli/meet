// src/components/Alert.js

import { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null;
        this.bgColor = null;
    }

    getStyle = () => {
        return {
            color: this.color,
            backgroundColor: this.bgColor,
            borderWidth: "1px",
            borderStyle: "solid",
            fontWeight: "bolder",
            borderRadius: "4px",
            borderColor: this.color,
            backdropFilter: "blur(10px)",
            textAlign: "center",
            fontSize: "12px",
            margin: "10px 0",
            padding: "10px"
        };
    }

    render() {
        return (
            <div className="Alert">
                <p style={this.getStyle()}>{this.props.text}</p>
            </div>
        );
    }
};

class InfoAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = "rgb(0, 0, 255)"; // blue
        this.bgColor = "rgba(220, 220, 255, 0.2)"; // light blue
    }
};

class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = "rgb(255, 0, 0)"; // red
        this.bgColor = "rgba(255, 220, 220, 0.2)"; // light red
    }
};

class WarningAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = "rgb(255, 165, 0)"; // orange
        this.bgColor = "rgba(255, 202, 105, 0.2)"; // light orange
    }
};

export { InfoAlert, ErrorAlert, WarningAlert };