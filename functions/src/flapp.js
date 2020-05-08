const admin = require('firebase-admin');

const flamelink = require('flamelink');

const serviceAccount = require('../firebase-adminsdk.json');
const firebaseConfig = {
	credential: admin.credential.cert(serviceAccount), // required
	databaseURL: '<your databaseURL>', // required. looks like usually as https://<your_project_id>.firebaseio.com/
	storageBucket: '<your storageBucket>' // required if you want to use any Storage functionality. looks like as gs://<your_project_id>.appspot.com
};

const firebaseApp = admin.initializeApp(firebaseConfig);

const app = flamelink({
	firebaseApp,
	dbType: 'rtdb',   //you can left it rtdb for RealTime Database or change for Cloud Firestore with 'cf' 
	env: 'production',
	isAdminApp: true
}); 

export default app
