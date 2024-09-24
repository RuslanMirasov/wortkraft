import mongoose from "mongoose";
const { Schema } = mongoose;

const temaSchema = new Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  slug: { type: String, required: true },
  image: { type: String, required: true },
  words: { type: Number, required: true },
});

const bookSchema = new Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  slug: { type: String, required: true },
  level: { type: Number, required: true },
  image: { type: String, required: true },
  themas: [{ type: temaSchema, required: false }],
});

const Book = mongoose.models.Book || mongoose.model("Book", bookSchema);

export default Book;
