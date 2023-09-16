/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "./Cards.css" ;



const Cards = ({selectedCourse , remaining, totalcredit}) => {
    
  
    return (
      <div>

      <h5>Credit Hour Remaining  : {remaining}  hr </h5>
        <hr />
        <h3>Course Name </h3>
        
        {selectedCourse.map((Course) => (
        <li key={Course.id}>{Course.course_name}</li>
      ))}
            <hr />
          <h5>Total Credit Hour : {totalcredit}</h5>
      </div>
    );
  };

export default Cards;