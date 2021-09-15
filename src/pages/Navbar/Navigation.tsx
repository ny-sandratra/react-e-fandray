import React from 'react'
import {FaFacebookMessenger} from 'react-icons/fa'
import profil from '../assets/profilav.png'


function Brand(){
    return <h3 className="pt-3 ml-10 text-2xl font-medium text-transparent text-gray-100 "> E-fandray</h3>
}
function Search(){
    return <div>
     <div className="relative w-full pt-2" >
        <div className="flex items-center bg-white rounded-full shadow-xl">
            <input className="max-w-md px-3 text-gray-700 rounded-l-full focus:outline-none" id="search" type="text" placeholder="Search"/>
            <div className="">
            <svg  className="flex items-center w-12 h-12 p-2 rounded-full focus:outline-none " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            
            </div>
            </div>
        </div>
     </div>
  
}
function Message(){
    return (
        <div>
       
        <button  className="block px-6 py-3 overflow-hidden text-xl text-gray-100 border-gray-600 rounded-lg focus:outline-none focus:border-white">
            <div className="flex p-0 space-x-10 ">

                <div className="flex items-center justify-center">
                    <span className="mr-3"> Messenger </span> 
                    <FaFacebookMessenger/>
                </div>
                <div className="relative flex pt-2 mr-0 overflow-hidden"> 
                    <img className="inline-block w-6 h-6 rounded-full ring-2 " src={profil} alt=""/>
                </div>
            </div>    
        </button>

    </div>
    )
}


function Navigation() {
    return (
      <nav className="fixed top-0 w-full p-2 bg-gray-400 ">
          <div className="flex justify-between mx-auto max-x-6xl">
            <Brand></Brand>
            <Search/>
            <div>
                <Message></Message>
            </div>
        </div>
      </nav>
    )
}

export default Navigation
