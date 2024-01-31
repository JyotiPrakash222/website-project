import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  pcount: number = 0;
  pcountstop: any = setInterval(() => {
    this.pcount++;
    if (this.pcount == 199) {
      clearInterval(this.pcountstop);
    }
  }, 30);
}
