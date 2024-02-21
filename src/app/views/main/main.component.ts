import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IsOpenService} from "../../shared/service/is-open.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('content') content!:ElementRef


  isOpen: boolean = false
  constructor(public serviceOpen:IsOpenService) {

  }

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
