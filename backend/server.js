const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const enrollmentRoutes = require('./routes/enrollmentRoutes');
const mongoose = require('mongoose');
const staffRoutes = require('./routes/staffRoutes');
const dotenv = require("dotenv");
const enrollDbUrl = process.env.ENROLL_DB_URL;
const staffDbUrl = process.env.STAFF_DB_URL;
dotenv.config();
const port = 3000;


//middleware
app.use(express.json()); 
app.use(bodyParser.json());
app.use(cors());


app.use('/enrollment', enrollmentRoutes);

app.use('/staff', staffRoutes);   



const enrollConnection = mongoose.createConnection(process.env.ENROLL_DB_URL, {    //create a connection eroll database specified by  enviroment varaiable
});

enrollConnection.on('connected', () => {
  console.log('Connected to enroll MongoDB');//log a mmessage
});

enrollConnection.on('error', (error) => {
  console.error('Error connecting to enroll MongoDB:', error);
});

const staffDirectoryConnection = mongoose.createConnection(process.env.STAFF_DB_URL, {               //creatwe a connection satff databse specifies by enviroment variable           
  
});

staffDirectoryConnection.on('connected', () => {   // listen to connect mongodb
  console.log('Connected to staffDirectory MongoDB');
});

staffDirectoryConnection.on('error', (error) => {  //// if any gets error its show log error 
  console.error('Error connecting to staffDirectory MongoDB:', error);
});




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});