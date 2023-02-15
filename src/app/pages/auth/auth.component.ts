import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public currentOperation: number = 1;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  chnageOperation(operation: number) {
    this.currentOperation = operation
  }

  navigate(route: string) {
    this.router.navigate([`/${route}`]);
  }

}
