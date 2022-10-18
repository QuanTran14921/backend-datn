import mongoose, { Schema, ObjectId } from "mongoose";
const ProductSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
    },
    height: {
      type: Number,
    },
    width: {
      type: Number,
    },
    length: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    desc: {
      type: String,
      require: true,
    },
    type: [
      {
        color: {
          type: String,
          require: true,
        },
        size: {
          type: String,
          require: true,
        },
        quantity: {
          type: Number,
          require: true,
        },
      },
    ],
    subimg: {
      type: [],
    },
    categoryId: {
      type: ObjectId,
      ref: "CategoryProduct",
    },
  },
  { timestamps: true }
);
export default mongoose.model("Product", ProductSchema);
