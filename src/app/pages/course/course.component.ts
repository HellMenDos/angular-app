import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  public currentTab: number = 1
  constructor() { }

  ngOnInit(): void {
  }

  classItem(tab: number) {
    return this.currentTab == tab ? 'course_tabs_item item_active' : 'course_tabs_item'
  }
  setTab(tab: number) {
    this.currentTab = tab
  }

}
