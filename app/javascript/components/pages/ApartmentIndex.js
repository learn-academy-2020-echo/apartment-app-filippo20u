import React, { Component } from 'react';

// Reactstrap

import { Card, CardTitle, Col } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'


// Assets
import apt1 from '../asssets/images/apt1.jpg'


class ApartmentIndex extends Component {
    render() {
        console.log(this.props.apartments)
        return (
            <React.Fragment>
                <h1>Apt Index</h1>
                <h2>Questo e' l'index!</h2>

                {/* <div>
                    <Card inverse>
                        <CardImg width="100%" src={apt1} alt="Card image cap" />
                        <CardImgOverlay>
                        <CardTitle tag="h5">Apartment Index</CardTitle>
                        <CardText>Apartment Description</CardText>
                        <CardText>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </CardText>
                        </CardImgOverlay>
                    </Card>
                </div>  */}

                     <Col className='index-card' sm="6"> 
                        { this.props.apartments.map((apartment, index) => {
                        return (
                            <Card className='index-card2' body key={ index }>
                                <CardTitle className='index-card3' >
                                    <h4>{ apartment.state }</h4>
                                    <h4>{ apartment.city }</h4>
                                    <h4>{ apartment.street }</h4>
                                    <h4>{ apartment.apartment }</h4>
                                    <h4>{ apartment.price }</h4>
                                </CardTitle>
                                    <p>
                                    <NavLink to={`/aptshow/${apartment.id}`}>
                                    <Button color="secondary">
                                        More Info
                                    </Button>
                                    </NavLink>
                                    </p>
                            </Card>
                        )
                        })}

                        

                    </Col>


                  
                        {/* Sarah code
                        <p>
                        <NavLink to={`/aptshow/${apartment.id}`}>
                        <Button color="secondary">
                            More Info
                        </Button>
                        </NavLink>
                        </p> */}







            </React.Fragment>
        );
    }
}

export default ApartmentIndex;