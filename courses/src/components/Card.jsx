
import React from 'react';


const Card  = (props) =>{
    
   let x= props.course;
    
    
    return (
    
         <div className='w-[300px] bg-gray-900 bg-opacity-80 rounded-md overflow-hidden'>
          <div>
          <img src={x.image.url}/>
          </div>
          <div className='p-4'>
          <p className='text-white font-semibold text-lg loading-6'>{x.title}</p>
          
          <p className='mt-2 text-white'>
            {
            (x.description.length >100) ? (x.description.substr(0,100)+ "..."):(x.description)
            
            }
            </p>
          </div>
          
       
       
       
      
      </div>
  
    )
  }
  export default Card;