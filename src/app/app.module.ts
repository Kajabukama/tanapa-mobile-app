import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { CallNumber } from '@ionic-native/call-number';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Help } from '../pages/help/help';
import { Message } from '../pages/message/message';
import { Tabs } from '../pages/tabs/tabs';
import { Map } from '../pages/map/map';

import { Manifesto } from '../pages/manifesto/manifesto';
import { Products } from '../pages/products/products';
import { Fees } from '../pages/fees/fees';
import { Terms } from '../pages/terms/terms';
import { ZoneDetail } from '../pages/zone-detail/zone-detail';
import { ParkDetail } from '../pages/park-detail/park-detail';
import { ParkExtra } from "../pages/park-extra/park-extra";
import { Popover } from "../pages/popover/popover";
import { ContactDetail } from "../pages/contact-detail/contact-detail";

import { ActivityService } from '../providers/activities';
import { ParksService } from '../providers/parks.service';
import { ContactService } from '../providers/contact.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ValuesPipe } from '../values-pipe'

@NgModule({
  declarations: [
    ValuesPipe,
    MyApp,
    HomePage,
    Tabs,
    ZoneDetail,
    ParkDetail,
    Manifesto,
    ParkExtra,
    Popover,
    ContactDetail,
    Products,
    Fees,
    Terms,
    Help,
    Message,
    Map
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,Tabs,
    ZoneDetail,
    ParkDetail,
    Manifesto,
    ParkExtra,
    Popover,
    ContactDetail,
    Products,
    Fees,
    Terms,
    Help,
    Message,
    Map
  ],
  providers: [
    ActivityService,
    ParksService,
    ContactService,
    StatusBar,
    SplashScreen,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
