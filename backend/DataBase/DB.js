const mongoose = require('mongoose');
require('dotenv').config('/backend/.env');

const DBconnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error);
    }
}

module.exports = DBconnect;