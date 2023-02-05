// Import required modules
const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

// Initialize app and other process
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

// Connect Database
mongoose.set('strictQuery', true);
mongoose.connect(process.env.URL, {
    dbName: "cb_recruitment"
})
.then(() => console.log("connection established!"))
.catch((error) => console.log(error));

// Create mail transport
const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.PWD_USER,
    },
  });

// Create form schema
const formSchema = new mongoose.Schema({
    name: String,
    dob: Date,
    email: String,
    mobile: String,
    whatsapp: String,
    branch: String,
    reg: String,
    year: String,
    domain: String,
    reason: String
});
// Create form model
const DataModel = mongoose.model("Data", formSchema);

// Create home route
app.get("/", (req, res) => {
    res.send("Server is running successfully!!");
});

// Create /data route to get all the data
app.get("/data", async (req, res) => {
    const allData = await DataModel.find();
    return res.json(allData);
});

// Create /submit route to submit all the data
app.post("/submit", async (req, res) => {
    // Create and save new data
    try {
        const newData  = new DataModel(req.body);
        newData.save();
    
        const emailData = {
            from: process.env.EMAIL_FROM,
            to: req.body.email,
            subject: `Coding Blocks LPU | Registration Successful`,
            html: `
              <p>Congratulation ${req.body.name} !!</p>
              <p>Registration Successful</p>
              <p>Kindly Wait For Interview</p>
              <hr />
              <p>This email may contain sensitive information</p>
              <p>https://codingblockslpu.com</p>
          `,
        };
        transporter.sendMail(emailData).then((sent) => {
            console.log("Email Sent Successfully");    
        });
        res.json({ message: "Data saved successfully!!" });
    } catch (err) {
        console.log(err);
        res.status(404).json("Error!!");
    }
});

// Host the app
app.listen(3000, () => {
  console.log("Server started successfully");
});
