import React from 'react'
import './Message.css'
import {BsArrowRightShort} from 'react-icons/bs'
import {MdAddAPhoto,MdMoreVert} from 'react-icons/md'
import hom from '../assets/hom.png'
import fem from '../assets/fem.jpg'

function Title(){
    return (
        <div className="relative inline-flex w-full shadow-md h-14">
           <span className="absolute pt-3 ml-4 text-2xl font-medium text-center text-gray-800 text-opacity-50"> Discussions </span>
           <MdAddAPhoto className="w-10 h-10 pt-3 ml-48 text-opacity-50"/>
           <MdMoreVert  className="w-10 h-10 pt-3 text-opacity-50 ml-50"/>
        </div>
    )
}
function Amis(){
    return(
            <div className="flex w-full h-full p-2">
            <div className="container">

                <div className="flex justify-center">
                <div className="w-full bg-white rounded-lg shadow-xl">
                    <ul className="divide-y ">

                    <li className="relative flex p-3 space-x-6 cursor-pointer hover:bg-gray-50">
                        
                        <div className="relative flex overflow-hidden"> 
                            <img className="inline-block w-10 h-10 rounded-full " src={hom} alt=""/>
                         </div>
                         <div >
                             <span className="text-lg font-medium"> Cole Sprouse </span>
                             <p className="text-sm font-normal"> "Bonjour !" </p>

                             </div>
                    </li>
                    <li className="relative flex p-3 space-x-6 cursor-pointer hover:bg-gray-50">
                        
                        <div className="relative flex overflow-hidden"> 
                        <img className="relative inline-block w-10 h-10 rounded-full" src={fem} alt=""/>
                        
                         </div>
                         <div >
                             <span className="text-lg font-medium">Selena Gomez</span>
                             <p className="text-sm font-normal"> "Tu viens cet ..." </p>

                             </div>
                    </li>
                    <li className="relative flex p-3 space-x-6 cursor-pointer hover:bg-gray-50">
                        
                        <div className="relative flex overflow-hidden"> 
                        <img className="inline-block w-10 h-10 rounded-full " src={fem} alt=""/>
                         </div>
                         <div >
                             <span className="text-lg font-medium">Ariana Grande </span>
                             <p className="text-sm font-bold"> "Tu as raison meuf!..." </p>

                             </div>
                    </li>
                    <li className="relative flex p-3 space-x-6 cursor-pointer hover:bg-gray-50">
                        
                        <div className="relative flex overflow-hidden"> 
                        <img className="inline-block w-10 h-10 rounded-full " src={hom} alt=""/>
                         </div>
                         <div >
                             <span className="text-lg font-medium">Justin Bieber </span>
                             <p className="text-sm font-bold"> "Alors !" </p>

                             </div>
                    </li>
                    <li className="relative flex p-3 space-x-6 cursor-pointer hover:bg-gray-50">
                        
                        <div className="relative flex overflow-hidden"> 
                        <img className="inline-block w-10 h-10 rounded-full " src={hom} alt=""/>
                         </div>
                         <div >
                             <span className="text-lg font-medium">Incognito</span>
                             <p className="text-sm font-bold"> "Ce soir à 19h" </p>

                             </div>
                    </li>
                    <li className="relative flex p-3 space-x-6 cursor-pointer hover:bg-gray-50">
                        <div className="ml-10 text-lg font-medium text-gray-500">Voir tout </div>
                        <BsArrowRightShort className="w-12 h-10 ml-16 "></BsArrowRightShort>
                         
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
    )
}
function Container(){
    return (
        <div className="h-auto my-20 shadow-2xl fixed-right rounded-2xl w-72 message" >
            <Title></Title>
            < Amis/>

        </div>
    )
}

function Message() {
    return (
        <div  >
           < Container/>
          

        </div>
    )
}

export default Message
