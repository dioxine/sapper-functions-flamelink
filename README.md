# This is a Sapper project, prepared for Firebase Cloud Functions deploying with SSR support and with Flamelink integration for server-side dynamic content.

A bit of preparations.
Firstly you need to create a project in Firebase Console.

In the Firebase console, open Settings > Service Accounts.
Click Generate New Private Key, then confirm by clicking Generate Key.
Securely store the JSON file containing the key. This will be you `firebase-adminsdk.json` later.

Then register in flamelink.io and do all steps to link it to your Firebase database (chose Realtime or Cloud Firestore, this can be set up with `dbType` below.
Follow Flamelink's recomendations to setup correct rights to your database and storage.

Install firebase-tools with elevated rights into your system.

```bash
sudo npm install -g firebase-tools
```

Then change Firebase project ID in `.firebaserc` file to yours. 
Get your firebase AdminSDK `json` file from Firebase Console and put it into `functions` folder and rename into `firebase-adminsdk.json`.
In `functions/src/flapp.js` file put your credentials into `databaseURL` and `storageBucket` fields. Change `dbType` with your needs.

To deploy, go in `functions` and do:

```bash
npm install
npm run deploy
```
