import { API } from "../shared/api";

export const getCars = () => {
  return API.get("/cars");
};

export const addCar = (
  brand,
  model,
  year,
  maxSpeed,
  numberOfDoors,
  isAutomatic,
  engine
) => {
  return API.post("/cars", {
    brand,
    model,
    year,
    maxSpeed,
    numberOfDoors,
    isAutomatic,
    engine,
  });
};

export const registerUser = (username, email, password) => {
  return API.post("/users", {
    realm: "PolovniAutomobili",
    username,
    email,
    password,
    emailVerified: true,
  });
};

export const logIn = (email, password) => {
  return API.post("/users/login", {
    email,
    password,
  });
};

export const createAcessToken = (id) => {
  return API.post(`/users/${id}/accessTokens`);
};

export const editCar = (
  id,
  brand,
  model,
  year,
  maxSpeed,
  numberOfDoors,
  isAutomatic,
  engine
) => {
  return API.patch(`/cars/${id}`, {
    brand,
    model,
    year,
    maxSpeed,
    numberOfDoors,
    isAutomatic,
    engine,
  });
};

export const deleteCar = (id) => {
  return API.delete(`cars/${id}`);
};

export const showCar = (id) => {
  return API.get(`/cars/${id}`);
};
