import { Router } from 'express';

import InstaAccount from '../models/instaAccount';

const router = Router();

router.post('/', ({ body }, res) => {
  const newAccount = new InstaAccount(body);
  newAccount.save((err) => {
    if (err) { return res.status(400).send({ err: err.message }) }
    res.status(200).send({ account: newAccount });
  });
});

export default router;
