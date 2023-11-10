import React from 'react';
import 'bulma/css/bulma.min.css';
import '../App.css';

const Section = () => {
    return (
        
        <div class="card has-text-centered">
        <div class="card-content">
          <p class="title">
            “Mouth-watering, flavorful, delicious. Keep it Kandy has the best candy on the block!”
          </p>
          <p class="subtitle">
            Candy Enthusiast 
          </p>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            <span>
              Share on <a href="#">Twitter</a>
            </span>
          </p>
          <p class="card-footer-item">
            <span>
              Share on <a href="#">Facebook</a>
            </span>
          </p>
        </footer>
      </div>

    );
  };
  
  export default Section;