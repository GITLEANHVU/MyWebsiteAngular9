import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // khai báo biến
  public name;
  public age;
  public living;
  // creat new array: listName array : *ngFor
  public listFriendName = [];
  public listFriendAge = [];
  // obj.
  public list = [

  ];


  // *ngIf -ng-template

  constructor(private common: CommonService) {
    this.name = common.name;
    this.age = common.age;
    this.living = common.living;
    this.list = common.list;
    this.nameTodo = common.nameTodo;
    this.todoList = common.todoList;
    this.dem = common.dem;
  }

  ngOnInit(): void {
  }



  // public tangtuoi(ID) {
  //   this.list[ID].age++;
  // }
  // public giamtuoi(ID) {
  //   this.list[ID].age--;
  // }
  public reset() {
    this.name = "";
    this.age = 0;
    for (let i = 0; i < this.list.length; i++) {
      this.list[i].age = ' ';
    }
  };
  // Events (click)
  /**
   (click)="myFunction();"
   (dblclick)="myFunction();"

   (submit)="myFunction();"

   (blur)="myFunction();"// con trỏ chuột ra khỏi input thì làm
   (focus)="myFunction();" // nhấn chuột vào một input thì làm

   (scroll)="myFunction();"

   (cut)="myFunction();"
   (copy)="myFunction();"
   (paste)="myFunction();"

   (keyup)="myFunction();"
   (keypress)="myFunction();"
   (keydown)="myFunction();"
   */


  // TODO LIST
  public nameTodo = ' ';
  public todoList = [];
  public dem = 0;

  public addItem() {
    if (this.nameTodo !== ' ') {
      this.todoList.push(this.nameTodo);
      this.nameTodo = ' ';
    }
  }
}
