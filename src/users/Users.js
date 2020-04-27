import React, { Component } from 'react';
import User from './User';

class Users extends Component {
    render() {
        return (
            <div>
                {/* returns another div called user */}
                <User/>  
            </div>
        );
    }
}

export default Users;