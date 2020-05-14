import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalOptions} from "@ng-bootstrap/ng-bootstrap";
import {ModalCountdownComponent} from "../../components/modal-countdown/modal-countdown.component";
import {ModalWordsComponent} from "../../components/modal-words/modal-words.component";

@Component({
  selector: 'app-brainstorming',
  templateUrl: './brainstorming.component.html',
  styleUrls: ['./brainstorming.component.scss']
})
export class BrainstormingComponent implements OnInit {
  modalOption: NgbModalOptions = {};
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  coundown() {
    this.modalOption.backdrop = 'static';
    this.modalOption.keyboard = false;
    this.modalOption.centered = true;
    const modalRef = this.modalService.open(ModalCountdownComponent,this.modalOption);
   // modalRef.componentInstance.name = 'World';
  }
  words() {
    this.modalOption.backdrop = 'static';
    this.modalOption.keyboard = false;
    this.modalOption.centered = true;
    const modalRef = this.modalService.open(ModalWordsComponent,this.modalOption);
    // modalRef.componentInstance.name = 'World';
  }
}
