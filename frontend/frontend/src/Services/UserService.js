import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:1996/api/cars';

export const listCars = () => axios.get(REST_API_BASE_URL);

export const getCar = (carid) => axios.get(REST_API_BASE_URL + '/' + carid);

export const deleteCar = (carid) => axios.delete(REST_API_BASE_URL + '/' + carid);

export const createCars = (car) => axios.post(REST_API_BASE_URL, car);

export const updateCar = (carid, car) => axios.put(`${REST_API_BASE_URL}/${carid}`, car);
