import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
