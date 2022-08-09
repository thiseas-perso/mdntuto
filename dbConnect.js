const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('connected to DB');
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
