import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public fontColor: any;

  constructor() { }

  ngOnInit() {
    this.fontColor = '#3E3E3E';
  }

  search(value) {
    
  }

clickMe(){
    alert("Bootstap working");
  }
}