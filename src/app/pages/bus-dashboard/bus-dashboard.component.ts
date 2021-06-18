import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bus-dashboard',
  templateUrl: './bus-dashboard.component.html',
  styleUrls: ['./bus-dashboard.component.css']
})
export class BusDashboardComponent implements OnInit {

  bus!: string;

  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      this.bus = params.id as string;
    });
  }

}
