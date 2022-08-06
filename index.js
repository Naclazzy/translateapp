const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')

require('dotenv').config()

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.json('Backend')
})

app.get('/languages', (req, res) => {
    const options = {
        method: "GET",
        url: "https://google-translate20.p.rapidapi.com/languages",
        headers: {
          "X-RapidAPI-Key": process.env.X_RapidAPI_Key,
          "X-RapidAPI-Host": "google-translate20.p.rapidapi.com",
        },
      };
  
      axios
        .request(options)
        .then(function (response) {
          res.json(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
})


app.listen(8000, () => console.log('Backend is running on port '))