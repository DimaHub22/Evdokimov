import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {IsOpenService} from "../../service/is-open.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
isOpen:boolean = false
  constructor(private router: Router, public serviceOpen:IsOpenService) { }

  ngOnInit(): void {
  }
  routs(fragment:string) {
    this.router.navigate(['/'], {fragment: fragment})
  }

  scrollT(){
    window.scrollTo(0, 0)
  }
}
