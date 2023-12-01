import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  public modalBreakpoints: number[] = [0.5, 0.99];
  public count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

}
