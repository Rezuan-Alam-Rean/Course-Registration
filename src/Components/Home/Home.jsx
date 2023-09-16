/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import "./Home.css" ;
import Cards from '../Cards/Cards';



const Home = () => {


    
    const [allCourse, setallCourse] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);


    useEffect(() => {
        fetch("./data.json")
          .then((res) => res.json())
          .then((data) => setallCourse(data));
      }, []);

   

    const handleSelectCourse = (Course) => {
        const isExist = selectedCourse.find((item) => item.id == Course.id);
    
        
    
        if (isExist) {
          return alert("already add this course");
        } else {
            setSelectedCourse([...selectedCourse, Course]);
         
          }
        };
         



    return (
        <div className="container">
      <div className="home-container">
        <div className="card-container">
          
           {
            allCourse.map(Course => ( 
            <div key={Course.id} className="card">
            <div className="card-img">
              <img className="photo" src={Course.course_image} alt=""  />
              
            </div>
            <h3>{Course.course_name}</h3>
            <small> {Course.course_details}</small>
           
            <div className="info">
              <p> $ Price :  {Course.price} </p>
              <p>Credit : {Course.credit} </p>
            </div>
            <button
              onClick={() => handleSelectCourse(Course)}
              className="card-btn"
            >
              Select
            </button>
          </div>))
           }
          
        </div>
        <div className="cart">
       
          <Cards
              selectedCourse={selectedCourse}
             
          ></Cards>
        </div>
      </div>
    </div>
    );
};

export default Home;