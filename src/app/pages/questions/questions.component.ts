import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Router} from '@angular/router'
import {StoreDataService} from '../../services/store-data.service'
import {DataService} from '../../services/data.service'

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  id: string
  selected_word: string
  item: any
  words: any = []
  step: number
  answers = {}

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dataStore: StoreDataService,
              private dataService: DataService) {
    this.step = 1
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.loadDataItem(this.id)
  }

  loadDataItem(id) {
    this.item = this.dataService.findById(id)
    this.words = this.dataStore.getSelectedWordsById(this.id)
    if (this.item === null) {
      this.router.navigate([''])
    }
    this.loadAnswerModel(this.words)
  }

  loadAnswerModel(words) {
    words.forEach((word, keyWord) => {
      this.answers['word' + keyWord] = {}
    })
  }

  isValidStep(keyWord) {
    const arrayKeys = Object.keys(this.answers['word' + keyWord])
    return this.item.questions.length === arrayKeys.length
  }

  setWordsScore() {
    this.words.forEach((word, key) => {
      const ansKeys = Object.keys(this.answers['word' + key])
      let totalScore = 0
      ansKeys.forEach(key2 => {
        totalScore += parseInt(this.answers['word' + key][key2])
      })
      word.total = totalScore
      totalScore = 0
    })
    return this.words
  }

  nexStep() {
    this.step++
    this.setWordsScore()
    this.setSelectedWord()
  }

  setSelectedWord() {
    const maxTotal = Math.max.apply(Math, this.words.map(o => {
      return o.total
    }))
    const filterWord = this.words.filter(item => item.total === maxTotal)
    this.selected_word = filterWord[0].name
  }

  continue() {
    this.dataStore.setSelectedWord(this.id, this.selected_word)

    const next = this.dataService.findNextById(this.id)
    if (next === null || !next) {
      this.router.navigate(['/visualizar-conceptos-clave'])
    } else {
      this.router.navigate(['/lluvia-de-ideas/introduccion/' + next.id])
    }
  }

}
