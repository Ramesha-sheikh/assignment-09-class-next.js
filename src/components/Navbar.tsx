"use client";
import { Roboto } from 'next/font/google'; 
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link'


const roboto = Roboto({
  subsets: ['latin'], 
  weight: '700',     
});
const robotoLatin = Roboto({
  subsets: ['latin'], 
  weight: '500',     
});

export default function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return ( 
    <>
      <header className="bg-sky-800 flex justify-between items-center px-10 md:px-10 gap-3 fixed top-0 left-0 w-full z-50" style={{ height: '80px' }}>
        {/* Logo on the Left */}
        <div className="flex-shrink-0 " style={{ marginTop: '80px'  }}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={90}
            height={90}
            className="relative z-20"
          />
        </div>

        {/* Centered Text */}
        <div className="text-center flex-1 md:flex-none">
          <h2 className="text-blue-200 font-sans font-bold md:text-2xl">
            {/* Change the text based on the screen size */}
            <span className={`${roboto.className} hidden md:block text-2xl`}>Tuition Free Education Program on Latest Technologies</span>
            <span className={`${roboto.className} block md:hidden`}>Tuition Free Program</span>
          </h2>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="relative flex items-center md:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className={` ${robotoLatin.className} hidden md:flex gap-2 text-white`}>
          <ul className="flex gap-4 items-center">
            <li >
              <Link href='/' className="py-2 px-4 flex items-center justify-center min-h-[40px]">Home</Link> </li>
            <li > <Link href='/apply' className="py-2 px-4 flex items-center justify-center min-h-[40px]">Apply</Link></li>
            <li  ><Link href='/job' className="py-2 px-4 flex items-center justify-center min-h-[40px]">Jobs</Link></li>
            <li ><Link href='/result' className="py-2 px-4 flex items-center justify-center min-h-[40px]">Result</Link></li>
            <li className="relative ">
              <button onClick={toggleDropdown} className={` ${robotoLatin.className} flex items-center justify-between w-full py-2 text-white `}>
                Courses
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>




              {isDropdownOpen && (
                <div className="z-10 shadow-2xl absolute transform scale-105 transition-all duration-500 ease-in-out right-0 mt-2 font-normal  bg-white divide-y  divide-gray-100  w-[350] h-auto  px-5 py-3 dark:bg-white-700 dark:divide-white-600 border-t-solid">
                  <ul className="py-2  text-gray-900 ">
                    <h2 className='text-xl font-bold text-gray-900 py-1 ' > Core Courses</h2>
                    <li>
                      <Link href="#" className="block px-2 py-1 font-normal text-gray-900 hover:text-blue-800">Programming Fundamentals</Link>
                    </li>
                    <li>
                      <Link href="#" className="block px-2 py-1 text-gray-900 hover:text-blue-800">Web2 Using NextJS</Link>
                    </li>
                    <li>
                      <Link href="#" className="block px-2 py-1  text-gray-900 hover:text-blue-800">Earn as You Learn</Link>
                    </li>
                  </ul>
                  <hr className='bg-gray-400'/>
                  <div className="py-2 border-t-4 text-gray-900 h-auto font-normal whitespace-nowrap">

                    <h2 className='text-xl font-bold text-gray-900 py-1 ' >Advanced Courses</h2>
                    
                    <Link href="#" className="block px-2 py-1  text-gray-900 hover:text-blue-800">Web 3 and Metaverse</Link>

                    <Link href="#" className="block px-2 py-1  text-gray-900 hover:text-blue-800">Cloud-Native Computing</Link> 

                    <Link href="#" className="block px-2 py-1  text-gray-900 hover:text-blue-800">Artificial intelligence(AI) and Deep Learning</Link>
                    
                     <Link href="#" className="block px-2 py-1  text-gray-900 hover:text-blue-800">Ambient Computing and loT</Link> 
                     
                     <Link href="#" className="block px-2 py-1  text-gray-900 hover:text-blue-800 ">Genomics and Bioinformatics</Link> 
                     
                     <Link href="#" className="block px-2 py-1  text-gray-900hover:text-blue-800">Network Programmability and Automation</Link>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-sky-800 text-white p-5">
          <ul className="flex flex-col gap-4">
            <li className="py-2 px-4 flex items-center justify-center min-h-[40px]">Home</li>
            <li className="py-2 px-4 flex items-center justify-center min-h-[40px]">Apply</li>
            <li className="py-2 px-4 flex items-center justify-center min-h-[40px]">Jobs</li>
            <li className="py-2 px-4 flex items-center justify-center min-h-[40px]">Result</li>
            <li>
              <button onClick={toggleDropdown} className="flex items-center justify-between w-full py-2 text-white">
                Courses
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="mt-2 bg-white rounded-lg shadow w-full">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
