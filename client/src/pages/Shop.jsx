import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function Shop() {
    return (
        <>
        < Navbar />
        < Header />
        <section class="section">
        <div class="container">
            <div class="columns is-multiline">
                <div class="column is-one-third">
                    <div class="card product-card">
                        <div class="card-image">
                                <img src="./public/assets/Cakebites.png" alt="Cakebites"/>
                        </div>
                        <div class="card-content has-text-centered">
                            <p class="title is-4 has-text-centered">Cake Bites</p>
                            <p>Crispy sugar cookie bites,dipped in creamy white chocolate</p>
                            <p class="subtitle is-4 has-text-centered ">$4.99</p>
                            <button class="button is-link">Add to Cart</button>
                        </div>
                    </div>
                </div> 
        
                <div class="column is-one-third">
                    <div class="card product-card">
                        <div class="card-image">
                                <img src="./public/assets/Mnms.png" alt="Chocolate drops"/>
                        </div>
                        <div class="card-content has-text-centered">
                            <p class="title is-4 has-text-centered">Coated Drops</p>
                            <p>Mouth-watering drops of creamy milk chocolate goodness</p>
                            <p class="subtitle is-4 has-text-centered ">$3.99</p>
                            <button class="button is-link">Add to Cart</button>
                        </div>
                    </div>
                </div>
                
                <div class="column is-one-third">
                    <div class="card product-card">
                        <div class="card-image">
                                <img src="./public/assets/donuts.png" alt="Mini donuts"/>
                        </div>
                        <div class="card-content  has-text-centered">
                            <p class="title is-4 has-text-centered">Mini Donuts</p>
                            <p>Cereal bites dressed in pink chocolate and sprinkles</p>
                            <p class="subtitle is-4 has-text-centered ">$5.99</p>
                            <button class="button is-link">Add to Cart</button>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        </section>

        <section class="section">
        <div class="container">
            <div class="columns is-multiline">
                <div class="column is-one-third">
                    <div class="card product-card">
                        <div class="card-image">
                            <br/>
                                <img src="./public/assets/gummies.png" alt="gummy bears"/>
                        </div>
                        <div class="card-content has-text-centered">
                            <p class="title is-4 has-text-centered">Gummy Bears</p>
                            <p>Bear shaped gummy candies, delicious fruit flavored bites</p>
                            <p class="subtitle is-4 has-text-centered ">$3.99</p>
                            <button class="button is-link">Add to Cart</button>
                        </div>
                    </div>
                </div> 
        
                <div class="column is-one-third">
                    <div class="card product-card">
                        <div class="card-image">
                                <img src="./public/assets/Chocoalteballs.png" alt="Chocolate balls"/>
                        </div>
                        <div class="card-content has-text-centered">
                            <p class="title is-4 has-text-centered">Chocolate</p>
                            <p>Milk chocolate covered chocolate balls, perfect for your sweet-tooth</p>
                            <p class="subtitle is-4 has-text-centered ">$2.99</p>
                            <button class="button is-link">Add to Cart</button>
                        </div>
                    </div>
                </div>
                
                <div class="column is-one-third">
                    <div class="card product-card">
                        <div class="card-image">
                                <img src="./public/assets/Gummystrips.png" alt="Gummy strips"/>
                        </div>
                        <div class="card-content has-text-centered">
                            <p class="title is-4 has-text-centered">Sour Gummy Strips</p>
                            <p>Sour gummy strips, fruit flavored mouth-watering goodness</p>
                            <p class="subtitle is-4 has-text-centered ">$3.99</p>
                            <button class="button is-link">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
       
< Footer />
        </>
    );
}
export default Shop;