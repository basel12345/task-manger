import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // delete a worker
  delete() {
    console.log("Ok")
  }

}
