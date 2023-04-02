import { Component, OnInit } from '@angular/core';
import { Woche } from './woche';

@Component({
  selector: 'app-pilot-dashboard-week',
  templateUrl: './pilot-dashboard-week.component.html',
  styleUrls: ['./pilot-dashboard-week.component.css']
})
export class PilotDashboardWeekComponent implements OnInit {

    
  week0 = new Woche(new Date())
  week1 = new Woche(this.week0.nextMontag())
  week2 = new Woche(this.week1.nextMontag())
  selectedWeek = this.week0
  selectedState = this.week0;
  
  onChange($event) {
    console.log($event.value.getDDMM());
    this.selectedState = $event.value;
  }

  onReset() {
    this.selectedState = this.week0;
  }
  ngOnInit() {
  }

}