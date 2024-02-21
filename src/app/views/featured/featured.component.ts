import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {IsOpenService} from "../../shared/service/is-open.service";

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {
  @ViewChild('content') content!:ElementRef
  isOpen: boolean = false
  constructor(private router: Router, public serviceOpen:IsOpenService) { }

  ngOnInit(): void {

  }

  routers(){
    this.router.navigate(['/training'],{fragment:'training'})
  }

  openModal(){
    this.isOpen = true

    if(this.serviceOpen.body){
      this.serviceOpen.body.classList.add('modal-body')
    }
    this.serviceOpen.getHeight(this.content)
  }
  closeModal(){
    this.isOpen = false
    if(this.serviceOpen.body){
      this.serviceOpen.body.classList.remove('modal-body')
    }
  }
}
