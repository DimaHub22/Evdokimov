import { Component, OnInit} from '@angular/core';
import {IsOpenService} from "../../shared/service/is-open.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isOpen: boolean = false
  constructor(public serviceOpen:IsOpenService) {

  }

  ngOnInit(): void {

  }


}
