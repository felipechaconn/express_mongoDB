//This import is a function to avoid call app again.
import { Router } from "express";

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

//Export this routes
export default router;
