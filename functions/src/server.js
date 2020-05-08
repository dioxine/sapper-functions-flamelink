import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';
import flApp from "./flapp";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const expressServer = express()
	.use(
		compression({ threshold: 0 }),
		async (req, res, next) => { // Middleware for getting Flamelink content before starting express server
			try {
				req.p1 = await flApp.content.get({
					schemaKey: 'servicesTabPaneContent',
					fields: ['tabPaneId', 'ckEditor']
				}); // Export content to session object. You need to register there and setup you own Flamelink schemas and fields
			} catch (e) {
				console.log(e);
			}
			next();
		},
		sirv('static', { dev }),
		sapper.middleware(
			{
				session: (req, res) => ({
					flContent: req.p1,
				})
			}
		)
	)
if (dev) {
	expressServer.listen(PORT, err => {
		if (err) console.log('error', err);
	});
}

export { expressServer }
