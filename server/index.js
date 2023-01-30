// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Initialize app and other process
const app = express();
app.use(express.json());
dotenv.config();

// Connect Database
mongoose.set('strictQuery', true);
mongoose.connect(process.env.URL)
.then(() => console.log("connection established!"))
.catch((error) => console.log(error));

// Create form schema
const formSchema = new mongoose.Schema({
    name: String,
    dob: Date,
    email: String,
    mobile: Number,
    whatsapp: Number,
    branch: String,
    reg: Number,
    year: Number,
    domain: Number,
    reason: String,
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
    const newData  = new DataModel(req.body);
    newData.save()
    .then(() => {
        res.json({ message: "Data is uploaded successfully" })
    })
    .catch((err) => {
        console.log(err);
        res.status(404).json("Error!!");
    });
});

// Host the app
app.listen(3000, () => {
  console.log("Server started successfully");
});
