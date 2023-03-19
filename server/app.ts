import express from 'express';
import morgan from 'morgan';
import { errorMiddleware } from './middlewares/errorMiddleware.js';
import { hsnCodeRouter } from './routes/hsnRoutes.js';
import { companyRouter } from './routes/companyRoutes.js';
import { medicineRouter } from './routes/medicineRoutes.js';
import { NotFoundError } from './errors/NotFoundError.js';
import { vendorRouter } from './routes/vendorRoutes.js';
import cors from 'cors'

// use it before all route definitions


export const app = express();
app.use(cors({origin: "*"}));


app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(morgan('dev'));


//HSN Code Routes
app.use('/api',hsnCodeRouter);

// Company Routes
app.use('/api', companyRouter);

// Medicine
app.use('/api', medicineRouter);

// Vendor
app.use('/api', vendorRouter);


app.all('*', (_, __, next) => {
  next(new NotFoundError("This Endpoint doesn't exist", 404));
});

app.use(errorMiddleware);
