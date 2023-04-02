export class Woche {
  montag = new Date()
  sonntag = new Date()
  constructor (date: Date) {
    var lessDays = date.getDay() == 0 ? 6 : date.getDay() - 1
    this.montag=new Date(date.getFullYear(),date.getMonth(),date.getDate()-lessDays)
    this.sonntag = new Date(date.getFullYear(),date.getMonth(),date.getDate()-lessDays+6)
  }
  private _getDDMM(date) {
    return new Intl.DateTimeFormat('de-CH', { day: '2-digit', month: '2-digit' }).format(date).substring(0,5)
  }
  getDDMM() {
    return this._getDDMM(this.montag) + "-" + this._getDDMM(this.sonntag)
  }
  nextMontag() {
    return new Date(new Date(this.sonntag).setDate(this.sonntag.getDate()+1))
  }
}