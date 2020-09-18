import { Component, OnInit } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{
    filteredCourses: Course[] = [];

    _courses: Course[] = [];
    
    _filterBy: string;

    constructor(private courseService: CourseService){  }

    ngOnInit(): void{
        this.retrievAll();
    }

    retrievAll(): void {
        this.courseService.retrievAll().subscribe({
            next: courses => {
                this._courses = courses;
                this.filteredCourses = this._courses;
            },
            error: err => console.log('Erro', err)
        });        
    }

    deleteById(courseId: number): void{
        this.courseService.deleteById(courseId).subscribe({
            next: () => {
                console.log("Delete with sucess!");
                this.retrievAll();
            },
            error: err => console.log("Erro", err)
        })
    }

    set filter(value: string){
        this._filterBy = value;

        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1 );
    }

    get filter(){
        return this._filterBy;
    }

}