import {ElementRef, EventEmitter, Injectable, Output, ViewChild} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsOpenService {
  isOpen: boolean = false
  isOpenModal:boolean =false
  body = document.getElementById('body')

  constructor() { }

  getHeight(content:ElementRef){
    const height = document.documentElement.clientHeight
    if(height <= 430){
      content.nativeElement.style.height = '300px'
    }else{
      content.nativeElement.style.height = '425px'
    }
  }

  addBody():void{
    if(this.body){
      this.body.classList.add('modal-body')
    }
  }

  removeBody():void{
    if(this.body){
      this.body.classList.remove('modal-body')
    }
  }

}
