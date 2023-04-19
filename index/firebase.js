// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child, push } from "firebase/database";
import { getStorage, getDownloadURL} from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZBIlK7v__S-mR6YdKFncwW8Huj9hBwCo",
  authDomain: "properfi.firebaseapp.com",
  databaseURL: "https://properfi-default-rtdb.firebaseio.com",
  projectId: "properfi",
  storageBucket: "properfi.appspot.com",
  messagingSenderId: "957921743853",
  appId: "1:957921743853:web:0fc27d5da73708035c4de4",
  measurementId: "G-CQY57PHQ8Z",
  // maybe https://properfi-default-rtdb.firebaseio.com/
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Realtime Database and get a reference to the service
// const database = getDatabase(app);
// // Initialize Cloud Storage and get a reference to the service
// const storage = getStorage(app);


// Adds an entry to the waitlist
function addToWaitlist(userEmail) {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Test the given email string against the regular expression
  if (emailRegex.test(userEmail)) {
    // add userEmail to waitlist
    const db = getDatabase(app)
    const reference = ref(db, 'Waitlist/')
    push(reference, userEmail);
  }
  else console.log("Invalid email.")
  return
}

// At the moment does not work - react hooks should be use to accomodate for 
// async functions
// Possible values are: Image, PurchasePrice, MaxGuests, Returns, TokenPrice
async function getValueAsync(listing, value) {
  const db = getDatabase(app)
  const dbRef = ref(db);
  if (value == "Image") {
    const storage = getStorage(app)
    await get(child(dbRef, `Listings/${listing}/${value}`)).then((snapshot) => {
      if (snapshot.exists()) {
        tempURL = snapshot.val();
        getDownloadURL(ref(storage, url))
        .then((url) => {
          return url
        })
      } else {
        return("No data available");
      }
    }).catch((error) => {
      return(error);
    });
  }
  else {
    console.log('We here')
    await get(child(dbRef, `Listings/${listing}/${value}`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log('We here as well')
        return snapshot.val();
      } else {
        return("No data available");
      }
    }).catch((error) => {
      return(error);
    });
  }
}

function getValue(listing, value) {
  getValueAsync(listing, value).then(result => {
    console.log(result)
  });
}

export {addToWaitlist}