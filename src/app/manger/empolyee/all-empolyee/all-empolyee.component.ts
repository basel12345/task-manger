import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-all-empolyee',
    templateUrl: './all-empolyee.component.html',
    styleUrls: ['./all-empolyee.component.css']
})
export class AllEmpolyeeComponent implements OnInit {

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }

    view() {
        this.router.navigate(['./worker/profile'])
    }

}
