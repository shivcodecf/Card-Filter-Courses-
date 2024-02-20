import React, { useState } from 'react';

import Card from './Card';
// import {apiUrl} from'../data';

function Cards(props) {
  
  let Courses= props.courses;
  let category= props.category;
  
  function getCourses() {
    if(category==="All"){
    let allCourses = [];
    Object.values(Courses).forEach((array) => {
    
      array.forEach((courseData) => {
        allCourses.push(courseData);
      });
    });
    return allCourses;
  }
  else {
    return Courses[category];
  }
  
 
}

  return (
      <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {getCourses().map((course) => (
        <Card key={course.id} course={course} />
       ))}
      </div>
    
  );
}



export default Cards;
