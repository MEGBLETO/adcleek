const router = require('express').Router();
const db = require('../database');

router.get('/citydata', async(req, res) => {
  let query = `select * from city`;

  try {
    db.all(query).then((rows) => {
        res.send(rows)
      });
  } catch (error) {
    console.log(error);
  }
});




router.get('/citydata/meteodata/:name', async(req, res) => {

    let city = req.params.name;

    let query = `select details where name=${city} FROM (select  city.insee, forecast.details, city.name from city INNER JOIN forecast ON city.insee=forecast.insee)`;

  
    try {
      db.all(query).then((rows) => {
          res.send(rows)
        });
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router;
