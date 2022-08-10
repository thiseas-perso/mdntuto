const dotenv = require('dotenv');

const connectDB = require('./dbConnect');

dotenv.config({ path: './config.env' });

const app = require('./app');

//connect to DB
connectDB();

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}!!`);
});
