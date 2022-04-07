// Modelo de datos por eso en mayuscula

import { Schema, model } from "mongoose";

//Define schema
const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true, //Clear string
    },
    description: String,
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, //Send CreatedAt UpdatedAt
    versionKey: false, // Mongoose adds  default __v:  to our documents.
  }
);

//Create data model and set the name of the collection in that case will be 'task'

export default model("Task", taskSchema);
