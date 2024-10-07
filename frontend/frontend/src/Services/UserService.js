import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:1997/api/cars';

const headers = {
    'Content-Type': 'application/json',
  };

export const listCars = () => axios.get(REST_API_BASE_URL , headers);

export const getCar = (carid) => axios.get(REST_API_BASE_URL + '/' + carid ,headers);

export const deleteCar = (carid) => axios.delete(REST_API_BASE_URL + '/' + carid , headers);

export const createCars = (car) => axios.post(REST_API_BASE_URL, car , headers);

export const updateCar = (carid, car) => axios.put(`${REST_API_BASE_URL}/${carid}`, car , headers);
