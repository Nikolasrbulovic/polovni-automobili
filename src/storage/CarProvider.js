import { useState } from "react";
import CarsContext from "./CarsContext";
import { addCar } from "../service/carService";

const CarProvider = ({ children }) => {
  const [carState, setCarState] = useState([]);

  const postNewCar = (car) => {
    addCar(car).then(({ data }) =>
      setCarState((prevState) => [...prevState, data])
    );
  };

  const carContext = {
    cars: carState,
    updateCar: setCarState,
    addCar: postNewCar,
  };
  return (
    <CarsContext.Provider value={carContext}>{children}</CarsContext.Provider>
  );
};

export default CarProvider;
