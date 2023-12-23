require('dotenv').config();


const express = require('express')
const app = express();
const cors = require("cors");




//connect db
const connectDB = require('./db/connect')





//imort router
const productRouter = require('./routes/productRoutes');
const paymentRouter = require('./routes/paymentRoute')

//middlewares
app.use(cors());
app.use(express.json());


//routes


app.get('/',(req,res)=>{
    res.send('Server is running')
})

app.use('/api/v1/products',productRouter)
app.use('/api/v1/payment',paymentRouter)



const port = process.env.PORT || 5000;
const start = async () => {
	try {
	  await connectDB(process.env.MONGO_URI)
	  app.listen(port, () =>
		console.log(`Server is listening on port ${port}...`)
	  );
	} catch (error) {
	  console.log(error);
	}
  };
  
  start();
  

