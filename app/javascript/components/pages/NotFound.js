import React, { Component } from 'react';
import notfoundapp from '../asssets/images/notfoundapp.jpg'

class NotFound extends Component {
    render() {
        return (
            <div>
                <h1>Not Found</h1>
                
                <div class="home-img"> 
                    <img src ={ notfoundapp} />
                    {/* <img src="https://images.unsplash.com/photo-1563129792-8aeff041dbda?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2852&q=80" alt="BCN housing"  alt="BCN housing"/> */}
                </div>

            </div>
        );
    }
}

export default NotFound;