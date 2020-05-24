import {Component, ElementRef, OnInit, ViewChild} from '@angular/core'
import {OwlOptions} from 'ngx-owl-carousel-o'
import {DataService} from '../../services/data.service'
import {StoreDataService} from '../../services/store-data.service'
import html2canvas from 'html2canvas'

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

  images: any = []
  selected_image: any = {}
  downloading = false
  concepts: any = []
  id: string
  words: any = []
  step = 1
  class_image = 'option1'

  @ViewChild('screen') screen: ElementRef
  @ViewChild('canvas') canvas: ElementRef
  @ViewChild('downloadLink') downloadLink: ElementRef

  constructor(private dataService: DataService,
              private dataStore: StoreDataService) {
  }

  ngOnInit(): void {
    this.loadDataItem()
    this.loadImages()
  }

  loadImages() {
    this.images = this.dataService.getImages()
  }

  selectImage(concept, img, type) {
    type = type || 'normal'
    this.selected_image.src = img
    this.selected_image.type = type
    concept.image = this.selected_image
  }

  next() {
    this.step++
    this.selected_image = {}
  }

  loadDataItem() {
    this.concepts = this.dataService.getAllConcepts()
    this.concepts.map(item => {
      item.word = this.dataStore.getSelectedWord(item.id)
    })
  }

  handleUpload(concept, e): void {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      this.selectImage(concept, reader.result, 'base64')
    }
  }

  downloadImage() {
    this.downloading = true
    html2canvas(this.screen.nativeElement).then(canvas => {
      this.canvas.nativeElement.src = canvas.toDataURL()
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png')
      this.downloadLink.nativeElement.download = 'Moodboard.png'
      this.downloadLink.nativeElement.click()
    })
    this.downloading = false
  }
}
