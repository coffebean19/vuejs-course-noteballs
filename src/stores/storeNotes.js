// stores/counter.js
import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
        {
          id: 'id1',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est error reprehenderit debitis itaque ipsam omnis sedunde eum ut nam illum doloribus accusamus placeat consectetur tenetur perferendis, a sint excepturi?'
        },
        {
          id: 'id2',
          content: 'Another note with shorter things in it.!'
        },
      ]
    }
  },
  actions: {
    addNote(noteContent) {
      let currentDate = new Date().getTime(),
        id = currentDate.toString();

      const note = {
        id,
        content: noteContent.value,
      }
      this.notes.unshift(note);
    },
    delete(idToDelete) {
      this.notes = this.notes.filter(note => { return note.id !== idToDelete })
    }
  }
})