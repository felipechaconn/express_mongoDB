//This import is a function to avoid call app again.
import { Router } from "express";
import mongoose from "mongoose";
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
router.get("/edit/:id", async (req, res) => {
try {
  const id = req.params.id;
       
  const task = await Task.findById(id).lean();

//Render works without extension because app.js knows we work with .hbs and pass task
res.render("edit", {task});
} catch (error) {
  console.log(error);
}
});

router.post('/edit/:id',  async (req, res)=>{
  const {id} = req.params;
  await Task.findByIdAndUpdate(id,req.body);
  res.redirect('/');
})

router.get('/delete/:id', async (req,res)=>{
  const {id} = req.params;
  await Task.findByIdAndDelete(id);
  res.redirect('/');
})


router.get('/toggleDone/:id',async(req,res)=>{
  const {id} = req.params;
  const task = await Task.findById(id);
  console.log(task);
  let status = task.done?!task.done:true;
  task.done = status;
  await task.save();
  res.redirect('/');
})
//Route post
router.post("/tasks/add", async (req, res) => {
  const task = Task(req.body); //Create model with data in req

  await task.save();

  res.redirect('/');
 });

//Export this routes
export default router;
