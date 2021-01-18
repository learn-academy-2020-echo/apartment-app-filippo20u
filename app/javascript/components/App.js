import React from "react"
import PropTypes from "prop-types"

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentEdit from './pages/ApartmentEdit'
import NotFound from './pages/NotFound'


import mockApartments from './mockApartments.js'

import './App.css'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'



class App extends React.Component {
// add constructor and props
constructor(props) {
  super(props)
    this.state = {
      apartments: mockApartments
    }
  }


  render () {

    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props

      console.log(this.props.logged_in)
      console.log(this.props.apartments)

    return (
      <React.Fragment>
        <Router>
         
        <Header/>
        
       
      {/* devise from teh syllabus */}
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

  
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/appindex" component={ ApartmentIndex } />
            <Route path="/appshow/:id" component={ ApartmentShow } />
            <Route path="/appnew" component={ ApartmentNew } />
            <Route path="/appedit/:id" component={ ApartmentEdit } />
            <Route component={ NotFound }/>
        </Switch>
        </Router>

        <Footer/>
      </React.Fragment>
    );
  }
}


export default App
