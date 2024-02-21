import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IsOpenService} from "../../shared/service/is-open.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit,AfterViewInit {
  @ViewChild('content') content!:ElementRef
  isOpen: boolean = false

  constructor(public serviceOpen:IsOpenService) {

  }
ngAfterViewInit() {
    // if(document.documentElement.clientHeight <= 430){
    //   this.content.nativeElement.style.height = '300px'
    //   console.log(this.content.nativeElement)
    // }

}

  ngOnInit(): void {

  }

  openModal(){
    this.isOpen = true
    const height = document.documentElement.clientHeight
    if(height <= 430){
      this.content.nativeElement.style.height = '300px'
    }else{
      this.content.nativeElement.style.height = '425px'
    }
  }


}
