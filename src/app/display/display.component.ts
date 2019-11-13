import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
users:any;
  constructor() { }

  ngOnInit() {
    this.users= [
     {name: 'MMMMM',
      age: 20,
    country: 'India'},

    {name: 'MMMMM1',
    age: 20,
  country: 'India'
    },
    {
    name: 'MMMMM2',
      age: 20,
    country: 'India'
  }

    ];
  }
  
}
