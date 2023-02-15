import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-card',
  templateUrl: './test-card.component.html',
  styleUrls: ['./test-card.component.scss']
})
export class TestCardComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
