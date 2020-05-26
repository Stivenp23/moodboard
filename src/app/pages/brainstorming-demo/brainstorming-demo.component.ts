import {Component, OnInit} from '@angular/core'
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-brainstorming-demo',
  templateUrl: './brainstorming-demo.component.html',
  styleUrls: ['./brainstorming-demo.component.scss']
})
export class BrainstormingDemoComponent implements OnInit {

  constructor(private location: DataService) {
  }

  ngOnInit(): void {

  }
  back() {
    this.location.backClicked();
  }
  setDataWords(words) {
  }

}
