import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logo:string="/assets/571e276e-4ce8-4132-864e-fdadd9b202ce.jpeg"

  constructor() { }

  ngOnInit() {
  }

}
