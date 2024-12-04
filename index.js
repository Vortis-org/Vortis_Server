const express = require('express');
const bodyParser = require('body-parser');
const createMarketController = require('./controller');
const cors = require('cors');



const app = express();
app.use(bodyParser.json());
app.use(cors());    



app.post('/createMarket', createMarketController);





app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})