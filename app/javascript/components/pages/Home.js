import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <>
                <h1>This is home component</h1>

        <div className='original-good'>
        

        <h2>Hola Fufus</h2>
        <h2>Apartment App: React in Rails</h2>
        <h3>Thu, Jan 13 - Jan 17</h3>
        <br/>
        <p className='app-descrip1'>
        Sfoglia online le riviste di annunci del Gruppo Tecnocasa direttamente dal tuo smartphone o dal tuo computer. 
Se desideri la copia cartacea vieni in agenzia a ritirare la tua copia gratuita della rivista di annunci immobiliari più diffusa del settore con una tiratura di oltre 9.000.000 di copie mensili.*   
        </p>


        <div class="home-img">
        <img src="https://images.unsplash.com/photo-1563129792-8aeff041dbda?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2852&q=80" alt="BCN housing"  alt="BCN housing"/>
        </div>

        </div>






            </>
        );
    }
}

export default Home;