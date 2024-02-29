// stores/counter.js
import { defineStore } from 'pinia'
import { auth } from '@/js/firebase'
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useStoreNotes } from '@/stores/storeNotes';


export const useStoreAuth = defineStore('storeAuth', {
  state: () => {
    return {
      user: {}
    }
  },
  actions: {
    init() {
      onAuthStateChanged(auth, (user) => {
        const storeNotes = useStoreNotes();
        if (user) {
          this.user.id = user.uid;
          this.user.email = user.email;
          console.log("User logged id:", this.user.id);
          this.router.push("/");
          storeNotes.init();
        } else {
          this.user = {}
          this.router.replace("/auth");
          storeNotes.clearNotes();
        }
      });
    },
    registerUser(credentials) {
      console.log("Register user with these things: ", credentials);
      createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          // console.log("User successfully registered: ", user);
        })
        .catch((error) => {
          // console.log("Error message:", errorCode, errorMessage)
        });
    },
    loginUser(credentials) {
      signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // console.log("User logged in:", user);
        })
        .catch((error) => {
          // console.log(error.message)
        });
    },
    logoutUser() {
      signOut(auth).then(() => {
        // console.log("User signed out")
      }).catch((error) => {
        // console.log("test:", error.message);
      });
    }
  },
})