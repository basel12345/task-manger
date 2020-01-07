import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  // add a project
  addProject() {
    this.router.navigate(["./super-admin/add-project"])
  }

  remove() {
    console.log("Ok")
  }

  // edit a project
  edit() {
    this.router.navigate(['./super-admin/all-projects/edit-project/1'])
  }

  // view a project
  view() {
    this.router.navigate(['./super-admin/all-projects/view-project/1'])
  }

}
