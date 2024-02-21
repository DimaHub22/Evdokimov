import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsOpenService {
  isOpen: boolean = false
  constructor() { }
}
