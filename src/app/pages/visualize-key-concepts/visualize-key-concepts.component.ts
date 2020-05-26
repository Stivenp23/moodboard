import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-visualize-key-concepts',
  templateUrl: './visualize-key-concepts.component.html',
  styleUrls: ['./visualize-key-concepts.component.scss']
})
export class VisualizeKeyConceptsComponent implements OnInit {

  constructor( private dataService: DataService) { }

  ngOnInit(): void {
  }
  back() {
    this.dataService.backClicked();
  }

}
