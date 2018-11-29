import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const InstaAccountSchema = new Schema({
  createdAt: { type: Date },
  updatedAt: { type: Date },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  profilePic: { type: String, required: true },
  user: { type: ObjectId, ref: 'User', required: true },
  followerCount: Number,
  followingCount: Number,
  handle: String,
  mediaCount: Number,
  fullName: String,
  proxy: {
    host: String,
    port: String,
    user: String,
    password: String,
    stringValue: String
  },
  botConfig: {
    startAtH: Number,
    startAtM: Number,
    endAtH: Number,
    endAtM: Number,
    likePerDay: Number,
    mediaMaxLike: Number,
    mediaMinLike: Number,
    followPerDay: Number,
    followTime: Number,
    unfollowPerDay: Number,
    commentsPerDay: Number,
    commentList: [[String]],
    tagList: [String],
    tagBlacklist: [String],
    userBlacklist: {
      type: Map,
      of: String
    },
    maxLikeForOneTag: Number,
    unfollowBreakMin: Number,
    unfollowBreakMax: Number
  }
});

InstaAccountSchema.pre('save', function preUser(next) {
  const now = new Date();
  this.updatedAt = now;
  if (!this.createdAt) this.createdAt = now;

  // ENCRYPT PASSWORD
  const account = this;
  if (!account.isModified('password')) return next();

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(account.password, salt, (err2, hash) => {
      account.password = hash;
      next();
    });
  });
});


InstaAccountSchema.methods.comparePassword = function comparePass(password, done) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    done(err, isMatch);
  });
};

export default mongoose.model('InstaAccount', InstaAccountSchema);
