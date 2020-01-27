import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-all-projects',
    templateUrl: './all-projects.component.html',
    styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent implements OnInit {

    WorkerFrom: FormGroup;
    submitted = false;


    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private modalService: NgbModal
    ) { }

    ngOnInit() {
        this.WorkerFrom = this.formBuilder.group({
            workerName: ['', Validators.required],
            equip: ['', Validators.required],
            devices: ['', Validators.required]
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
        this.router.navigate(['./super-admin/all-projects/edit-project/1'])
    }

    // view a project
    view() {
        this.router.navigate(['./super-admin/all-projects/view-project/1'])
    }

    openLg(content) {
        this.modalService.open(content, { size: 'lg' });
    }

}
