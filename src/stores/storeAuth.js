// stores/counter.js
import { defineStore } from 'pinia'
import { auth } from '@/js/firebase'
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";


export const useStoreAuth = defineStore('storeAuth', {
  state: () => {
    return {

    }
  },
  actions: {
    registerUser(credentials) {
      console.log("Register user with these things: ", credentials);
      createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log("User successfully registered: ", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Error message:", errorCode, errorMessage)
        });
    },
    logoutUser() {
      signOut(auth).then(() => {
        console.log("User signed out")
      }).catch((error) => {
        console.log("test:", error.message);
      })
    }
  },
})