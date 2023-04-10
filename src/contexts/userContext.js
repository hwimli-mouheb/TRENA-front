import { createContext, useContext, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
  signInWithPopup
} from "firebase/auth";

import { auth, db, provider } from "../firebase";

import {
  query,
  getDocs,
  collection,
  where,
  addDoc,
  getDoc,
  doc,
  updateDoc

} from 'firebase/firestore'


export const UserContext = createContext({});

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorLogin, setErrorLogin] = useState(null);
  const [errorSignUp, setErrorSignUp] = useState(null);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useState(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        setUser(res);
      } else {
        setUser(null);
      }
      setErrorLogin("");
      setErrorSignUp("");
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  const updateUser = async (email,properties)=>{
    const p =await getUser(email);
    const docRef = doc(db, "users" , p.id);
    updateDoc(docRef,{
     adresse : properties.adresse,
     phone : properties.phone,
     role : properties.role
    })
  }
  const getUser = async (email)=>{
    const us = await (await getAllUsers()).filter((element)=>element.email === email);
    return us.length >0 ? us[0] : null ;
  }
  const addUser = async (user, properties) => {
    if (user) {
      addDoc(usersCollectionRef, {
        email: user.email,
        adresse: properties.adresse,
        phone: properties.phone,
        role: properties.role,
        id : user.uid
      });
    }

  }
  const getAllUsers = async () => {
    return await getDocs(usersCollectionRef).then((snapshot) => {
      let persons = []
      snapshot.docs.forEach(doc => {
        persons.push({ ...doc.data(), id: doc.id })
      })

      setUsers(persons)
      return persons
    })
  };
  const registerUser = (email, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() =>
        updateProfile(auth.currentUser, {

        })
      )
      .then((res) => console.log(res))
      .catch((err) => setErrorSignUp(err.message))
      .finally(() => setLoading(false));
  };

  const signInUser = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => console.log(res))
      .catch((err) => {setErrorLogin(err.code); })
      .finally(() => setLoading(false));
  };

  const logoutUser = () => {
    signOut(auth);
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        });
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const signInWithfacebook = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      const user = res.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "facebook",
          email: user.email,
        });
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const contextValue = {
    users,
    user,
    loading,
    errorLogin,
    errorSignUp,
    signInUser,
    registerUser,
    logoutUser,
    forgotPassword,
    signInWithGoogle,
    signInWithfacebook,
    getAllUsers,
    addUser,
    getUser,
    updateUser
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};