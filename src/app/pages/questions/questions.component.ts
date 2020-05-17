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
  item: any
  words: any = []
  step: number

  //toDo: validar por cada tarea las preguntas y respuestas

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
  }

  continue() {
    //toDo: validadr si tiene que seguir con otro apecto o tiene que ir a escoger imagenes
  }

}
