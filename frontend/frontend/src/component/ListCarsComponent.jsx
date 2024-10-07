import React, { useEffect, useState } from "react";
import { deleteCar, listCars } from "../Services/UserService";
import { useNavigate } from "react-router-dom";

const ListCarsComponent = () => {
  const [cars, setCars] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    getAllCars();
  }, []);

  function getAllCars() {
    listCars()
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewCar() {
    navigator("/add-car");
  }

  function updateCar(id) {
    navigator(`/edit-car/${id}`);
  }

  function removeCar(id) {
    deleteCar(id)
      .then((response) => {
        getAllCars();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container">
      <h2 className="text-center my-5 text-primary">Available Cars for Rent</h2>
      <div className="text-center mb-4">
        <button className="btn btn-lg btn-success px-4 py-2 shadow" onClick={addNewCar}>
          + Add New Car
        </button>
      </div>
      <div className="row g-4 justify-content-center">
        {cars.map((car) => (
          <div className="col-md-6 col-lg-4 col-xl-3" key={car.id}>
            <div className="card h-100 shadow-sm rounded">
              <div className="car-img-wrapper" style={{ height: "200px", overflow: "hidden" }}>
                <img
                  src={car.imageUrl ? car.imageUrl : "default-image.png"}
                  className="img-fluid w-100 object-fit-cover rounded-top"
                  alt={car.carName}
                  style={{ objectFit: "cover", height: "100%", transition: "transform 0.3s ease" }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title text-primary">{car.carName}</h5>
                <p className="card-text text-muted">{car.description || "No description available"}</p>
                <span className="fw-bold fs-4 text-dark">${car.prix} / day</span>
              </div>
              <div className="card-footer bg-transparent border-0 d-flex justify-content-between">
                <button
                  className="btn btn-outline-primary px-3 py-2 rounded-pill shadow-sm"
                  onClick={() => updateCar(car.id)}
                >
                  <i className="fa fa-pencil me-2"></i> Update
                </button>
                <button
                  className="btn btn-outline-danger px-3 py-2 rounded-pill shadow-sm"
                  onClick={() => removeCar(car.id)}
                >
                  <i className="fa fa-trash me-2"></i> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListCarsComponent;
