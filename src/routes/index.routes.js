//This import is a function to avoid call app again.
import { Router } from "express";
import Task from "../models/Task";
//Execute Router
const router = Router();

//Route
router.get("/", (req, res) => {
  //Render works with views
  res.render("index");
});

//Route about us
router.get("/about", (req, res) => {
  //Render works without extension because app.js knows we work with .hbs
  res.render("about");
});

//Route about us
router.get("/edit", (req, res) => {
  //Render works without extension because app.js knows we work with .hbs
  res.render("edit");
});

//Route post
router.post("/tasks/add", async (req, res) => {
  const task = Task(req.body); //Create model with data in req

  taskSaved = await task.save();

  res.redirect('/');
 });

//Export this routes
export default router;
