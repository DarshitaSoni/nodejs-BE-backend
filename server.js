const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
require('dotenv').config();

const port = process.env.PORT || 8080;
const dbUrl = process.env.MONGODB_URL;

const accountTypesRoutes = require("./routes/accountTypes");
const serviceCategoriesRoutes = require("./routes/serviceCategories");
const userRoutes = require("./routes/users");
const zipcodeRoutes = require("./routes/zipcodes");

app.use(logger("dev"));
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
  }).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1/account_types', accountTypesRoutes);
app.use('/api/v1/property_setup/service_categories', serviceCategoriesRoutes);
app.use('/api/v1/list_email_domains', userRoutes);
app.use('/api/v1/property_setup/zipcodes/fetch_city_state', zipcodeRoutes);

app.listen(port, function () {
    console.log("Runnning on " + port);
});
module.exports = app;
