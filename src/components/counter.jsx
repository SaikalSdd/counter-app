import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    }

    styles = {
        fontSize: 30,
        fontWeight: "bold"
    }
    render() { 
        return (
        <React.Fragment>
            <span  style={this.styles} className = {this.getBadgeClasses()}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
        </React.Fragment>);
    }

//rendering classes dynamically
getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
}

formatCount() {
    const { count } = this.state; //in order to not repaet "this.state.count"
    return count === 0 ? "Zero" : count;
};    
}



 
export default Counter;