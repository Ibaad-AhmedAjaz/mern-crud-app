//for defining endpoints related to user operations, such as registration, login, and fetching user information. It will use the userController to handle the logic for these operations.
import express from 'express';
import {deleteUser, create, getAllUsers, getUserById, update } from '../controller/userController.js';
import { get } from 'mongoose';

const route = express.Router();

//post method for creating a new user in the database.
route.post("/user", create);
//get method for fetching all the users from the database.
route.get("/users", getAllUsers);
//get method for fetching a user by id from the database.
route.get("/user/:id", getUserById);
//put method for updating a user by id in the database.
route.put("/update/user/:id", update);
//delete method for deleting a user by id from the database.
route.delete("/delete/user/:id", deleteUser);
export default route;