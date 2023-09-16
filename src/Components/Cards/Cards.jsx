/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "./Cards.css" ;



const Cards = ({selectedCourse , remaining, totalcredit}) => {
    
  
    return (
      <div>

      <h4>Credit Hour Remaining : {remaining} hr </h4>
        <hr />
        <h2>Course Name </h2>
        
        {selectedCourse.map((Course) => (
        <li key={Course.id}>{Course.course_name}</li>
      ))}
            <hr />
          <h3>Total Credit Hour : {totalcredit}</h3>
      </div>
    );
  };

export default Cards;