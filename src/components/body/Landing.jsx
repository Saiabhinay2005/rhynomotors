import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
          <div className='nav h-[100vh] navbar md:h-[60h] w-full bg-cover bg-center bg-no-repeat '
      style={{ backgroundImage: `url(./src/components/belongings/main.png)` }}>
      <div className="content flex flex-col justify-between h-full">

        <div className="title flex justify-between md:p-10">
          <div>
          <span className='text-4xl text-yellow-300 font-bold'>Ryhno</span>
          <span className='text-4xl text-gray-800 font-bold'> Motors</span>

          </div>

          <div className="icons ">
          <Link to="/about" className='h-[48px] w-[56px] material-symbols-outlined text-xl text-gray-800 bg-yellow-300 m-2
           rounded-full  p-2' >About Us</Link>
            <Link to="/contact" className='h-[48px] w-[56px] material-symbols-outlined text-xl bg-yellow-300 m-2 rounded-full 
             p-2 text-gray-800' >Contact Us</Link>
          </div>

        </div>


      </div>
    </div >
 
    </div>
  )
}

export default Landing
