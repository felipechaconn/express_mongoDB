//This files content app configuration

//Import express framework
import express from "express";

//Import Routes file
import indexRoutes from './routes/index.routes'

const app = express();

//Need to use index routes
app.use(indexRoutes);

//Export default app
export default app;