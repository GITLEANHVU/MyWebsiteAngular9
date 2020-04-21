import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-qlhoc-sinh',
  templateUrl: './qlhoc-sinh.component.html',
  styleUrls: ['./qlhoc-sinh.component.scss']
})
export class QLHocSinhComponent implements OnInit {
  public list = {};
  constructor(private common: CommonService) {
    this.list = common.list;
  }

  ngOnInit(): void {
  }

}
