import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public data : any = [
  {id: 1, images: 'https://images.unsplash.com/photo-1593405844957-3854dae97a19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80', name: 'images1'},
  {id: 2, images: 'https://images.unsplash.com/photo-1593402024151-7484bf6ab937?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80', name: 'images2'},
  {id: 3, images: 'https://images.unsplash.com/photo-1593178395388-91318b9a42e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80', name: 'images3'},
  {id: 4, images: 'https://images.unsplash.com/photo-1579432111557-611f9149f0b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80', name: 'images4'},
  {id: 5, images: 'https://images.unsplash.com/photo-1544476866-ce192b63bd7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=719&q=80', name: 'images5'}
  ]
  
  constructor() { }

  ngOnInit() {
  }

}