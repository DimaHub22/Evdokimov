import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IsOpenService} from "../../shared/service/is-open.service";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  @ViewChild('content') content!:ElementRef

  panel: string = 'p1'

  isOpen:boolean = false
  isNumber:boolean = false
  isCheck:boolean = false
  isPartnery:boolean = false
  constructor(public serviceOpen:IsOpenService) { }

  ngOnInit(): void {
  }

  show(p: string) {
    this.panel === p ? this.panel = '' : this.panel = p
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
