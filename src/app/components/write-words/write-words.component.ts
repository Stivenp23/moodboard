import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core'

import {FormGroup, FormControl, Validators} from '@angular/forms'
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap'
import {ModalNumberWordsComponent} from '../modal-number-words/modal-number-words.component'
import {ModalCountdownComponent} from '../modal-countdown/modal-countdown.component'

@Component({
  selector: 'app-write-words',
  templateUrl: './write-words.component.html',
  styleUrls: ['./write-words.component.scss']
})
export class WriteWordsComponent implements OnInit, OnDestroy {
  @Input() finalTextModal = ''
  @Input() modalToLink = ''
  @Output() wordsFinally: EventEmitter<any> = new EventEmitter<any>()

  modalOption: NgbModalOptions = {}
  words = []

  wordsForm = new FormGroup({
    word: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
  })

  counter = 10
  count = 0

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.coundown()
  }

  ngOnDestroy() {
    if (this.modalService !== null) {
      this.modalService.dismissAll()
    }
  }

  get word() {
    return this.wordsForm.get('word')
  }

  resetWord() {
    this.wordsForm.controls['word'].setValue('')
  }

  addWord() {
    this.words.push(this.word.value)
    this.resetWord()
  }

  setCounter(event) {
    this.count = event
    if (event === 0) {
      this.finally()
    }
  }

  finally() {
    this.wordsFinally.emit(this.words)
    this.showNumberWords()
  }

  showNumberWords() {
    this.modalOption.backdrop = 'static'
    this.modalOption.keyboard = false
    this.modalOption.centered = true
    const modalRef = this.modalService.open(ModalNumberWordsComponent, this.modalOption)
    if (this.finalTextModal && this.finalTextModal !== '') {
      modalRef.componentInstance.textToShow = this.finalTextModal
    } else {
      modalRef.componentInstance.textToShow = 'Escribiste un total de ' + this.words.length + ' palabras'
    }

    if (this.modalToLink && this.modalToLink !== '') {
      modalRef.componentInstance.toLink = this.modalToLink
    } else {
      modalRef.componentInstance.toLink = '/lluvia-de-ideas/introduccion'
    }
  }

  coundown() {
    this.modalOption.backdrop = 'static'
    this.modalOption.keyboard = false
    this.modalOption.centered = true
    const modalRef = this.modalService.open(ModalCountdownComponent, this.modalOption)
    setTimeout(() => {
      modalRef.close()
    }, 3000)
  }

}
