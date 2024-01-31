import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Jtwebsite';

  ngOnInit(): void {
    AOS.init();
  }
}
