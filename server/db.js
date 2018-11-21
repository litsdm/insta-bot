import mongoose from 'mongoose';

require('dotenv').config()

const dbName = 'ds155313.mlab.com:55313/mxnstyle'

const MONGO_URL = process.env.OFFLINE
  ? 'mongodb://localhost:27017/mxnstyle'
  : `mongodb://${process.env.DB_USER}:${process.env.DB_PWD}@${dbName}`;

export default callback => {
	mongoose.connect(MONGO_URL, { useNewUrlParser: true });
  const db = mongoose.connection;
  db.once('open', () => callback(db));
}
