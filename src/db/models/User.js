import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const progressSchema = new mongoose.Schema({
  word_id: { type: Schema.Types.ObjectId, required: false },
  points: { type: Number, min: 1, max: 5, required: false },
});

const userSchema = new mongoose.Schema({
  status: { type: String, enum: ['free', 'admin', 'pro'], default: 'free' },
  name: { type: String, default: 'Neuer Benutzer' },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  language: { type: String, default: 'EN' },
  avatar: { type: String, default: '' },
  progress: { type: [progressSchema], default: [] },
  bookmarks: { type: [Schema.Types.ObjectId], default: [] },
  googleId: { type: String, default: null },
  color: { type: String, default: '#F1A635' },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

export default mongoose.models.User || mongoose.model('User', userSchema);
