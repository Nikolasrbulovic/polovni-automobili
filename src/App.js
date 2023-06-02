import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import "./App.css";
import ShowCars from "./components/ShowCars";
import CarsContext from "./storage/CarsContext";
import { useContext, useEffect } from "react";
import { getCars } from "./service/carService";
import AddCar from "./components/AddCar";
import SignIn from "./register/SignIn";
import SignUp from "./register/SignUp";
import UserContext from "./storage/UserContext";
import ShowCar from "./components/ShowCar";
function App() {
  const carContext = useContext(CarsContext);
  const { isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    getCars().then((data) => carContext.updateCar(data));
  }, []);

  return (
    <Routes>
      <Route
        index
        path="/cars"
        element={
          isLoggedIn ? (
            <ShowCars cars={CarsContext} />
          ) : (
            <Navigate to="/signin" />
          )
        }
      ></Route>
      <Route
        path="/add"
        element={isLoggedIn ? <AddCar /> : <Navigate to="/signin" />}
      ></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/edit/:id" element={<AddCar />}></Route>
      <Route path="/cars/:id" element={<ShowCar />}></Route>
    </Routes>
  );
}

export default App;
