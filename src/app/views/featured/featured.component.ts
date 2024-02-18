import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {

  isOpen: boolean = false
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  routers(){
    this.router.navigate(['/training'],{fragment:'training'})
  }
}
