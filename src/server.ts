import express from 'express';
import './config/connectDB'
import cors from 'cors' ;
import stockRoute from "./routes/stockRoute"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  credentials: true,
}));
app.use(express.json());

app.use('/stock', stockRoute);
 

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});