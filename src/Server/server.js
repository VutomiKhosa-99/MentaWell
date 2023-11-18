const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const userRoutes = require ('./routes/user_routes')
// const { sendResetOTP, resetPassword } = require('./controllers/User/user.controllers')



//Environment file
require('dotenv').config();

//assigning the variable app to express
const app = express();


//all domains are allowed (* is a wildcard)
var corsOptions = {
  origin: "*"
};

const db = require("./models");
db.sequelize.sync()
  .then(() => {
    console.log("Connected to the MentaWell Server!");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  })

app.use(cors(corsOptions));

//Middlewares
// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


//User AUTH routes for the user API
app.use('/api/users', userRoutes)

/// update user API
// app.use('/api/updateuser', updateuser )



// Endpoint to send OTP
// app.post('/', sendResetOTP);

// Endpoint to reset password
// app.post('/', resetPassword);

//routes for the user API
app.use('/api/users', userRoutes)


// set port, listen for requests
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Server is connected on port ${PORT}.`);
});

//simple route
app.get("/", (req, res) => {
  res.json({ message: "MentaWell" });
});
