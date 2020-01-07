import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-empolyee',
  templateUrl: 'add-empolyee.component.html',
  styleUrls: ['add-empolyee.component.css']
})
export class AddEmpolyeeComponent implements OnInit {
    EmpoleeyFrom: FormGroup;
    submitted = false;
    constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
      this.EmpoleeyFrom = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['',  [Validators.required, Validators.email]],
        telephone: ['',  Validators.required],
        role: ['', Validators.required]
      });
    }
  
    get f() { return this.EmpoleeyFrom.controls; }
  
    onSubmit() {
      console.log(this.EmpoleeyFrom.value)
      this.submitted = false;
      // stop here if form is invalid
      if (this.EmpoleeyFrom.invalid) {
          this.submitted = true;
          return;
      }
      this.EmpoleeyFrom.reset();
    }

}
