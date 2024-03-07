import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";


// const analytics = getAnalytics(app);

const firebaseConfig = {
  apiKey: "AIzaSyDbO5Pw41j3XEP7awOpb7XQT4yDq8w3T8Y",
  authDomain: "like-button-test.firebaseapp.com",
  projectId: "like-button-test",
  storageBucket: "like-button-test.appspot.com",
  messagingSenderId: "968058607316",
  appId: "1:968058607316:web:a0badcd73c8fb7ad880d41",
  measurementId: "G-TVVC25KVQE",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const colRef = collection(db, 'Upvotes')

// const voteSnap = await getDocs(colRef)
//     .then((data) => {
//         console.log('voteSnap data', data.docs[0].data().f1)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// export default voteSnap;

const getUpvoteCount = async () => {
    const docSnap = await getDocs(colRef);
    console.log("Document data:", docSnap.docs[0].data().f1);
    return docSnap;
};

export default getUpvoteCount;



