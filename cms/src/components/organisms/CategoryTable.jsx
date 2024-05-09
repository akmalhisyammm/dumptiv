import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { BASE_API_URL } from '../../constants/url';

const CategoryTable = () => {
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`${BASE_API_URL}/categories`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        setCategories(data.data);
      } catch (error) {
        console.error(error);

        if (error.response.data.statusCode === 500) {
          localStorage.removeItem('token');
          navigate('/login');
        }
      }
    };

    fetchCategories();
  }, [navigate]);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
        </tr>
      </thead>
      <tbody id="table-category">
        {categories.map((category, index) => (
          <tr key={category.id}>
            <td scope="row">#{index + 1}</td>
            <td className="fw-bold">{category.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CategoryTable;
