//This import is a function to avoid call app again.
import { Router } from "express";
import Task from "../models/Task";
//Execute Router
const router = Router();

//Route
router.get("/", async (req, res) => {

try {
  const tasks = await Task.find().lean(); //get data NEEDS await..
  
  //Render works with views and pass tasks from db
   res.render("index", {tasks:tasks});
} catch (error) {
  console.log(error);
}


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

  await task.save();

  res.redirect('/');
 });

//Export this routes
export default router;
