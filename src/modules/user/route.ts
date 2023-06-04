import express from 'express';
import controller from './controller';

const userRouter = express.Router();

userRouter.route('/').get(controller.getUsers).post(controller.createUser);

export default userRouter;
