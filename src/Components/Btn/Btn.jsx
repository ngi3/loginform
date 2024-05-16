import React from 'react';
// import './Btn.css';


export const Btn = ({text, taille}) => {
  return (
    <div>
        <button className='bg-orange-400 text-white px-4 py-2 rounded-full' style={{width:taille}}> {text} </button>
        
    </div>
  )
}

export default Btn;