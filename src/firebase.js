import { initializeApp } from "firebase/app";
import { getDatabase,ref,push} from "firebase/database";

const {
	REACT_APP_FIREBASE_API_KEY,
	REACT_APP_FIREBASE_AUTH_DOMAIN,
	REACT_APP_FIREBASE_DATABASE_URL,
	REACT_APP_FIREBASE_PROJECT_ID,
	REACT_APP_FIREBASE_STRAGE_BUCKET,
	REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	REACT_APP_FIREBASE_APP_ID,
}= process.env;

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL:REACT_APP_FIREBASE_DATABASE_URL,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STRAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export const notesRef = ref(database,"notes");

export function pushNote({name,sauna,saunaTime,waterTime,restTime}){
 	push(notesRef,{
		name: name,
		sauna: sauna,
		saunaTime: saunaTime,
		waterTime: waterTime,
		restTime: restTime
	 });
};
/* export function removeNote({name,sauna,saunaTime,waterTime,restTime}){
	notesRef.remove({name,sauna,saunaTime,waterTime,restTime});
}; */