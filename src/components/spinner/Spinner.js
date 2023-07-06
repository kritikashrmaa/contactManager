import React from 'react'
import img from '../../assets/images/spinner.webp';

const Spinner = () => {
  return (
    <div>
        <img src={img} alt="loading" style={{width : "300px",height:"200px",opacity:"0.2",margin:"auto"}}/>
      
    </div>
  )
}

export default Spinner
