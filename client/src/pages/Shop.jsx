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
                                <img src="client\public\assets\Cakebites.png" alt="Cakebites"/>
                        </div>
                        <div class="card-content has-text-centered">
                            <p class="title is-4 has-text-centered">Cake Bites</p>
                            <p>Crispy sugar cookie bites, dipped in white chocolate</p>
                            <p class="subtitle is-4 has-text-centered ">$4.99</p>
                            <button class="button is-link">Add to Cart</button>
                        </div>
                    </div>
                </div> 
        
                <div class="column is-one-third">
                    <div class="card product-card">
                        <div class="card-image">
                                <img src="client\public\assets\Mnms.png" alt="Chocolate drops"/>
                        </div>
                        <div class="card-content has-text-centered">
                            <p class="title is-4 has-text-centered">Coated Drops</p>
                            <p>Tiny drops of creamy milk chocolate .</p>
                            <p class="subtitle is-4 has-text-centered ">$3.99</p>
                            <button class="button is-link">Add to Cart</button>
                        </div>
                    </div>
                </div>
                
                <div class="column is-one-third">
                    <div class="card product-card">
                        <div class="card-image">
                                <img src="client\public\assets\donuts.png" alt="Mini donuts"/>
                        </div>
                        <div class="card-content  has-text-centered">
                            <p class="title is-4 has-text-centered">Mini Donuts</p>
                            <p>Cereal bites dressed in pink chocolate and  sprinkles.</p>
                            <p class="subtitle is-4 has-text-centered ">$5.99</p>
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