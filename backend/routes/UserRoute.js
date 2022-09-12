import express from "express";
import { searchQuery, getUsers, getUsersById, saveUser, updateUser, deleteUser } from "../controllers/UserController.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUsersById);
router.get("/search/:id", searchQuery);
router.post("/users/", saveUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
