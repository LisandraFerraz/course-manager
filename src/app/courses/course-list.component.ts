import { CourseService } from './course.service';
import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component ({
    // selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{
    courses: Course[];
    filteredCourses: Course[] = [];
    _filterBy: string;

    // chamando o service que adiciona as informacoes no array de cursos
    constructor(
        private courseService: CourseService){
    }

    // chamando a funcao retrieve que mostra o conteudo criado no service
    ngOnInit(): void {
        this.courses = this.courseService.retrieveAll();
        this.filteredCourses = this.courses;
    }

    set filter(value: string){
        this._filterBy = value;
        this.filteredCourses = this.courses.filter((course: Course) =>
        course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1)
    }

    get filter(){
        return this._filterBy;
    }

}