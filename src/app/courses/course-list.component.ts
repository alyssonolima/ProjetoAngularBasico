import { Component, OnInit } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{
    courses: Course[] = [];

    ngOnInit(): void{
        this.courses = [
            {
                id: 1,
                name: 'Angular Curso',
                imageurl: 'assets/images/forms.png',
                price: 99.99,
                code: 'xps-100',
                duration: 128,
                rating: 8.3,
                releaseDate: 'Maio. 5. 1989'
            
            },
            {
                id: 2,
                name: 'Angular Curso parte 2',
                imageurl: 'assets/images/http.png',
                price: 299.99,
                code: 'xps-200',
                duration: 500,
                rating: 9.3,
                releaseDate: 'Setembro. 16. 2020'
            
            }
        ]
    }

}