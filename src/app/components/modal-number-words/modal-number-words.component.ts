import {Component, Input, OnInit} from '@angular/core'
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-modal-number-words',
  templateUrl: './modal-number-words.component.html',
  styleUrls: ['./modal-number-words.component.scss']
})
export class ModalNumberWordsComponent implements OnInit {

  @Input() textToShow = 'Ahora escoge 3 palabras'
  @Input() toLink

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

}
