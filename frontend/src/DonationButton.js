import React from 'react';
import ReactDOM from 'react-dom';

class DonateButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { donated: false}
    }

    render() {
        if (this.state.donated) {
            return "Thank you some much for the donation!";
        }
        return React.createElement('button', { onClick: () => this.setState({ donated: true }) }, 'Buy me a coffee');
    }
}

const domContainer = document.getElementById('donation-button');
ReactDOM.render(React.createElement(DonateButton, domContainer));


