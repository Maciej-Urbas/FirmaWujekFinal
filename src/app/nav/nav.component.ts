import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor() {}

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit(): void {}

  zjedzNaDol() {
    if (window.innerWidth < 746) {
      this.toggle();
      const butt = document.getElementsByClassName('footer-down');
      let ss = butt[0].getBoundingClientRect().top;

      setTimeout(() => {
        window.scroll({
          top: ss,
          left: 0,
          behavior: 'smooth',
        });
      }, 400);
    } else {
      const butt = document.getElementsByClassName('footer-down');
      let ss = butt[0].getBoundingClientRect().top;
      ss = ss + 200;

      window.scroll({
        top: ss,
        left: 0,
        behavior: 'smooth',
      });
    }
  }
}
