import { Component } from '@angular/core';
import { navigation } from './menu.models';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent {
  isShowMobileMenu = false;
  navigation = navigation;

  openMobileMenu() {
    this.isShowMobileMenu = !this.isShowMobileMenu;
  }
}
