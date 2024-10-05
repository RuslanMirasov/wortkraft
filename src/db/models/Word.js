import mongoose from 'mongoose';

const translationSchema = new mongoose.Schema({
  language: { type: String, required: true },
  translation: [
    {
      name: { type: String, required: true },
      status: { type: Boolean, required: true },
    },
  ],
});

const wordSchema = new mongoose.Schema({
  book: { type: String, required: true },
  theme: { type: String, required: true },
  name: { type: String, required: true },
  level: { type: String, required: true },
  examples: { type: [String], required: true },
  translates: { type: [translationSchema], required: true },
});

const Word = mongoose.models.Word || mongoose.model('Word', wordSchema);

export default Word;
