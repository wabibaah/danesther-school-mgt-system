import mongoose from "mongoose";
import dotenv from "dotenv";
//following users is for who can insert into the database.

import users from "./data/users.js";
import items from "./data/Data.js";
import students from "./data/studentData.js";
import Student from "./models/studentModel.js";
import Dashboard from "./models/dashboardModel.js";
import Admin from "./models/adminModel.js";

dotenv.config();
import connectDB from "./config/db.js";
connectDB();
