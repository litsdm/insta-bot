import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const UserSchema = new Schema({
  createdAt: { type: Date },
  updatedAt: { type: Date },
  lastConnection: { type: Date },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  files: [{ type: ObjectId, ref: 'File' }],
  expoToken: { type: String }
});

UserSchema.pre('save', function preUser(next) {
  const now = new Date();
  this.updatedAt = now;
  if (!this.lastConnection) this.lastConnection = now;
  if (!this.createdAt) this.createdAt = now;

  // ENCRYPT PASSWORD
  const user = this;
  if (!user.isModified('password')) return next();

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err2, hash) => {
      user.password = hash;
      next();
    });
  });
});


UserSchema.methods.comparePassword = function comparePass(password, done) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    done(err, isMatch);
  });
};

export default mongoose.model('User', UserSchema);
