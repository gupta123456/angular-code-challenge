import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data:any;
  constructor(private service:DashboardService) { }

  ngOnInit(): void {
    this.service.getTrendingTickets().subscribe(res=>{
      console.log(res);
      this.data = res;
    })
  }

}
