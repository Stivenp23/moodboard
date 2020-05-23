import {Injectable} from '@angular/core'
import data from '../../assets/data.json'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: any = data

  constructor() {
  }

  findById(id) {
    if (id === null) {
      return this.data.concepts[0]
    } else {
      const result = this.data.concepts.filter(item => item.id === id)
      if (result && result[0]) {
        return result[0]
      }
      return null
    }

  }

  findNextById(id) {
    const currentItem = this.findById(id)
    if (currentItem === null) {
      console.log('actual no existe', id)
      return null
    }
    const indexOfCurrent = this.data.concepts.indexOf(currentItem)
    if (indexOfCurrent < 0) {
      console.log('No se encontro el index del actual', indexOfCurrent)
      return null
    }
    console.log('El index del proximo dato es', (indexOfCurrent + 1))
    return this.data.concepts[(indexOfCurrent + 1)]
  }

  getImages() {
    return this.data.images
  }
}
