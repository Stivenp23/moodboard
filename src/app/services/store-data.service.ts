import {Injectable} from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class StoreDataService {

  constructor() {
  }

  setWords(id, data) {
    localStorage.setItem(id, JSON.stringify(data))
    const currentWords = localStorage.getItem('words')
    if (currentWords === null) {
      const newData = {}
      newData[id] = data
      localStorage.setItem('words', JSON.stringify(newData))
    } else {
      const newData = JSON.parse(currentWords)
      newData[id] = data
      localStorage.setItem('words', JSON.stringify(newData))
    }
  }

  setSelectedWords(id, data) {
    localStorage.setItem('selected_' + id, JSON.stringify(data))
    const currentWords = localStorage.getItem('words')
    if (currentWords === null) {
      const newData = {}
      newData[id] = data
      localStorage.setItem('selected_words', JSON.stringify(newData))
    } else {
      const newData = JSON.parse(currentWords)
      newData[id] = data
      localStorage.setItem('selected_words', JSON.stringify(newData))
    }
  }

  getWords() {
    return JSON.parse(localStorage.getItem('words'))
  }

  getSelectedWords() {
    return JSON.parse(localStorage.getItem('selected_words'))
  }

  getWordsById(id) {
    return JSON.parse(localStorage.getItem(id))
  }

  getSelectedWordsById(id) {
    return JSON.parse(localStorage.getItem('selected_' + id))
  }
}
