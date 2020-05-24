import {Component, Input, OnInit} from '@angular/core'
import html2canvas from 'html2canvas'

@Component({
  selector: 'app-moodboard-image',
  templateUrl: './moodboard-image.component.html',
  styleUrls: ['./moodboard-image.component.scss']
})
export class MoodboardImageComponent implements OnInit {
  @Input() concepts

  constructor() {
  }

  ngOnInit(): void {
  }

}
