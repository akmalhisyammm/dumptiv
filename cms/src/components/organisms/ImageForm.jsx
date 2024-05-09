import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Button } from '../atoms';
import { BASE_API_URL } from '../../constants/url';

const ImageForm = ({ id }) => {
  const fileRef = useRef(null);

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', fileRef.current.files[0]);

    try {
      await axios.patch(`${BASE_API_URL}/products/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      navigate('/products');
    } catch (error) {
      console.error(error);

      if (error.response.data.statusCode === 500) {
        localStorage.removeItem('token');
        navigate('/login');
      }
    }
  };

  return (
    <form id="register-form" onSubmit={handleFormSubmit}>
      <h1 className="mb-3 h3 display-1">Update Image</h1>
      <div className="mb-3">
        <div className="mb-3 input-group">
          <input
            type="file"
            ref={fileRef}
            className="pb-2 form-control"
            id="inputGroupFile02"
            autoComplete="off"
            required
          />
        </div>
        <Button type="submit">Update Image</Button>
      </div>
    </form>
  );
};

export default ImageForm;
