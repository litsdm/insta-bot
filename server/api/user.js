import { Router } from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

import User from '../models/user';
import InstaAccount from '../models/instaAccount';

const { ObjectId } = mongoose.Types;

const router = Router();

router.put('/:userId/update', ({ body: { name, value }, params: { userId } }, res) => {
  User.findOneAndUpdate({ _id: userId }, { $set: { [name]: value } }, (err, user) => {
    if (err) res.send({ err: 'Something went wrong while updating your user.' });
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
  InstaAccount.find({ user: ObjectId(userId) }, (err, accounts) => {
    if (err) res.status(401).send({ err: err.message });
    res.status(200).send({ accounts });
  })
});

export default router;
