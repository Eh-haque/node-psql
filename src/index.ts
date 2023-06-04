import express, { Application, Request, Response, NextFunction } from 'express';
import userRouter from './modules/user/route';

const app: Application = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define your routes and middleware here
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
