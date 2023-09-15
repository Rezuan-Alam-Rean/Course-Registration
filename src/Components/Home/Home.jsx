import React from 'react';
import "./Home.css" ;
import Cards from '../Cards/Cards';



const Home = () => {



    



    return (
        <div className="container">
      <div className="home-container">
        <div className="card-container">
          
            <div  className="card">
              <div className="card-img">
                <img className="photo" src="https://i.ibb.co/SsRBZ9p/Rectangle-2-2.png" alt=""  />
                
              </div>
              <h2>Introduction to C Programming</h2>
              <p>
                <small>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis, iure?
                </small>
              </p>
              <div className="info">
                <p>Price : $</p>
                <p>Credit :</p>
              </div>
              <button
                
                className="card-btn"
              >
                Select
              </button>
            </div>
          
        </div>
        <div className="cart">
          <Cards></Cards>
        </div>
      </div>
    </div>
    );
};

export default Home;