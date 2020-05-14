import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-select-images',
  templateUrl: './select-images.component.html',
  styleUrls: ['./select-images.component.scss']
})
export class SelectImagesComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 6
      },
      940: {
        items: 6
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
