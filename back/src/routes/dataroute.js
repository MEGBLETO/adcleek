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

module.exports = router;
