import {Component, Input, OnInit} from '@angular/core';
import {IsOpenService} from "../../service/is-open.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent implements OnInit {


  constructor(private router: Router, public serviceOpen:IsOpenService) { }

  ngOnInit(): void {

  }
  routs() {
    this.serviceOpen.isOpen = false
  }
}
