import Task from "../models/Task";

export const renderTask = async (req, res) => {
  try {
    const tasks = await Task.find().lean(); //get data NEEDS await..

    //Render works with views and pass tasks from db
    res.render("index", { tasks: tasks });
  } catch (error) {
    console.log(error);
  }
};

export const renderAbout = async (req, res) => {
  //Render works without extension because app.js knows we work with .hbs
  res.render("about");
};

export const renderTaskEdit = async (req, res) => {
  try {
    const id = req.params.id;

    const task = await Task.findById(id).lean();
    //Render works without extension because app.js knows we work with .hbs and pass task
    res.render("edit", { task });
  } catch (error) {
    console.log(error);
  }
};

export const createTask = async (req, res) => {
  try {
    const task = Task(req.body); //Create model with data in req
    await task.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const editTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndUpdate(id, req.body);
  res.redirect("/");
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.redirect("/");
};

export const taskToggleDone = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  console.log(task);
  let status = task.done ? !task.done : true;
  task.done = status;
  await task.save();
  res.redirect("/");
};
