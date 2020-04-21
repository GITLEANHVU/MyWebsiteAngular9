import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public name;
  public age;
  public living;
  public list;
  constructor(private common: CommonService) {
    this.name = common.name;
    this.age = common.age;
    this.living = common.living;
    this.list = common.list;
    this.nameTodo = common.nameTodo;
    this.todoList = common.todoList;
    this.dem = common.dem;
  }
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
  ngOnInit(): void {
  }

}
