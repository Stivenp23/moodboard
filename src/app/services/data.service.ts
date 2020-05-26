import {Injectable} from '@angular/core'
import data from '../../assets/data.json'
import {Location} from "@angular/common";
@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: any = data

  constructor(private _location: Location) {
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
      return null
    }
    const indexOfCurrent = this.data.concepts.indexOf(currentItem)
    if (indexOfCurrent < 0) {
      return null
    }
    return this.data.concepts[(indexOfCurrent + 1)]
  }

  getAllConcepts() {
    return this.data.concepts
  }
  backClicked() {
    this._location.back();
  }

  getImages() {
    return this.data.images
  }
}
