import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
