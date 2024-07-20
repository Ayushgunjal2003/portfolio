import React, { useEffect, useState } from 'react';
import Image from "../assets/profile-pic__6_-removebg-preview.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { LiaHackerrank } from "react-icons/lia";
import { FaYoutube } from "react-icons/fa";
import "./styles.css";

function Home() {
  const [hasRotated, setHasRotated] = useState(false);

  useEffect(() => {
    // Start rotation animation and then trigger bouncing
    setTimeout(() => {
      setHasRotated(true);
    }, 1000); // Delay to make sure the rotation animation is applied first
  }, []);

  const handleDownload = () => {
    // Trigger the download of the PDF
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/resume.pdf`; // Path to your PDF file in the public folder
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <div className='text-white flex flex-row mt-28 mx-auto max-w-4xl p-4 slide-up'>
      <div className='w-1/2 pr-4 flex flex-col gap-2'>
        <h1 className='text-2xl font-bold'>Hello, It's Me</h1>
        <h1 className='text-6xl font-bold'>Ayush Gunjal</h1>
        <div className='mt-4 flex flex-row gap-2'>
          <h1 className='text-3xl font-bold'>And I'm a</h1>
          <h1 className='text-3xl font-bold text-sky-600'>Web Developer</h1>
        </div>
        <p className='mt-4 text-small'>
          As a passionate and driven IT student currently in my 4th year, I'm dedicated to making a meaningful impact in the world of technology.
        </p>
        <div className='mt-4 flex flex-row gap-3'>
          <a href="https://www.linkedin.com/in/ayush-gunjal-65155b283" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='text-sky-600 text-4xl' />
          </a>
          <a href="https://github.com/Ayushgunjal2003" target="_blank" rel="noopener noreferrer">
            <FaGithub className='text-sky-600 text-4xl' />
          </a>
          <a href="https://www.hackerrank.com/ayushgunjal20211" target="_blank" rel="noopener noreferrer">
            <LiaHackerrank className='text-sky-600 text-4xl' />
          </a>
          <a href="https://www.youtube.com/@AyushGunjal-t2t" target="_blank" rel="noopener noreferrer">
            <FaYoutube className='text-sky-600 text-4xl' />
          </a>
        </div>
        <div className='mt-4'>
          <button
            onClick={handleDownload}
            className='bg-sky-600 hover:bg-blue-700 text-white w-48 h-16 rounded-full transition-all duration-300 ease-in-out'
          >
            Download CV
          </button>
        </div>
      </div>
      <div className='w-1/2 pl-4 flex items-center justify-center'>
        <img
          src={Image}
          alt='profile'
          className={`rounded-full w-full max-w-xs md:max-w-sm lg:max-w-md ${hasRotated ? 'bounce' : 'rotate-once'}`}
        />
      </div>
    </div>
  )
}

export default Home;
