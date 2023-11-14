import React from 'react';
import 'bulma/css/bulma.min.css';
import '../App.css';
import image3 from '../assets/image3.jpg';

const Body = () => {
    return (
        <section className="section">
        <div className="container">
          <div id="slider">
            <div className="card">
              <div className="card-image">
                <figure className="image is-16by9">
                  <img src={image3} alt="" />
                  <div className="overlay">
                    <a href="/shop" className="button is-info is-light is-large">Shop Now</a>
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