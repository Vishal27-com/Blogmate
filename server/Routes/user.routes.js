const express=require("express");
const { createUser, getUser, updateUser, deleteUser, getAllUsers } = require("../Controller/user.controller");
const userRouter=express.Router();

// to create a new user.
userRouter.post('/',createUser)
// to retrieve a user by id.
userRouter.get('/:id',getUser)
// to retrieve all users.
userRouter.get('/',getAllUsers)
// to update a user's name or bio by id.
userRouter.put('/:id',updateUser)
// to delete a user by id.
userRouter.delete('/:id',deleteUser)
module.exports=userRouter