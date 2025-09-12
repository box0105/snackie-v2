import { Component, signal } from '@angular/core';
import { TodaySpecial } from "../components/today-special/today-special";
import { Header } from "../header/header";
import { PickHistory } from "../components/pick-history/pick-history";
import { Btn } from "../components/btn/btn";

@Component({
  selector: 'app-home',
  imports: [TodaySpecial, Header, PickHistory, Btn],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
isShowTodaySpecial = signal(false)

  showTodaySpecial() {
    this.isShowTodaySpecial.update(flag => !flag)
  }
}
