import React from 'react'
import  {Link} from 'react-router-dom'


function Nav() {

   

    return (
            <nav className='px-10  py-4  lg: px-4 bg-gray-500 text-xl  grid grid-cols-2   space-around  text-white text-center' >
                 <div>
                 <Link to="/" >Contestants</Link>
                 </div>
                  <div>  <Link   to="/Statistics " >Statistics</Link>
                  </div>
            </nav>
    )
}

export default Nav
