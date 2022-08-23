import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyB0D8dZ_u1EkBl06UeTEnnexK2KAUM6gO8",
  authDomain: "calendarlitcar.firebaseapp.com",
  projectId: "calendarlitcar",
  storageBucket: "calendarlitcar.appspot.com",
  messagingSenderId: "456979995896",
  appId: "1:456979995896:web:68f75b43b7632ef8edef0d"
  };
  //Inicializo Firebase
  const app = initializeApp(firebaseConfig); 
  //Obtengo el servicio
  const db = getFirestore(app);

  export default db