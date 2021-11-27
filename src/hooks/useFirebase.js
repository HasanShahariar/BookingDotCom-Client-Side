import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.initialize";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [SignUpStatus, setSignUpStatus] = useState(false);
  const [LoginStatus, setLoginStatus] = useState(false);
  const [error, setError] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const signInUsingGoogle = (e) => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .finally(() => setIsLoading(false));
    e.preventDefault();
  };

  const logOut = (e) => {
    setIsLoading(true);
    signOut(auth)
      .then(() => { })
      .finally(() =>
      {
        setUser({});console.log("signout");
        setIsLoading(false);
      } 
      );
      
    ;
  };
  const SignupWithEmailPassword = (e) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignUpStatus(true);
        const user = userCredential.user;
        setUser(user)
        setIsLoading(false)
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
    e.preventDefault();
  };
  const signInWithEmailPassword = (e) => {
    
    console.log("signin With email password");
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoginStatus(true);
        console.log("signin With email password accepted");
        const user = userCredential.user;
        setIsLoading(false)
        setUser(user);
        // setEmail(user.email)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        setUser({})
      });
    e.preventDefault();
  };

  useEffect(() => {
    const auth = getAuth();
    setIsLoading(true)
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user)
        console.log(user);
        setIsLoading(false)
        // ...
      } else {
        setError("")
        console.log("no data");
      }
    });
  }, [])

  return {
    SignupWithEmailPassword,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    signInWithEmailPassword,
    user,
    error,
    SignUpStatus,
    LoginStatus,
    isLoading,
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
