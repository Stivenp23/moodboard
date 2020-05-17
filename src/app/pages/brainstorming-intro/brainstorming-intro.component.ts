import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Router} from '@angular/router'
import {DataService} from '../../services/data.service'

@Component({
  selector: 'app-brainstorming-intro',
  templateUrl: './brainstorming-intro.component.html',
  styleUrls: ['./brainstorming-intro.component.scss']
})
export class BrainstormingIntroComponent implements OnInit {
  id: string
  item: any

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.loadDataItem(this.id)
  }

  loadDataItem(id) {
    this.item = this.dataService.findById(id)
    if (this.item === null) {
      this.router.navigate([''])
    }
  }

}
