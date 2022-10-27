import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  guzior() {
    window.open(
      'https://www.google.com/maps/dir//50.176992,18.778189/@50.176992,18.778189,17z/data=!4m2!4m1!3e0',
      '_blank'
    );
  }
}
