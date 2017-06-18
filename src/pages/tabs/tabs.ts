import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { Message } from '../message/message';
import { Help } from '../help/help';
import { Map } from '../map/map';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})

export class Tabs {

  // set the root pages for each tab
  tab1Root: any = HomePage;
  tab2Root: any = Message;
  tab3Root: any = Help;
  tab4Root: any = Map;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
