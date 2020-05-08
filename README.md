# This is a Sapper project, prepared for Firebase Cloud Functions deploying with SSR support and with Flamelink integration for server-side dynamic content.

Firstly install firebase-tools with elevated rights

```bash
sudo npm install -g firebase-tools
```

Then change project ID in `.firebaserc` file. 
Then get your firebase AdminSDK json file. 
Put it into `functions` folder and rename into `firebase-adminsdk.json`
In `functions/src/flapp.js` file put your credentials into `databaseURL` and `storageBucket` fields. Change `dbType` with your needs.

To deploy, go in `functions` and do:

```bash
npm install
npm run deploy
```
