import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { showCar } from "../service/carService";

const ShowCar = () =>{
    const {id} =useParams();
    const [car, setCar]= useState({})
    useEffect(()=>{
        showCar(id).then(({data})=> setCar(data))
    },[])
    return (
      <div>
        <h1>Car Brand : {car?.brand}</h1>
        <p>Car model: {car?.model} </p>
        <p>Car year: {car?.year} </p>
        <p>Car max Speed: {car?.maxSpeed} </p>
        <p>Car number Of Doors: {car?.numberOfDoors} </p>
        <p>Car isAutomatic: {car?.isAutomatic} </p>
        <p>Car engine: {car?.engine} </p>
      </div>
    )
}
export default ShowCar

