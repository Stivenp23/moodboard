import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal-words',
  templateUrl: './modal-words.component.html',
  styleUrls: ['./modal-words.component.scss']
})
export class ModalWordsComponent implements OnInit {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
