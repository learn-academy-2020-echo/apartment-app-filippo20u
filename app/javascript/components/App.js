import React, {Component} from "react"
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



class App extends Component {
// add constructor and props
constructor(props) {
  super(props)
    this.state = {
      apartments: mockApartments
    }
  }


  createNewApartment = (newapartment) => {
    console.log(newapartment)
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

       



          {/* Home Route  */}
            <Route exact path="/" component={ Home } />

          {/* Index Route */}
            
            {/* <Route path="/appindex" component={ ApartmentIndex } /> */}



            <Route 
              path="/aptindex" 
              render={ (props) => < ApartmentIndex 
              apartments={ this.state.apartments } 
              /> 
              }
            />



          {/* Show Route */}

          {/* <Route path="/apthow/:id" component={ ApartmentShow } /> */}


            <Route exact path="/aptshow/:id" 
              render={ (props) => {
              let id = props.match.params.id
              let apartment = this.state.apartments.find(apartment => apartment.id === parseInt(id))
              return (
                <ApartmentShow apartment={ apartment } />
              )
              }}
            />

          {/* New Route */}

              {/* original */}
            {/* <Route path="/aptnew" component={ ApartmentNew } /> */}

            {/* Cat Tinder */}
            {/* <Route
              path="/catnew"
              render={ (props) => <CatNew createNewCat={ this.createNewCat }/> }
            /> */}
{/* 
            <Route
            path="/apartmentnew"
            render={ (props) => {
              return (
                <ApartmentNew current_user={ this.props.current_user } createNewApartment={ this.createNewApartment } />
              )
            }}
            /> */}

             {/* -----Protected Apartment New----- */}
          <Route
            path="/apartmentnew"
            render={ (props) => {
              return (
                <ApartmentNew current_user={ this.props.current_user } createNewApartment={ this.createNewApartment } />
              )
            }}
          />



            {/* Apt Edit */}
            {/* <Route path="/aptedit/:id" component={ ApartmentEdit } /> */}


              {/* ----- Protected Apartment Edit----- */}
          <Route
            path="/apartmentedit/:id"
            render={ (props) => {
              let id = props.match.params.id
              let apartment = this.state.apartments.find(apartment => apartment.id === parseInt(id))
              return (
                <ApartmentEdit
                  current_user={ this.props.current_user }
                  editApartment={ this.editApartment }
                  apartment= { apartment }
                />
              )
            }}
          />




            <Route component={ NotFound }/>

        </Switch>
        </Router>

        <Footer/>
      </React.Fragment>
    );
  }
}


export default App
