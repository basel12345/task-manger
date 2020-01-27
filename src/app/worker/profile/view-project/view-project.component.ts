import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-view-project',
    templateUrl: './view-project.component.html',
    styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {

    EmpoleeFrom: FormGroup;
    submitted = false;
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.EmpoleeFrom = this.formBuilder.group({
            Installation: ['', Validators.required],
            Paths: ['', Validators.required],
            report: ['', Validators.required],
            problems: ['', Validators.required]
        });
    }

    get f() { return this.EmpoleeFrom.controls; }

    onSubmit() {
        console.log(this.EmpoleeFrom.value)
        this.submitted = false;
        // stop here if form is invalid
        if (this.EmpoleeFrom.invalid) {
            this.submitted = true;
            return;
        }
        this.EmpoleeFrom.reset();
    }
}
