import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-component',
  templateUrl: './error-component.component.html',
  styleUrls: ['./error-component.component.css']
})
export class ErrorComponentComponent implements OnInit {
  errorMessage = '';
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    //this.errorMessage = this.router.snapshot.data['message'];
    this.router.data.subscribe((data)=>{
      this.errorMessage = data['message'];
    })
  }

}
