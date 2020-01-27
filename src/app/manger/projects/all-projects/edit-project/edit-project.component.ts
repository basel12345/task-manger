import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-edit-project',
    templateUrl: './edit-project.component.html',
    styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {


    EmpoleeFrom: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.EmpoleeFrom = this.formBuilder.group({
            nameProject: ['', Validators.required],
            description: ['', Validators.required],
            manger: ['', Validators.required]
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
