import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Wer bist Du?";
  gridColumns = 3;
  pilotList = [
    {fullname: "Pflege/Empfang", nick: "Pflege/Empfang"},
    {fullname: "Marco Amrein", nick: "Marco"},
    {fullname: "Bettina Wyrsch", nick: "Bettina"},
    {fullname: "Patrick Freudiger", nick: "Pädi"},
    {fullname: "Szabolcs Szilagyi", nick: "Szabi"},
  ]

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }
}
