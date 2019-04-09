import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class directorService {

  public displayCmasLogo = new BehaviorSubject<boolean>(true);

  castDisplayCmasLogo = this.displayCmasLogo.asObservable();
  
  constructor( ) {
  }

  public setDisplayCmasLogo(value:boolean){
    this.displayCmasLogo.next(value);
  }

  public getDisplayCmasLogo(value){
    return this.displayCmasLogo.value;
  }

}
