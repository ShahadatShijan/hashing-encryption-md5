const  mongoose = require("mongoose");
const config = require("./user.config");
const dbURL = config.db.url;

try {
    mongoose.connect(dbURL);
    console.log("database is connected!");
} catch (error) {
    console.log("database is not conected!");
    console.log(error.message);
    process.exit(1);
}