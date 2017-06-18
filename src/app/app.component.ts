import { Component, ViewChild} from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ZoneDetail } from '../pages/zone-detail/zone-detail';
import { Tabs } from '../pages/tabs/tabs'

import { Manifesto } from '../pages/manifesto/manifesto';
import { Products } from '../pages/products/products';
import { Fees } from '../pages/fees/fees';
import { Terms } from '../pages/terms/terms';


import { ParksService} from "../providers/parks.service";
import { ContactService } from "../providers/contact.service";

@Component({
  templateUrl: 'app.html'
})

export class MyApp{

  @ViewChild(Nav) nav: Nav;

  rootPage: any = Tabs;


  pages: Array<{title: string, component: any, icon:string}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public parksService: ParksService,
    public contact: ContactService) {

    this.pages = [
      
        { title: 'Arusha Manifesto', component: Manifesto, icon:'ribbon'},
        { title: 'Tourism Products', component: Products, icon:'basket'},
        { title: 'Regulations', component: Terms, icon:'eye'},
        { title: 'Park Fees', component: Fees, icon:'pricetag'}
   ]
   	this.initializeApp();
  }

  initializeApp() {
    // let status bar overlay webview
    this.statusBar.overlaysWebView(true);

    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      // set status bar to white
      this.statusBar.backgroundColorByHexString('#017A35');
      this.splashScreen.hide();
		  this.parksService.load();
      this.contact.load();
    });
  }

  open(page) {
    this.nav.push(page.component);
  }

  viewDetails(id, name){
    this.nav.push(ZoneDetail,{id:id, name:name});
  }
}
