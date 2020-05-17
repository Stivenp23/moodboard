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
      return this.data[0]
    } else {
      const result = this.data.filter(item => item.id === id)
      if (result && result[0]) {
        return result[0]
      }
      return null
    }

  }
}
