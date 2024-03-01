// stores/counter.js
import { defineStore } from 'pinia'
import { db } from "@/js/firebase"
import { collection, doc, onSnapshot, deleteDoc, updateDoc, query, orderBy, addDoc } from "firebase/firestore";
import { useStoreAuth } from '@/stores/storeAuth';

let notesCollectionRef;
let notesCollectionQuery;

let getNoteSnapshot = null;

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [],
      notesLoaded: false
    }
  },
  actions: {
    init() {
      // get store ntoes
      const storeAuth = useStoreAuth();
      notesCollectionRef = collection(db, "users", storeAuth.user.id, "notes");
      notesCollectionQuery = query(notesCollectionRef, orderBy("date", "desc"));
      this.getNotes();
    },
    async getNotes() {
      this.notesLoaded = false;


      getNoteSnapshot = onSnapshot(notesCollectionQuery, (querySnapshot) => {
        let notes = [];
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content,
            date: doc.data().date
          }
          notes.push(note);
        });
        this.notes = notes;
        this.notesLoaded = true;
      }, error => {
        console.log("error.message: ", error.message);
      });
    },
    clearNotes() {
      this.notes = [];

      if (getNoteSnapshot) { getNoteSnapshot() } //if snapshot exists unsubscribe from previous listener
    },
    async addNote(noteContent) {
      let currentDate = new Date().getTime(),
        date = currentDate.toString();

      await addDoc(notesCollectionRef, {
        content: noteContent,
        date
      });
    },
    async delete(idToDelete) {
      // this.notes = this.notes.filter(note => { return note.id !== idToDelete })
      await deleteDoc(doc(notesCollectionRef, idToDelete));
    },
    async editNote(id, content) {
      // let index = this.notes.findIndex(note => note.id === id);
      // this.notes[index].content = content;
      await updateDoc(doc(notesCollectionRef, id), {
        content: content
      })
    }
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter(note => { return note.id === id })[0].content;
      }
    },
    getTotalNotes: (state) => {
      return state.notes.length
    },
    getTotalCharacters: (state) => {
      let count = 0;
      state.notes.forEach(note => {
        count += note.content.length
      });
      return count;
    }
  }
})