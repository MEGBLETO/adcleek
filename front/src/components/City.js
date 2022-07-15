import React, { useState, useEffect } from 'react';
import axios from 'axios';

const City = () => {
  const [citydata, setCitydata] = useState([]);

  const getCities = async () => {
    const req = await axios.get('http://localhost:5000/api/citydata');
    const res = await req.data;
    setCitydata(res);

    console.log(res);
  };

  useEffect(() => {
    getCities();
  }, []);

  return (
    <div className="min-h-screen bg-gray-300">
      {citydata ? (
        <table className="table-auto h-screen w-full ">
          <thead>
            <tr>
              <th>code Insee</th>
              <th>City</th>
              <th>Population</th>
            </tr>
          </thead>
          {citydata.map((item) => (
            <tbody className="h-30">
              <tr className="w-ful p-4 border-2 my-4">
                <td>{item.insee}</td>
                <td>{item.name}</td>
                <td>{item.population}</td>
              </tr>
            </tbody>
          ))}
        </table>
      ) : (
        <>Loading.......</>
      )}
    </div>
  );
};

export default City;
