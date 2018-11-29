import { Router } from 'express';
import { version } from '../../package.json';
import auth from './auth';
import user from './user';
import instaAccount from './instaAccount';

export default () => {
	const api = Router();

	api.use('/', auth);
	api.use('/', user);
	api.use('/account', instaAccount);

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
