import mongoose from 'mongoose';

require('dotenv').config()

const dbName = 'ds057934.mlab.com:57934/insta-bot'

const MONGO_URL = process.env.OFFLINE
  ? 'mongodb://localhost:27017/insta-bot'
  : `mongodb://${process.env.DB_USER}:${process.env.DB_PWD}@${dbName}`;

export default callback => {
	mongoose.connect(MONGO_URL, { useNewUrlParser: true });
  const db = mongoose.connection;
  db.once('open', () => callback(db));
}
