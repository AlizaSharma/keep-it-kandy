import React from 'react';
import cakebites from '../assets/Cakebites.png';
import chocolateballs from '../assets/Chocoalteballs.png';
import donuts from '../assets/donuts.png';
import gummies from '../assets/gummies.png';
import gummystrips from '../assets/Gummystrips.png';
import mnms from '../assets/Mnms.png';

function Shop() {
    return (
        <>
        <section class="section">
        <div class="container">
            <div class="columns is-multiline">
                <div class="column is-one-third">
                    <div class="card product-card">
                        <div class="card-image">
                                <img src={cakebites} alt="Cakebites"/>
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
                                <img src={mnms} alt="Chocolate drops"/>
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
                                <img src={donuts} alt="Mini donuts"/>
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
                                <img src={gummies} alt="gummy bears"/>
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
                                <img src={chocolateballs} alt="Chocolate balls"/>
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
                                <img src={gummystrips} alt="Gummy strips"/>
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
       
        </>
    );
}
export default Shop;