import { getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "###",
	authDomain: "###",
	databaseURL: "###",
	projectId: "###",
	storageBucket: "###",
	messagingSenderId: "###",
	appId: "###",
};

const initFirebase = () =>{
    if(!getApps().length){
        const firebase = initializeApp(firebaseConfig);
        return firebase
    }
}

export default initFirebase
