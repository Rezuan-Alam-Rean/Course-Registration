/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "./Cards.css" ;



const Cards = ({selectedCourse}) => {
    
  
    return (
      <div>
        <h3>Course Name </h3>
        
        {selectedCourse.map((Course) => (
        <li key={Course.id}>{Course.course_name}</li>
      ))}

      </div>
    );
  };

export default Cards;