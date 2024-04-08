import React from 'react'
import { Link } from "react-router-dom";
import Navpr from './Navpr';

const Home = () => {
  return (
    <>
    <Navpr/>
    <div className='text-3xl m-96'>

      Yoi home page here

      <Link to="./Register"> <button className='bg-sky-300 p-2 px-5 text-2xl box-decoration-slice rounded-xl'>reg button
        </button> </Link>
      <Link to="./Login"> <button className='bg-sky-300 p-2 px-5 text-2xl box-decoration-slice mx-4 rounded-xl'>Login button
        </button> </Link>
    </div>
    </>
  )
}

export default Home
