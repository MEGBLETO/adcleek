import React, { useState, useEffect } from 'react';
import axios from 'axios';

const City = () => {
  const [citydata, setCitydata] = useState([]);
  const [cityinsee, setcityinsee] = useState('');

  const getCities = async () => {
    const req = await axios.get('http://localhost:5000/api/citydata');
    const res = await req.data;
    setCitydata(res);
  };

  const getInsee = (id) => {
    setcityinsee(id);
  };

  const config = {
    headers: {
      'Access-Control-Allow-Origin' : '*',
    },
  };


  const getWeatherforecast = async() =>{
    const req = await axios.get(`https://candidat.adcleek.it/cities/${cityinsee}/forecast`,config );
    const res = await req.data;

    console.log(res);
  }



  useEffect(()=>{
    if(cityinsee){
       getWeatherforecast(cityinsee)
    }
  
  },[cityinsee])

  useEffect(() => {
    getCities();
  }, []);

  return (
    <div className="min-h-screen flex bg-gray-300 w-1/2">
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
            <tbody
              key={item.id}
              id={item.insee}
              onClick={(e) => getInsee(e.currentTarget.id)}
              className="h-30 cursor-pointer hover:bg-orange-400"
            >
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


      <div className='flex-1'>

      </div>
    </div>
  );
};

export default City;
