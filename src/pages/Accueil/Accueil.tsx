import React from 'react'
import './Accueil.css'
import {FiSend} from 'react-icons/fi'
import {BsFillImageFill} from 'react-icons/bs'
import sel from '../assets/sel.jpg'
function User(){
    return (
        <div className="flex w-full h-16 my-24 shadow-2xl rounded-3">
            <div className="relative h-full my-2 w-36">
            <div className="relative flex overflow-hidden"> 
                        <img className="relative inline-block w-12 h-12 ml-10 rounded-full " src={sel} alt=""/>
                        <div className="relative w-3 h-3 my-4 bg-green-400 rounded-full -mx-14"></div>
                        
             </div>
            </div>
            <div className="relative w-full h-full my-2 ">
                <span className="text-2xl text-gray-400 text-medium "> Selena Gomez</span>
            </div>
        </div>
    )
}


function MyMessage(){
    return ( 
        <div className="w-48 h-auto mx-10 my-4 shadow-xl rounded-2xl">
            Lorem ipsum dolor sit amet consectetur.
        </div>
    )
}
function OtherMessage(){
    return (
        <div className="w-56 h-auto my-2 bg-gray-400 shadow-xl rounded-2xl mx-96">
           Lorem ipsum dolor sit amet.
        </div>
    )
}
function Send(){
    return(
        <div className="flex ">
        <div className="relative w-full h-10 my-24 ">
            <input type="text" name="" className="relative w-4/5 h-full mx-6 border rounded-full shadow-2xl bg " placeholder="écrire"/>
        </div>
        <BsFillImageFill className="relative w-6 h-6 my-24 -ml-24"></BsFillImageFill>
       <FiSend className="relative w-6 h-6 mx-2 my-24" ></FiSend> 
      
        </div>
    )
}
function Message(){
    return(
        <div className="relative w-full -my-24 b h-96">
             <MyMessage></MyMessage>
             <OtherMessage></OtherMessage>
             <MyMessage></MyMessage>
             <OtherMessage></OtherMessage>
             <MyMessage></MyMessage>
             <OtherMessage></OtherMessage>
        </div>
    )
}
function Container(){
    return (
        <div className="my-20 shadow-2xl accueil">
            <User/>
            <Message/>
            <Send/>

        </div>
    )
}


function Accueil() {
    return (
        <div>
            <Container></Container>
        </div>
    )
}

export default Accueil
