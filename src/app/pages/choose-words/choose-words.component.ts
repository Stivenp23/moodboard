import {Component, OnInit} from '@angular/core'
import {DataService} from '../../services/data.service'
import {StoreDataService} from '../../services/store-data.service'
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-choose-words',
  templateUrl: './choose-words.component.html',
  styleUrls: ['./choose-words.component.scss']
})
export class ChooseWordsComponent implements OnInit {
  id: string
  item: any
  words: any = []

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dataStore: StoreDataService,
              private dataService: DataService) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.loadDataItem(this.id)
    this.loadWords()
  }

  loadDataItem(id) {
    this.item = this.dataService.findById(id)
    if (this.item === null) {
      this.router.navigate([''])
    }
  }

  loadWords() {
    const raw_words = this.dataStore.getWordsById(this.id)
    raw_words.forEach(obj => {
      this.words.push({
        name: obj,
        total: 0,
        selected: false
      })
    })
  }

  getSelecteds() {
    return this.words.filter(item => item.selected === true)
  }

  submit() {
    this.dataStore.setSelectedWords(this.id, this.getSelecteds())
    this.router.navigate(['lluvia-de-ideas/preguntas', this.id])
  }

}
