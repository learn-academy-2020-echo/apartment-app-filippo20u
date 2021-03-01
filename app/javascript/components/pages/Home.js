import React, { Component } from 'react';
import './Home.css'
import homepic from '../asssets/homepic.jpeg'

class Home extends Component {
    render() {
        return (
            <>
                <h1>This is home component</h1>

            <div className='original-good'>
                <h2>Hola Fufus</h2>
                <h2>Apartment App: React in Rails</h2>
                <h3>Thu, Jan 13 - Jan 19</h3>


                <div class="home-img"> 
                    <img src ={ homepic} />
                    </div>
                <br/>
                <p className='app-descrip1'>
                Sfoglia online le riviste di annunci del Gruppo Tecnocasa direttamente dal tuo smartphone o dal tuo computer. 
                Se desideri la copia cartacea vieni in agenzia a ritirare la tua copia gratuita della rivista di annunci immobiliari più diffusa del settore con una tiratura di oltre 9.000.000 di copie mensili.*   


What would your dream house look like?What would your dream house look like?
Well stocked
My dream house would almost certainly include a gigantic fridge that would hold all the food I need for the next month – that way I wouldn’t even need to go outside. I’d also set up a cinema in my house, fully equipped with massage chairs, and, of course, a popcorn machine! It would be great to have some nature around me too, so I’d also like to have a garden filled with exotic flowers that would spread their scents all around the house.

Aiswarya Rambhatla, 15, South Island School
<br/>
Out of this world
I’ve always wanted to see the Earth from space so my dream house would orbit the Earth. It would be filled with a bunch of high-tech stuff that I could play around with and, of course, a button to turn off zero gravity because I don’t think sleeping while floating would be comfortable. I would also like there to be a teleporter that would allow me to go anywhere on Earth. How else would I get back to Earth to see my friends and family? Flying by rocket each time would be too wasteful.

Chris Chow, 16, STFA Seaward Woo College
<br/>
Which mythical creature do you wish you could ride to school?

Glass house
My dream house would be shaped like a sphere and made of glass, and there would be a platform where you can bungee jump off. I’ve never tried bungee jumping before but I think it would be exhilarating. It would also have a garden with all sorts of flowers growing. Lastly, I would like my home to have a grand piano because I love playing and listening to the piano in my free time.

Ryan Chan Tsz-hin, 13, SKH Tsang Shiu Tim Secondary School
<br/>
Cosy cottage
My ideal house would be located in a small neighbourhood near a serene lake. It would be a cottage with a balcony that looks out on the river. I would spend my days sitting on the balcony and reading my favourite books. Also, there would be a large workroom on the top floor where I could work or browse the web on my computer. Generally, I would be satisfied with my house as long as it is clutter-free and tidy. I just need a place where I can truly relax my stressed mind.

Fung Kwun-kit, 16, Carmel Secondary School
<br/>
From Stan Lee to Helen Keller: Which celebrity our readers would bring back to life

Home sweet home
My dream house would be entirely made of candy. The door would be made of my favourite butter cookies, and the rooftop made with chocolate bars. There’d be colourful and yummy candies stuck all over the outer walls. Inside, you will find a marshmallow floor, and pillows made of pink, orange, and white candy floss. I’d be able to lie down comfortably on the candy floss for a relaxing afternoon!

Zelene Lam, 9, SKH Ma On Shan Holy Spirit Primary School
<br/>
Home is where the heart is
Unlike other people’s dream houses, my dream house does not need to be large or have a lot of facilities. As long as I am living with my family and the ones I love, I am living in my dream house.

Gavin Wai Man-hin, 13, Hong Kong Chinese Women’s Club College

What is the best piece of advice you’ve ever received?
<br/>
A great escape
If I had the money, I’d buy myself a private island to live on. The sand along the coast would be warm and soft, and I’d sunbathe on it any chance I’d get. You would need to go through a garden maze to find my three-storey house. It would be surrounded by a pool and would look very modern with large windows that allow natural light to shine through. The kitchen, dining room and living room would be on the first floor, and on the second floor there would be a gym room, karaoke room, music room and library. My bedroom would take up the whole top floor, with my bed and work desk facing the island’s best view.

Tiffany Yeung, 16, Maryknoll Convent School (Secondary Section)
<br/>
Five stories high
My dream house would be in America. Some of my cousins live there and I miss them so much. The house would be very big, and I would be able to see the sea from my bedroom window. I would also want there to be a farm and swimming pool in front of the house. The house would have five floors, and there would be a big slide on the fifth floor that could take you all the way to the bottom. The interior design would be classical but each room would have a different theme.

Wendy Leung Ka-man, 14, Henrietta Secondary School
<br/>
What would you put in your ultimate Lunar New Year sweet box?

Location, location, location
My dream is to live in a large, independent house surrounded by a large garden filled with flowers and trees. I don’t want to live in an apartment building. Rude neighbours make too much noise in the middle of the night sometimes. My dream home would be outside the city where I can find true peace and happiness. In my opinion, location is most important when choosing your home. I’ve always loved the sound of birds chirping and water flowing. If I woke up to birds singing, I would feel positive and lively.

Carly Yip, 12, Scientia Secondary School
                </p>

                {/* // Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
} */}















                    
            </div> 

            </>
        );
    }
}

export default Home;