import React from "react"
import PropTypes from "prop-types"

import Header from './components/Header'




class App extends React.Component {
  render () {

    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props

      console.log(this.props.logged_in)

    return (
      <React.Fragment>

        <Header/>

        <h1>Hola Fufus</h1>
        <h2>Apartment App: React in Rails</h2>
        <h3>Thu, Jan 13</h3>
        <br/>

       
       {/* Syllabus */}
        { logged_in &&
          <div>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        }
        { !logged_in &&
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        }




        {/* { this.props.logged_in && 
        <a href=
        {this.props.sign_in_route}>Sign In</a>
        } 

        <br/><br/>

        { this.props.logged_in &&
        <a href=
        {this.props.sign_out_route}>Sign Out</a>
        } 
        */}

        <img src="https://images.unsplash.com/photo-1563129792-8aeff041dbda?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2852&q=80" alt="BCN housing"  width="500" height="auto"  ></img>

      </React.Fragment>
    );
  }
}

export default App
