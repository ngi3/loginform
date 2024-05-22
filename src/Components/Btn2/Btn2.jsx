import React from 'react'

export const Btn2 = ({text, backgroundColor}) => {
  const style= {
    button : {
      padding: "3px 20px",
      marginLeft : "25px",
      backgroundColor : backgroundColor,
    }
  }

  return (
    <div>
      <button className='text-white rounded-md'  
      style={style.button
        }>{text}</button>
    </div>
  )
};export default Btn2;

