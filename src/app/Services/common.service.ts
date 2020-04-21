import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  // khai bao bien
  public name = 'LEANHVU';
  public age = 20;
  public living = 'Thành Phố Hồ Chí Minh';
  // listFriend
  public listFriendName = ['Bố Thanh Thư', 'Thương Thương', 'Yến Đại Ca', 'Chị Di Di'];
  public listFriendAge = [20, 19, 19, 23];
  // obj - ListFriend
  public list = [
    { ID: 1, name: 'Bố Thanh Thư', age: ' ' },
    { ID: 2, name: 'Thương Thương', age: ' ' },
    { ID: 3, name: 'Yến Đại Ca', age: ' ' },
    { ID: 4, name: 'Chị Di Di', age: ' ' }
  ];

  public nameTodo = ' ';
  public todoList = [];
  public dem = 0;
  constructor() { }
}
