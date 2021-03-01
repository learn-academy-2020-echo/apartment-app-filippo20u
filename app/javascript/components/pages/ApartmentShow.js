import React, { Component } from 'react';

// import { Card, CardTitle, Col } from 'reactstrap'

class ApartmentShow extends Component {
    render() {
        const { apartment } = this.props
        console.log(this.props.apartment)
        return (
            
            <React.Fragment>

                <div className='show-page'>
                <h1>Apt Show</h1>
                <h3>Show Page</h3>
                <p>{ apartment.id }</p>
                <p>Street: { apartment.street }</p>
                <p>City: { apartment.city }</p>
                <p>State: { apartment.state }</p>
                <p>Manager: { apartment.manager }</p>
                <p>email: { apartment.email }</p>
                <p>Price $:{ apartment.price }</p>
                <p>Bedrooms: { apartment.bedrooms }</p>
                <p>Bathrooms: { apartment.bathrooms }</p>
                <p>Pets allowed: { apartment.pets }</p>
                </div>

            


            </React.Fragment>
        );
    }
}

export default ApartmentShow;