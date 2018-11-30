import { Router } from 'express';
import { V1 as Client } from 'instagram-private-api';
import path from 'path';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

import User from '../models/user';
import InstaAccount from '../models/instaAccount';

const { ObjectId } = mongoose.Types;

const router = Router();

router.put('/:userId/update', ({ body: { name, value }, params: { userId } }, res) => {
  User.findOneAndUpdate({ _id: userId }, { $set: { [name]: value } }, (err, user) => {
    if (err) return res.send({ err: 'Something went wrong while updating your user.' });
    const { _id, username, email } = user;
    const tokenObj = { id: _id, username, email };
    if (name === 'username' || name === 'email' || name === '_id') {
      tokenObj[name] = value;
    }
    const token = jwt.sign(tokenObj, process.env.JWT_SECRET);

    res.send({ token });
  });
});

router.get('/:userId/accounts', ({ params: { userId } }, res) => {
  getAccountsWithInstagramInfo(userId, res, (accounts) => {
    res.status(200).send({ accounts });
  });
});

const getAccountsWithInstagramInfo = (userId, res, cb) => {
  InstaAccount.find({ user: ObjectId(userId) }, async (err, accounts) => {
    if (err) return res.status(401).send({ err: err.message });

    const promises = accounts.map(async (instaAccount) => {
      const device = new Client.Device(instaAccount.email);
      const storage = new Client.CookieFileStorage(path.join(__dirname, `./cookies/${instaAccount.email}.json`));

      const session = new Client.Session(device, storage);
      const account = await session.getAccount();
      const { profilePicUrl, followerCount, followingCount, username, fullName, mediaCount } = account.params;
      const newParams = {
        profilePic: profilePicUrl,
        followerCount,
        followingCount,
        handle: `@${username}`,
        fullName,
        mediaCount
      }

      const newAcc = {
        ...instaAccount,
        ...newParams
      }

      return newAcc;
    });

    const results = await Promise.all(promises);

    cb(results);
  });
}

export default router;
