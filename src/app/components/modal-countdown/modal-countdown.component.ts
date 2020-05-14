import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal-countdown',
  templateUrl: './modal-countdown.component.html',
  styleUrls: ['./modal-countdown.component.scss']
})
export class ModalCountdownComponent implements OnInit {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
