import React from 'react'

import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>


<nav className="bg-gray-800 text-white">
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center gap-3">
             
             <Link to={'/'}>
             <i className="fa-sharp fa-solid fa-comment-sms text-yellow-300"/>  Contact 
             <span className='text-yellow-300'>List</span>
              </Link>
      </div>
      <div>

             <Link to={'/charts'}>
             <i className="fa-solid fa-chart-simple text-yellow-300"/>  Charts
              </Link>

      </div>
    </div>
  </div>
</nav>





   
      
    </>
  )
}

export default NavBar
