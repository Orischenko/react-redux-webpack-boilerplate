import React, { Component, PropTypes } from 'react';

export default class Counter extends Component{
    static PropTypes = {

    };

    render() {
        return(
            <div>
                <h2>0</h2>
                <a href="#!" className="increment" onClick={ this._handlerIncrement }>increment me</a>
            </div>
        );
    }

    _handlerIncrement = (event) => {
        event.preventDefault();
    };
}