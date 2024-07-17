const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

// routes
const AuthRoute = require('./routes/AuthRoute.js')
const UserRoute = require('./routes/UserRoute.js')
const PostRoute = require('./routes/PostRoute.js')
const UploadRoute = require('./routes/UploadRoute.js')
const ChatRoute = require('./routes/ChatRoute.js')
const MessageRoute = require('./routes/MessageRoute.js')
const consultantRoutes = require("./routes/consultantRoutes.js");
const AppointmentRoutes = require('./routes/AppointmentRoutes.js')
const CAuthRoutes = require('./routes/CAuthRoutes.js')

const app = express();


// middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// to serve images inside public folder
app.use(express.static('public')); 
app.use('/images', express.static('images'));


dotenv.config();


app.use('/auth', AuthRoute);
app.use('/user', UserRoute)
app.use('/posts', PostRoute)
app.use('/upload', UploadRoute)
app.use('/chat', ChatRoute)
app.use('/message', MessageRoute)


// app.use('/authx', CAuthRoutes );
app.use("/consultant", consultantRoutes);
app.use("/appointment", AppointmentRoutes);



const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));