import React from 'react';
import 'bulma/css/bulma.min.css';
import '../App.css';

const Body = () => {
    return (
        <section class="section">
        <div class="container">
          <div id="slider">
            <div class="card">
              <div class="card-image">
                <figure class="image is-16by9">
                  <img src="./public/assets/image3.jpg" alt="" />
                  <div class="overlay">
                    <a href="/shop" class="button is-info is-light is-large">Shop Now</a>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
  };
  
  export default Body;