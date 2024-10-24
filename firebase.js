import {initializeApp} from "firebase/app";
import {
  getDatabase,
  ref,
  onValue,
  query,
  orderByKey,
  limitToFirst,
  startAt,
} from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export const getTeachers = (page = 1, limit = 3) => {
  return new Promise((resolve, reject) => {
    const teacherRef = ref(database, "teachers/");
    const start = (page - 1) * limit;

    const queryTeachers = query(
      teacherRef,
      orderByKey(),
      startAt(start.toString()),
      limitToFirst(limit)
    );

    const queryCount = query(teacherRef);

    onValue(
      queryTeachers,
      (snapshot) => {
        const data = snapshot.val();
        const teachersArray = data ? Object.values(data) : [];

        onValue(queryCount, (countSnapshot) => {
          const totalCount = countSnapshot.val() ? Object.keys(countSnapshot.val()).length : 0;
          resolve({teachers: teachersArray, totalCount});
        });
      },
      (error) => {
        reject(error);
      }
    );
  });
};

export const createdUser = async ({email, password}) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return {
      uid: user.uid,
      email: user.email,
      token: userCredential.user.stsTokenManager.accessToken,
    };
  } catch (error) {
    throw error;
  }
};

export const loginUser = async ({email, password}) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return {
      uid: user.uid,
      email: user.email,
      token: userCredential.user.stsTokenManager.accessToken,
    };
  } catch (error) {
    throw error;
  }
};

export const authState = () => {
  return new Promise((resolve) => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve({
          uid: user.uid,
          email: user.email,
        });
      }
    });
  });
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};
