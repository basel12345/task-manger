import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent implements OnInit {

  WorkerFrom: FormGroup;
  submitted = false;

 
  constructor(
    private router :Router,
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.WorkerFrom = this.formBuilder.group({
      workerName: ['', Validators.required]
    });
  }

  get f() { return this.WorkerFrom.controls; }

  onSubmit() {
    console.log(this.WorkerFrom.value)
    this.submitted = false;
    // stop here if form is invalid
    if (this.WorkerFrom.invalid) {
        this.submitted = true;
        return;
    }
    this.WorkerFrom.reset();
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
    this.router.navigate(['./manger/projects/all-projects/edit-project/1'])
  }

  // view a project
  view() {
    // 
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }
}
