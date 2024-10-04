import mongoose from 'mongoose';

const temaSchema = new mongoose.Schema({
  thumbnail: { type: String, default: null },
  name: { type: String, required: true },
  color: { type: String, required: true },
  slug: { type: String, required: true },
  words_count: { type: Number, default: 0 },
});

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subname: { type: String, required: false },
  slug: { type: String, required: true },
  level: { type: String, required: true },
  image: { type: String, required: true },
  thumbnail: { type: String, required: true },
  color: { type: String, required: true },
  words_count: { type: Number, required: false },
  thems_count: { type: Number, required: false },
  thems: { type: [temaSchema], default: [] },
});

const Book = mongoose.models.Book || mongoose.model('Book', bookSchema);

export default Book;
