import React, { useEffect, useState } from 'react';
import { createCars, getCar, updateCar } from '../Services/UserService';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const CarsComponent = () => {
  const [carName, setCarName] = useState('');
  const [status, setStatusCar] = useState('');
  const [prix, setPrixCar] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [preview, setPreview] = useState('');
  const [fileUploaded, setFileUploaded] = useState(null)


  //cloudinary config

  const CLOUDINARY_NAME = 'dmceraaov'
  const CLOUDINARY_PRESET = 'yassinepreset'
  const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/'

  const uploadImageToCloud = async () => {
    const formImage = new FormData()
    formImage.append('file', fileUploaded)
    formImage.append('upload_preset', CLOUDINARY_PRESET)
    try {
      const res = await axios.post(`https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/upload`, formImage);
      return res.data.url; // Return the URL directly
    } catch (err) {
      console.log('cloudinary err', err);
      return null; // Handle error case by returning null or throwing an error
    }

  }

  const { id } = useParams();
  const [errors, setError] = useState({
    carName: '',
    status: '',
    prix: '',
    image: ''
  });

  const navigator = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;

  useEffect(() => {
    console.log(pathName)
    if (pathName.includes('edit-car')) {
      if (id) {
        getCar(id).then((response) => {
          setCarName(response.data.carName);
          setStatusCar(response.data.status);
          setPrixCar(response.data.prix);
          setPreview(response.data.imageUrl);
          setImageUrl(response.data.imageUrl)
        }).catch(error => {
          console.error(error);
        });
      }
    }
  }, [pathName, id]);

  const saveOrUpdateCar = async (e) => {
    e.preventDefault();
    console.log('Submit Clicked');
    console.log(validateForm)
    if (validateForm()) {
      // const formData = new FormData();
      // formData.append("carName", carName);
      // formData.append("status", status);
      // formData.append("prix", prix);
      //   if (!imageUrl && !preview) {
      //     errorCopy.image = 'Car photo is required';
      //     valid = false;
      //  } else {
      //     errorCopy.photo = '';
      //  }
      // for (let pair of formData.entries()) {
      //   console.log(pair[0] + ', ' + pair[1]);
      // }
      let obj
      if (id && pathName.includes('add-car')) {
        const uploadedImageUrl = await uploadImageToCloud()
        console.log(uploadedImageUrl)
        obj = { carName, status, prix, imageUrl: uploadedImageUrl }
        console.log(obj)
      }else{
        obj = { carName, status, prix, imageUrl }
        console.log('updated' ,obj)
      }
      // Step 2: Ensure the imageUrl has been updated
      // if (!imageUrl) {
      //   console.error("Image URL is not set");
      //   return; // Exit if the image URL is still not available
      // }

      if (id && pathName.includes('edit-car')) {
        updateCar(id, obj).then((response) => {
          console.log(response.data);
          navigator('/cars');
        }).catch(error => {
          console.error(error);
        });
      } else {
        createCars(obj).then((response) => {
          console.log(response.data);
          navigator('/cars');
        }).catch(error => {
          console.error(error);
        });
      }
    }
  }

  function handlePhotoChange(e) {
    const file = e.target.files[0];
    if (file) {
      setFileUploaded(file)
      console.log('image ======>', URL.createObjectURL(file))
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
      console.log("reader", reader)
    }
  }

  function validateForm() {
    let valid = true;
    const errorCopy = { ...errors };

    if (carName.trim()) {
      errorCopy.carName = '';
    } else {
      errorCopy.carName = 'Car Name is required';
      valid = false;
    }

    if (status.trim()) {
      errorCopy.status = '';
    } else {
      errorCopy.status = 'Car status is required';
      valid = false;
    }

    if (prix.toString().trim()) {
      errorCopy.prix = '';
    } else {
      errorCopy.prix = 'Car price is required';
      valid = false;
    }

    // if (!imageUrl) {
    //   errorCopy.image = 'Car photo is required';
    //   valid = false;
    // } else {
    //   errorCopy.photo = '';
    // }

    setError(errorCopy);
    return valid;
  }

  function PageTitle() {
    if (id && pathName.includes('edit-car')) {
      return <h2 className="text-center">Update Car</h2>;
    } else {
      return <h2 className="text-center">Add Car</h2>;
    }
  }

  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {PageTitle()}
          <div className="card-body">
            <form onSubmit={saveOrUpdateCar}>
              <div className="form-group mb-2">
                <label className="form-label">Car Name</label>
                <input
                  type="text"
                  placeholder="Enter Car Name"
                  name="carName"
                  value={carName}
                  className={`form-control ${errors.carName ? 'is-invalid' : ''}`}
                  onChange={(e) => setCarName(e.target.value)}
                />
                {errors.carName && <div className="invalid-feedback"> {errors.carName}</div>}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Status Car</label>
                <input
                  type="text"
                  placeholder="Enter Status Car"
                  name="statusCar"
                  value={status}
                  className={`form-control ${errors.status ? 'is-invalid' : ''}`}
                  onChange={(e) => setStatusCar(e.target.value)}
                />
                {errors.status && <div className="invalid-feedback"> {errors.status}</div>}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Car Prix</label>
                <input
                  type="text"
                  placeholder="Enter Car Prix"
                  name="carPrix"
                  value={prix}
                  className={`form-control ${errors.prix ? 'is-invalid' : ''}`}
                  onChange={(e) => setPrixCar(e.target.value)}
                />
                {errors.prix && <div className="invalid-feedback"> {errors.prix}</div>}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Upload Car Photo</label>
                <input
                  type="file"
                  accept="image/*"
                  className={`form-control ${errors.photo ? 'is-invalid' : ''}`}
                  onChange={handlePhotoChange}
                />
                {errors.photo && <div className="invalid-feedback"> {errors.image}</div>}
              </div>

              {preview && (
                <div className="form-group mb-2">
                  <img
                    src={preview}
                    alt="Car Preview"
                    className="img-thumbnail"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
              )}

              <button className="btn btn-success" type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarsComponent;
