import React from 'react';
import 'bulma/css/bulma.min.css';
import '../App.css';

const Section = () => {
    return (
        
        <div className="card has-text-centered">
        <div className="card-content">
          <p className="title">
            “Mouth-watering, flavorful, delicious. Keep it Kandy has the best candy on the block!”
          </p>
          <p className="subtitle">
            Candy Enthusiast 
          </p>
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            <span>
              Share on <a href="#">Twitter</a>
            </span>
          </p>
          <p className="card-footer-item">
            <span>
              Share on <a href="#">Facebook</a>
            </span>
          </p>
        </footer>
      </div>

    );
  };
  
  export default Section;