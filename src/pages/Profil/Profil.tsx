import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {} from 'react-bootstrap'
import {BsBookHalf,} from 'react-icons/bs'
import { AiOutlineFieldNumber } from "react-icons/ai";
import './Profil.css'

import couv from '../assets/couv.jpg'
import profil from '../assets/profilav.png'

function Couverture(){
    return ( <header className="relative pt-20 w-96 h-80">
        <div className="absolute bg-blue-600" >
                <img src={couv} alt="photos de couverture" />
        </div>
        <div className="absolute z-auto mx-32 my-48 w-28 h-28">
                <img src={profil} alt="photos de profil" className="w-full h-full rounded-full "  />
        </div>

        </header>
    )
}
function Identite(){
    return(
        <div className="my-16 w-96 h-80">
            <h2 className="text-3xl font-medium leading-normal text-center text-gray-600"> ANDRIANAHARY </h2>
            <h1 className="text-2xl font-medium leading-5 text-center text-gray-600"> Ny Sandratra Arisoa </h1>
            <div className="inline-flex my-4">
                    <BsBookHalf className="w-10 h-10 mx-2 mr-6"/>
                    <span className="text-lg font-medium leading-normal text-gray-500">  ~  Informatique de Gestion, Génie Logicielle et Intelligence Artificielle</span>
            </div>
            <div className="inline-flex my-2">
                    <AiOutlineFieldNumber className="w-10 h-10 mx-2 mr-6"/>
                    <span className="text-xl font-medium leading-snug text-gray-500">  ~  35</span>
            </div>
            <p></p>
            <p></p>
            <p></p>

        </div>
    )
}
function Container(){
    return(
        <div className="h-96 rounded-2xl">
            <Couverture></Couverture>
            <Identite></Identite>
        </div>
    )

    
}
function Profil() {
    return (
        <div className="">
            <Container></Container>
        </div>
    )
}

export default Profil
