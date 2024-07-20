import React from 'react'
import { Link } from 'react-router-dom'


function Navbar(props) {
    let IsLoggedIn = props.IsLoggedIn;
    
    return (
        <div className='flex flex-row justify-evenly items-center'>

            <nav >
                <ul className='flex flex-row gap-6'>
                    <li className='text-white text-lg mt-8'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='text-white text-lg mt-8'>
                        <Link to="/about">About</Link>
                    </li>
                    <li className='text-white text-lg mt-8'>
                        <Link to="/project">Project</Link>
                    </li >
                    <li className='text-white text-lg mt-8'>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>

            </nav>

            <div className='flex flex-row gap-6 mt-8'>
                {   !IsLoggedIn &&
                    <Link to='/login' className='text-white align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none'>
                    <button>Login</button>
                    </Link>
                }
                {   !IsLoggedIn &&
                    <Link to='/signup'  className='text-white align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none'>
                    <button>Sign in</button>
                    </Link>
                }
                {   IsLoggedIn &&
                    <Link className='text-white'>
                    <button>Log out</button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Navbar
