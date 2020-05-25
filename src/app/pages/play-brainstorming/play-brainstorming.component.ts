import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Router} from '@angular/router'
import {DataService} from '../../services/data.service'
import {StoreDataService} from '../../services/store-data.service'

@Component({
  selector: 'app-play-brainstorming',
  templateUrl: './play-brainstorming.component.html',
  styleUrls: ['./play-brainstorming.component.scss']
})
export class PlayBrainstormingComponent implements OnInit {
  id: string
  item: any

  finalTextModal = 'Ahora escoge 3 palabras'
  modalToLink = ''

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService, private dataStore: StoreDataService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.modalToLink = '/lluvia-de-ideas/escoger-palabras/' + this.id
    this.loadDataItem(this.id)
  }

  loadDataItem(id) {
    this.item = this.dataService.findById(id)
    if (this.item === null) {
      this.router.navigate([''])
    }
  }

  setDataWords(words) {
    this.dataStore.setWords(this.id, words)
  }

}
