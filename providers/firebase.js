import { getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyD616RFq8TywcWu8e-xTeOvrh06u7VmO1k",
	authDomain: "react-app-course-85c1f.firebaseapp.com",
	databaseURL: "https://react-app-course-85c1f.firebaseio.com",
	projectId: "react-app-course-85c1f",
	storageBucket: "react-app-course-85c1f.appspot.com",
	messagingSenderId: "997202904393",
	appId: "1:997202904393:web:6af76fecd56fbf520ac698",
};

const initFirebase = () =>{
    if(!getApps().length){
        const firebase = initializeApp(firebaseConfig);
        return firebase
    }
}

export default initFirebase