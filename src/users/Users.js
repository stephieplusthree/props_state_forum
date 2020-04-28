import React, { Component } from 'react';
import User from './User';

class Users extends Component {
    // create a state which holds all of the users. It will be an Array. State will be an object and it will have a property that holds this array
    state = {
        users: [
            {name:"John", age:20},
            {name:"Jill", age:30},
            {name:"Peter", age:40},
        ],
        // add new object inside the state that will be a title
        title:"Users List"
    };    
    
    // function to activate when user clicks on button
    makeMeYounger = () => {
        console.log('clicked');
    }

    render() {
        return (
            <div>
                {/* add onClick and interpulate name of function that will execute when button is clicked */}
                {/* add button to change state of user ages to make ages 10 years younger */}
                <button onClick={this.makeMeYounger}>Make Users 10 Years Younger</button>
                <br/>
                {/* display text as h1 */}
                <h1>{this.state.title}</h1>
                {/* get rid of the hard coded stuff. Remove the age and use curly brackets and inside this state is available. You can access it by using this dot state */}
                <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
                <User age={this.state.users[1].age}>{this.state.users[1].name}</User>
                <User age={this.state.users[2].age}>{this.state.users[2].name}</User>
                {/* create multiple user components */}
                {/* <User age="20">John</User>
                <User age="30">Jill</User>
                <User age="40">Peter</User> */}
            </div>
        );
    }
}

export default Users;