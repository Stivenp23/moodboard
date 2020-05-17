import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-brainstorming-demo',
  templateUrl: './brainstorming-demo.component.html',
  styleUrls: ['./brainstorming-demo.component.scss']
})
export class BrainstormingDemoComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }

  setDataWords(words) {
    console.log(words)
  }

}
