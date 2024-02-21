import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IsOpenService} from "../../shared/service/is-open.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @ViewChild('content') content!:ElementRef
  isOpen: boolean = false
  constructor(public serviceOpen:IsOpenService) { }

  ngOnInit(): void {
  }

  openModal(){
    this.isOpen = true

    this.serviceOpen.addBody()

    this.serviceOpen.getHeight(this.content)

  }
  closeModal(){
    this.isOpen = false
    this.serviceOpen.removeBody()
  }
}
