import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  panel: string = 'p1'

  isOpen:boolean = false
  isNumber:boolean = false
  isCheck:boolean = false
  isPartnery:boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  show(p: string) {
    this.panel === p ? this.panel = '' : this.panel = p
  }
}
