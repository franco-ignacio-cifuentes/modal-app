import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public modalBreakpoints: number[] = [0.5, 0.99];
  public count = 0;
  public buttonClass: string = 'top';

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  ionBreakpointDidChange(event: any) {
    const breakpoint = event.detail.breakpoint;

    if (breakpoint === this.modalBreakpoints[0])
      this.buttonClass = 'bottom';
    else
      this.buttonClass = 'top';
  }

}
