import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, updateDoc, increment } from "firebase/firestore";


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

const upvoteRef = collection(db, 'Upvotes')
const downvoteRef = collection(db, 'Downvotes')
const starsRef = collection(db, 'Stars')

export const getUpvoteCount = async () => {
    const upvoteDocSnap = await getDocs(upvoteRef);
    console.log("Upvote collection data:", upvoteDocSnap.docs[0].data().f1);
    return upvoteDocSnap;
};

export const getDownvoteCount = async () => {
    const downvoteDocSnap = await getDocs(downvoteRef);
    console.log("Downvote collection data:", downvoteDocSnap.docs[0].data().f1);
    return downvoteDocSnap;
};

export const getStarsCount = async () => {
    const starsDocSnap = await getDocs(starsRef);
    console.log("Stars collection data:", starsDocSnap.docs[0].data().f1);
    return starsDocSnap;
};

export const incrementUpvotes = async () => {
    const docSnap = await getDocs(upvoteRef);
    if (docSnap.docs.length > 0) {
        const firstDocRef = docSnap.docs[0].ref;
        try {
            await updateDoc(firstDocRef, {
                f1: increment(1),
            })
        } catch (error) {
            console.log('Error updating document: ', error);
        }
    } else {
        console.log('No documents found in Upvotes collection')
    }
}

export const decrementDownvotes = async () => {
    const docSnap = await getDocs(downvoteRef);
    if (docSnap.docs.length > 0) {
        const firstDocRef = docSnap.docs[0].ref;
        try {
            await updateDoc(firstDocRef, {
                f1: increment(1),
            })
        } catch (error) {
            console.log('Error updating document: ', error);
        }
    }
}

export const incrementStars = async () => {
    const docSnap = await getDocs(starsRef);
    if (docSnap.docs.length > 0) {
        const firstDocRef = docSnap.docs[0].ref;
        try {
            await updateDoc(firstDocRef, {
                f1: increment(1),
            })
        } catch (error) {
            console.log('Error updating document: ', error);
        }
    }
}

// THIS FUNCTION ALSO WORKS

// const voteSnap = await getDocs(upVoteRef)
//     .then((data) => {
//         console.log('voteSnap data', data.docs[0].data().f1)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// export default voteSnap;