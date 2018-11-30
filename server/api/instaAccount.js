import { Router } from 'express';
import path from 'path';
import { V1 as Client } from 'instagram-private-api';

import InstaAccount from '../models/instaAccount';

const router = Router();

router.post('/', ({ body }, res) => {
  const device = new Client.Device(body.email);
  const storage = new Client.CookieFileStorage(path.join(__dirname, `./cookies/${body.email}.json`));

  Client.Session.create(device, storage, body.email, body.password)
	.then(session =>  session.getAccount())
  .then(account => {
    const { profilePicUrl, followerCount, followingCount, username, fullName, mediaCount } = account.params;
    const instaInfo = {
      profilePic: profilePicUrl,
      followerCount,
      followingCount,
      handle: `@${username}`,
      fullName,
      mediaCount
    }

    const newAccount = new InstaAccount(body);
    newAccount.save((err) => {
      if (err) { return res.send({ err: err.message }) }
      res.send({ account: { ...newAccount, ...instaInfo } });
    });

    return Promise.resolve();
  })
  .catch(err => res.send({ message: err.message }));
});

export default router;
