//This import is a function to avoid call app again.
import { Router } from "express";


import {
  createTask,
  deleteTask,
  editTask,
  renderAbout,
  renderTask,
  renderTaskEdit,
  taskToggleDone
} from "../controller/task.controller";

//Execute Router
const router = Router();

//call render
router.get("/", renderTask);

//call about us
router.get("/about", renderAbout);

//call render edit form
router.get("/tasks/:id/edit", renderTaskEdit);

//call edit function
router.post("/tasks/:id/edit", editTask);

//call delete function
router.get("/tasks/:id/delete", deleteTask);

//call toggle function
router.get("/tasks/:id/toggleDone", taskToggleDone);

//call createTask function
router.post("/tasks/add", createTask);

//Export this routes
export default router;
