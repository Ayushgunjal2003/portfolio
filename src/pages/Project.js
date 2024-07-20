import React from 'react'
import Img1 from "../assets/rocket 1.png"
import Img2 from "../assets/trend 1.png"
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

import "./styles.css"


function Project(props) {
  let data = props.data;
  return (
    <div className='flex flex-col justify-center items-center h-screen gap-4'>
      {/* card1 */}
      <div className='w-[1000px] h-[260px] bg-black border-2 rounded-lg m-4 border-white flex flex-row gap-4 transform transition-transform duration-300 hover:scale-105'>
        <div className=' flex flex-col gap-2'>
          <div className='mt-6 ml-6'>
            <h1 className='text-white text-3xl'>{data[0].title}</h1>
            <a href={data[0].link} className='text-blue-600'>{data[0].link}</a>
          </div>
          <div>
            <p className='text-white mt-6 ml-6'>{data[0].desc1}</p>
            <p className='text-white mt-6 ml-6'>{data[0].desc2}</p>
            <div className='flex items-center gap-1'>
            <FaExternalLinkSquareAlt className='text-white mt-6 ml-6'/>
            <Link to="/projectvideos"><p className='text-white mt-6 ml-6'>Watch Video</p></Link>
            </div>
          </div>
        </div>
        <div>
          <img src={Img1} width={150} height={150} className='ml-5 mt-8' alt="Rocket" />
        </div>
      </div>
      {/* card2 */}
      <div className='w-[1000px] h-[260px] bg-black border-2 rounded-lg m-4 border-white flex flex-row gap-4 transform transition-transform duration-300 hover:scale-105'>
        <div className=' flex flex-col gap-2'>
          <div className='mt-6 ml-6'>
            <h1 className='text-white text-3xl'>{data[1].title}</h1>
            <a href={data[1].link} className='text-blue-600'>{data[1].link}</a>
          </div>
          <div>
            <p className='text-white mt-6 ml-6'>{data[1].desc1}</p>
            <p className='text-white mt-6 ml-6'>{data[1].desc2}</p>
            <div className='flex items-center gap-1'>
            <FaExternalLinkSquareAlt className='text-white mt-6 ml-6'/>
            <Link to="/projectvideos"><p className='text-white mt-6 ml-6'>Watch Video</p></Link>
            </div>
            
          </div>
        </div>
        <div>
          <img src={Img2} width={180} height={180} className='ml-5 mt-8' alt="Trend" />
        </div>
      </div>
      
    </div>
  )
}

export default Project