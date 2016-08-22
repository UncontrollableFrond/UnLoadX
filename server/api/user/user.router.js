import express from 'express';
import userController from './user.controller';

const userRouter = express.Router();

userRouter.post('/', userController.createUser);
userRouter.get('/:id', userController.getUser);


export default userRouter;
