//This files content app configuration

/**
 * Import express framework
 * Import express handle-bars to work with html
 * Import Routes file
 * Import Module path to work with locations in computer
 *
 */
import express from "express";
import { create } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";

const app = express();

//Configure views propery
app.set("views", path.join(__dirname, "views"));
/**
 * Tell Express we are going to use motor handelbars
 * layoutsDir= common html structure
 * defaultLayout= default hbs file
 * extname= files extension name.
 *
 */
const exphbs = create({
  extname: ".hbs",
  layoutsDir: path.join("src/views", "layouts"),
  defaultLayout: "main",
});

//create motor
app.engine(".hbs", exphbs.engine);
//set to express template motor
app.set("view engine", ".hbs");

//Need to use index routes
app.use(indexRoutes);

//Export default app
export default app;
