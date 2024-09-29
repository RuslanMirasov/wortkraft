import mongoose from 'mongoose';

const temaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  slug: { type: String, required: true },
  image: { type: String, required: true },
});

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  slug: { type: String, required: true },
  level: { type: Number, required: true },
  image: { type: String, required: true },
  themas: { type: [temaSchema], default: [] },
});

const Book = mongoose.models.Book || mongoose.model('Book', bookSchema);

export default Book;
