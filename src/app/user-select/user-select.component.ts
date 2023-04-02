import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-select',
  templateUrl: './user-select.component.html',
  styleUrls: ['./user-select.component.css']
})
export class UserSelectComponent implements OnInit {

  title = "Wer bist Du?"
  gridColumns = 3
  pilotList = [
    {fullname: "Pflege/Empfang", nick: "Pflege/Empfang"},
    {fullname: "Marco Amrein", nick: "Marco"},
    {fullname: "Bettina Wyrsch", nick: "Bettina"},
    {fullname: "Patrick Freudiger", nick: "Pädi"},
    {fullname: "Szabolcs Szilagyi", nick: "Szabi"},
  ]

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3
  }
  ngOnInit() {
  }

}