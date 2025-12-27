import { Schema, model } from "mongoose";

const visitorSchema = new Schema({
  count: {
    type: Number,
    required: true,
    default: 0,
  },
});

export default model("Visitor", visitorSchema);
